import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="links">
                <a href="https://www.facebook.com/duc.melody.19"><i class="fab fa-facebook-square"></i></a>
                <a href=""><i class="fab fa-github-square"></i></a>
                <a href=""><i class="fab fa-google-plus-square"></i></a>
                <a href=""><i class="fab fa-youtube-square"></i></a>
            </div>
        )
    }
}

export default Link
