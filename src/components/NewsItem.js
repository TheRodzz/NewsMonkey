import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title,description} = this.props;
    const style = {
        marginRight: '1em',
      };
    return (
        <div>
        <div className="card" style={style}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

