import React, { Component, Fragment } from "react";
import NewsItem from "../newsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  apiKey = process.env.REACT_APP_NEWSAPIKEY;

  static defaultProps = {
    pageSize: 10,
    country: "in",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalNewsCount: 0,
      loading: true,
    };
    const { category } = this.props;
    document.title = `${
      category ? this.capitalizeFirstLetter(category) : null
    } - InTheNews`;
  }

  componentDidMount() {
    this.getTheNews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.country !== prevProps.country) {
      this.getTheNews();
    }
  }

  getTheNews = async () => {
    const { pageSize, country, category, progressBar } = this.props;
    const { page } = this.state;
    progressBar(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}&page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    progressBar(50);
    const parsedData = await data.json();
    progressBar(85);
    if (parsedData) {
      this.setState({
        articles: parsedData.articles,
        totalNewsCount: parsedData.totalResults,
        loading: false,
      });
    }
    progressBar(100);
  };

  getMoreNews = async () => {
    const { pageSize, country, category } = this.props;
    const { articles, page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}&page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    if (parsedData) {
      this.setState({ articles: articles.concat(parsedData.articles) });
    }
  };

  fetchMoreData = () => {
    let { page } = this.state;
    this.setState({ page: page + 1 });
    this.getMoreNews();
  };

  render() {
    const { totalNewsCount, loading, articles } = this.state;
    const { category, darkMode } = this.props;
    
    // style={{ backgroundColor: darkMode ? "black" : null }}

    return (
      <Fragment>
        <h2
          className="text-center"
          style={{ marginTop: "56px", color: darkMode ? "gray" : null }}
        >
          Top Headlines:{" "}
          {category ? this.capitalizeFirstLetter(category) : null}
        </h2>
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== totalNewsCount}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {!loading &&
                  articles.map((newsItem) => (
                    <div key={newsItem.url} className="col-md-4">
                      <NewsItem
                        title={newsItem.title}
                        description={newsItem.description}
                        imgUrl={newsItem.urlToImage}
                        newsUrl={newsItem.url}
                        author={newsItem.author}
                        publishedAt={newsItem.publishedAt}
                        sourceName={newsItem.source.name}
                        darkMode={darkMode}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </Fragment>
    );
  }
}

export default News;
