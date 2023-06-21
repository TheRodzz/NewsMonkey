import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    static propTypes = {

    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e24022a4b4a6456dbdc8456a8f281615";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }
    handleNextClick = async () => {
        if (Math.ceil(this.state.totalResults / 20) >= this.state.page + 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e24022a4b4a6456dbdc8456a8f281615&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
        }
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e24022a4b4a6456dbdc8456a8f281615&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
    }
    render() {

        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevClick}> &larr; Previous </button>
                    <button type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}

export default News
