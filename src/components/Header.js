import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="menu-btn">

                    </div>
                    <div className="web-title">
                        Practice CSS
                    </div>
                </div>
                <div className="header-right">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
                    <Link to="/about">
                        About Me
                    </Link>
                   
                </div>
            </div>
        )
    }
}
