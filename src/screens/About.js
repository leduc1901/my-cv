import React, { Component } from 'react'
import Avatar from "../components/Avatar"

class About extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="about-me">
                <div className="my-info">
                    <div className="my-name">
                        Lê Trọng Đức
                   </div>
                   <Avatar/>
                   <div className="information">
                        I'm a energetic and passionate college student studying at Hanoi Open University. I spent 18 months to study programming. Aiming to use my knowledge that I have acquired from Internet and other centers as well as my self-study with my hardwork to satisfy my internship in your organization and also willing to learn more from my internship. I am extremely eager to be a part of Teko Vietnam
                   </div>
                </div>
                <div className="contact-me">
                    <div>
                        Contact Me
                    </div>
                    <div>
                        .................................
                    </div>
                    <div className="contact-ways">
                        <div className="phone-call">
                            <i class="fas fa-phone-square"></i>
                            0906086215
                        </div>
                        <div className="gmail">
                            <i class="fas fa-envelope"></i>
                            letrongduc1999@gmail.com
                        </div>
                        <div className="fb-contact">
                            <i class="fab fa-facebook-square"></i>
                            facebook.com/duc.melody.19
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
