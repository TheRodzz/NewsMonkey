import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.updateNews();
    }


    handleNextClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false });
        this.setState({page: this.state.page + 1})
        this.updateNews();
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }
    render() {

        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsMonkey - {this.props.title}</h2>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevClick}>
                        &larr; Previous
                    </button>
                    <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </div>

        )
    }
}

export default News
