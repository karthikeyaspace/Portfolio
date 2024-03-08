import React from "react"
import './About.css'
import about from '../../assets/about-edit.png'
import open from '../../assets/open-in-view.svg'
import data from './data.js'
import GitHubCalendar from "react-github-calendar"

export default function About() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="left">
                        <h1>About Me</h1>
                        <p>I am <span style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Karthikeya</span> from Hyderabad, Telangana</p>
                        <p>I am currently pursuing by 2nd year B-tech in computer science and data science at <i>VNR Vignan Jyothi College of Engineering</i> <a href="https://vnrvjiet.ac.in" target="_blank"><img src={open} alt="" /></a> </p>
                        <p>I am interested in <i>Web Development, Competitive Programming, Machine Learning</i>.</p>
                        <p>I love to work as a team</p>
                        <br />
                        <h4>Apart from tech stuff</h4>
                        <p>I like to play Basketball, watch movies and series</p>
                    </div>
                    <div className="right">
                        <div className="img-container">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutDown">

                <div className="container">
                    <div className="lang">
                        <h3>Languages/Frameworks</h3>
                        <div className="stack">
                            {
                                data.languages.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} className="tech-item" alt={item.name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="lang tech">
                        <h3>Technologies</h3>
                        <div className="stack">
                            {
                                data.technologies.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} className="tech-item &index;" alt={item.name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="github">
                <div className="container">
                    <h3>GitHub Contributions</h3>
                    <div className="calen">
                        <GitHubCalendar
                            username="karthikeyaspace"
                            blockSize={13}
                            blockMargin={5}
                            color="#c084f5"
                            fontSize={13}
                            style={{ cursor: 'crosshair' }}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}