import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const {
      title,
      description,
      imgUrl,
      newsUrl,
      publishedAt,
      author,
      sourceName,
    } = this.props;

    //   const date = new Date(publishedAt).toISOString
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "90%" }}
          >
            {sourceName}
          </span>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            height="200"
            width="200"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 50 && title ? `${title.slice(0, 50)}...` : title}
            </h5>
            <p className="card-text">
              {description
                ? description.length > 70
                  ? `${description.slice(0, 70)}...`
                  : description
                : null}
            </p>
            {(author || publishedAt) && (
              <p className="card-text">
                {author && <small className="text-muted">{author}</small> }{author && publishedAt && <br />}
                {publishedAt && <small className="text-muted">
                  {new Date(publishedAt).toGMTString()}
                </small>}
              </p>
            )}

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
