import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, url } = this.props.aricles;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={urlToImage ? urlToImage : "https://s1.dmcdn.net/v/PDXvm1UCmCOwRqNIG/x10801"} style={{ height: "190px" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 45)}...</h5>
                        <p className="card-text">{description.slice(0, 88)}...</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default NewsItem;
