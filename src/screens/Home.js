import React, { Component } from 'react'
import Avatar from "../components/Avatar";
import Introduction from "../components/Introduction";

 class Home extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
                <Avatar/>
                <Introduction/>
            </>
        )
    }
}

export default Home
