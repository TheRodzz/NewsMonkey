import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
    const style = {
        marginRight: '1em',

      };
    return (
        <div>
        <div className="card my-3" style={style}>
            <img src={imageUrl?imageUrl:"https://www.dreamstime.com/stock-photo-news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-image42301371"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

