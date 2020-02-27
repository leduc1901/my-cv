import React, { Component } from 'react'
import ava from "../images/iconfinder_malecostume_403022.png"

class Avatar extends Component {
    

    render() {
        return (
            <div className="avatar">
                <img src={ava}/>
            </div>
        )
    }
}

export default Avatar
