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
      darkMode,
    } = this.props;

    const cardFontsColor = { color: darkMode ? "gray" : null };

    const darkModeButton = `btn btn-sm btn-outline-${
      darkMode ? "light" : "dark"
    }`;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{sourceName}</span>
          </div>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            height="200"
            width="200"
          />
          <div
            className="card-body"
            style={{ backgroundColor: darkMode ? "black" : null }}
          >
            <h5 className="card-title" style={cardFontsColor}>
              {title.length > 50 && title ? `${title.slice(0, 50)}...` : title}
            </h5>
            <p className="card-text" style={cardFontsColor}>
              {description
                ? description.length > 70
                  ? `${description.slice(0, 70)}...`
                  : description
                : null}
            </p>
            {(author || publishedAt) && (
              <p className="card-text">
                {author && <small className="text-muted">{author}</small>}
                {author && publishedAt && <br />}
                {publishedAt && (
                  <small className="text-muted">
                    {new Date(publishedAt).toGMTString()}
                  </small>
                )}
              </p>
            )}

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className={darkModeButton}
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
