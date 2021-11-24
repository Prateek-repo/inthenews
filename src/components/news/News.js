import React, { Component } from "react";
import NewsItem from "../newsItem/NewsItem";
import sampleOutput from "../../sampleOutput.json";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  articles = sampleOutput;
  apiKey=process.env.REACT_APP_NEWSAPIKEY

  static defaultProps = {
    pageSize: 10,
    country: "in",
    category: "general"
  }
  
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }
  // this.articles.articles

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props) {
    super(props);
    this.state = { articles: this.articles.articles, page: 1, totalNewsCount: 0, loading: true};
    const {category} =this.props
    document.title = `${category ? this.capitalizeFirstLetter(category) : null} - InTheNews`;
  }
  
  componentDidMount() {
    // this.setState({loading: false}) //note: temporary, just to check with dummy data
    
    this.getTheNews()
  }


  getTheNews = async () => {
    const {pageSize, country, category, progressBar} = this.props
    
    progressBar(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${pageSize}`
    const data = await fetch(url);
    progressBar(50)
    const parsedData = await data.json();
    progressBar(85)
    if(parsedData){
      this.setState({ articles: parsedData.articles, totalNewsCount: parsedData.totalResults, loading: false });
    }
    progressBar(100)
  };

  previousPageHandler = () => {
    let { page } = this.state;
    if (page > 1) {
      console.log("prev page")
      this.setState({  page: page - 1, loading: true, });
      this.getTheNews()
    }
  };

  nextPageHandler = () => {
    let { page, totalNewsCount } = this.state;
    const {pageSize} = this.props
    const hittingApiCondition = Math.ceil(totalNewsCount/pageSize >= page)
   
    if(hittingApiCondition){
    this.setState({ page: page + 1, loading: true, });
    this.getTheNews()
    }
  };

  getMoreNews = async () => {
    const {pageSize, country, category} = this.props
    const {articles} = this.state
    const url =
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    if(parsedData){
      this.setState({ articles: articles.concat(parsedData.articles)});
    }
  }

  fetchMoreData = () => {
    let { page } = this.state;
    this.setState({ page: page + 1 });
    this.getMoreNews()
  }


  render() {
    const {page, totalNewsCount, loading, articles} = this.state
    const {pageSize, category} = this.props
    const buttonDisableCondition = Math.ceil(totalNewsCount/pageSize >= page)
  
    return (
      <div className="container my-3"  >
        <h2>Top Headlines: {category ? this.capitalizeFirstLetter(category) : null}</h2>
         {loading ?  <div><Spinner/></div>:
       
       <div>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length !== totalNewsCount}
          loader={<Spinner/>}
        >

         <div className="row">
          {!this.state.loading && this.state.articles.map((newsItem) => (
            <div key={newsItem.url} className="col-md-4">
              <NewsItem
                title={newsItem.title}
                description={newsItem.description}
                imgUrl={newsItem.urlToImage}
                newsUrl={newsItem.url}
                author={newsItem.author}
                publishedAt={newsItem.publishedAt}
                sourceName={newsItem.source.name}
                
              />
            </div>
          ))}
        </div>
        </InfiniteScroll>
        
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-outline-dark" disabled={Math.ceil(page <=1) ? true : false} onClick={this.previousPageHandler}>
            &#x21FD; Previous
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            disabled = {!buttonDisableCondition ? true : false}
            onClick={this.nextPageHandler}
            
          >
            Next &#x21FE;
          </button>
         
        </div>
        </div>}
      </div>
    );
  }
}

export default News;
