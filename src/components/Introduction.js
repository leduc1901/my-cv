import React, { Component } from 'react'
import Link from "./Link"

class Introduction extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="intro-wrapper">
                <div className="my-role">
                    Intern Developer
                </div>
                <div className="spacing">
                    .................................................
                </div>
                <div className="my-skill">
                    HTML/CSS | Bootstrap | JavaScript | jQuery | ReactJS 
                </div>
                <Link/>
            </div>
        )
    }
}

export default Introduction
