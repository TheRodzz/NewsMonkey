import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Spinner extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
