import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
            loading: false
        }
    }


    fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=baca234f586742f7a6b029741a8132d6&page=${this.state.page}&pageSize=${this.props.pageSize}`
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        // console.log(parsedData.articles);
        console.log(this.state.articles);
    }


    componentDidMount() {
        this.fetchData()

    }

    fetchMoreData = async () => {

    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center my-3">Top Headlines</h2>
                <div className="row" key={this.state.articles.url}>
                    {this.state.articles.map((element) => {
                        console.log(element.author)
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem aricles={element} />
                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default News;
