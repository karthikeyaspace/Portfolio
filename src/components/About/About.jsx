import React from "react"
import about from '../../assets/about-edit.png'
import open from '../../assets/open-in-view.svg'
import data from './data.js'
import GitHubCalendar from "react-github-calendar"

export default function About() {
    return (
        <div className="flex flex-col gap-8 bg-primary/90 text-secondary">
            <div className="about mt-16">
                <div className="container grid grid-cols-1 md:grid-cols-2 m-auto justify-center items-center">
                    <div className="left">
                        <h1 className="text-5xl mt-4 mb-8">About Me</h1>
                        <p className="text-base sm:text-xl mb-2">I am <span className="text-2xl font-extrabold">Karthikeya</span> from Hyderabad, Telangana</p>
                        <p className="text-base sm:text-xl mb-2">currently studying 2nd year B-tech in Computer Science and Data Science at <i>VNR Vignan Jyothi College of Engineering.</i> <a href="https://vnrvjiet.ac.in" target="_blank"><img src={open} alt="" style={{ maxWidth: '15px' }} /></a> </p>
                        <p className="text-base sm:text-xl mb-2">Interested in <i>Web Development, Competitive Programming, Machine Learning</i>.</p>
                        <p className="text-base sm:text-xl mb-2">Enjoys collaborative work and team environments.</p>
                        <h4 className="text-xl font-semibold mt-8">Apart from tech stuff</h4>
                        <p>I like to play Basketball, watch movies and series</p>
                    </div>
                    <div className="right">
                        <img src={about} className="m-auto" alt="" />
                    </div>
                </div>
            </div>

            <div className="aboutDown p-0 sm:px-3 md:p-6 text-center flex flex-col gap-16">

                <div className="container">
                    <div className="lang text-center">
                        <h3 className="text-2xl sm:text-3xl mb-4">Languages/Frameworks</h3>
                        <div className="flex flex-row flex-wrap m-auto justify-center itmes-center">
                            {
                                data.languages.map((item, index) => (
                                    <div key={index} className="m-2 sm:m-4 py-3 px-8 sm:px-16 text-center bg-secondary/10 shadow-inner hover:scale-95 transition-all ">
                                        <img src={item.img} className="w-14 sm:w-16" alt={item.name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="text-center">
                        <h3 className="text-3xl mb-4">Technologies</h3>
                        <div className="flex flex-row  flex-wrap m-auto justify-center itmes-center">
                            {
                                data.technologies.map((item, index) => (
                                    <div key={index} className="m-2 sm:m-4 py-3 px-8 sm:px-16 text-center bg-secondary/10 shadow-inner hover:scale-95 transition-all ">
                                        <img src={item.img} className="w-14 sm:w-16" alt={item.name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-2 text-center mt-16">
                <div className="container flex px-16 flex-col justify-center items-center">
                    <h3 className="text-2xl sm:text-3xl pb-8">GitHub Contributions</h3>
                    <div className="flex justify-center opacity-80 pb-8 w-full ">
                        <GitHubCalendar
                            username="karthikeyaspace"
                            blockSize={13}
                            blockMargin={5}
                            errorMessage="Could not load GitHub calendar of karthikeyaspace"
                            colorScheme="light"
                            fontSize={13}
                            style={{ cursor: 'crosshair'}}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}