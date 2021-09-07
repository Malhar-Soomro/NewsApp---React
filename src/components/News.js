import React, { Component } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

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
        this.props.setProgress(0);
        this.setState({
            loading: true
        })
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.props.setProgress(30);
        const data = await fetch(url);
        this.props.setProgress(70);
        const parsedData = await data.json();
        this.props.setProgress(100);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page
        });
    }

    componentDidMount() {
        this.fetchData();

    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page: this.state.page + 1
        });
    }

    capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    render() {
        return (
            <>
                <h2 className="text-center" style={{ marginTop: "70px" }}>Top {this.capitalize(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row" >
                            {!this.state.loading && this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem articles={element} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll >
            </>
        )
    }
}

export default News;
