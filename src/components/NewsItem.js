import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title,description, imageUrl, newsUrl,author,date,source} = this.props;
    
    return (
        <div>
        <div className="card my-3" >
        <span className="badge text-bg-success" >{source}</span>

            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"> <small className='text-muted'>Published at {new Date(date).toLocaleString()} by {!author?"Unknown":author}</small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

