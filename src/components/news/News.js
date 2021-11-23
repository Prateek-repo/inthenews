import React, { Component } from "react";
import NewsItem from "../newsItem/NewsItem";

export class News extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="hello" description="desc" imgUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="hello" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="hello" description="desc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
