import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="links">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-github-square"></i>
                <i class="fab fa-google-plus-square"></i>
                <i class="fab fa-youtube-square"></i>
            </div>
        )
    }
}

export default Link
