import React, { Component } from 'react';
export class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, url, source, author, publishedAt } = this.props.articles;
        return (
            <div className="my-3">
                <div className="card">
                    <div className="d-flex position-absolute" style={{ right: "0" }}>
                        <span className="badge rounded-pill bg-danger">{source.name}
                        </span>
                    </div>
                    <img src={urlToImage ? urlToImage : "https://videos.arynews.tv/wp-content/uploads/2019/03/11H6-520x293.jpg"} style={{ height: "190px" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.slice(0, 45) : ""}...</h5>
                        <p className="card-text">{description ? description.slice(0, 80) : "Call of Duty players have noticed that a Black Ops Cold War cosmetic has been ch.."}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
