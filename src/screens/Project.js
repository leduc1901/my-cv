import React, { Component } from 'react'
import ReactLogo from "../images/ReactJS.jpg"
import LaravelLogo from "../images/unnamed.png"
class Project extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="projects">
                <div className="project">
                    <img  src={ReactLogo}/>
                    <div className="project-info">
                        <div className="project-name">
                            React Music Player
                        </div>
                        <div className="project-description">
                             Trình phát nhạc mp3 đơn giản bằng ReactJS
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/leduc1901/deploy-test">
                                GitHub
                            </a>
                            <a href="https://leduc1901.github.io/deploy-test/">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img  src={ReactLogo}/>
                    <div className="project-info">
                        <div className="project-name">
                            React Mobile Shop
                        </div>
                        <div className="project-description">
                            Trang web bán điện thoại với những chức năng cơ bản bằng ReactJS và Redux
                        </div>
                        <div className="project-link">
                            <a href="">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img  src={LaravelLogo}/>
                    <div className="project-info">
                        <div className="project-name">
                           Laravel Shop
                        </div>
                        <div className="project-description">
                            Trang web bán hàng với những chức năng cơ bản bằng Laravel
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/leduc1901/Laravel-Study">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img  src={ReactLogo}/>
                    <div className="project-info">
                        <div className="project-name">
                            React ToDo List
                        </div>
                        <div className="project-description">
                            App Todo List bằng ReactJS và Redux
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/leduc1901/toDoList-Remastered">
                                GitHub
                            </a>
                            <a href="">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
