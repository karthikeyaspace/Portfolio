import React from "react"
import right from "../../assets/right.png"
import './Home.css'
import HomeDown from './HomeDown'
import github from '../../assets/github-logo.svg';
import linkedin from '../../assets/linkedin-logo.svg';
import twitter from '../../assets/twitter-logo.svg';

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="left">
                        <h2>Hey,</h2>
                        <h1>I'm <strong>Karthikeya</strong></h1>
                        <br />
                        <p>Computer Science Student</p>
                        <p>Frontend Developer</p>
                        <p>ML enthusiast</p>

                        <h3>And Welcome to my Portfolio....</h3>

                    </div>

                    <div className="right">
                        <div className="img-container">
                            <img src={right} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bridge">
                <HomeDown />
            </div>

            <div className="contactt">
                <h3>
                    Find me at
                </h3>
                <ul className="ul">
                    <li><a href="https://github.com/karthikeyaspace" target="_blank"><img src={github} className="link" alt="" /></a></li>
                    <li><a href="https://linkedin.com/in/karthikeyaveruturi" target="_blank"><img src={linkedin} className="link" alt="" /></a></li>
                    <li><a href="https://twitter.com/karthikeyaspace" target="_blank"><img src={twitter} className="link" alt="" /></a></li>
                </ul>
            </div>

        </>
    )
}