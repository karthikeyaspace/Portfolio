import React from "react"
import right from "../assets/right.png"
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import twitter from '../assets/twitter-logo.svg';
import profilePic from '../assets/homeimg.png'


export default function Home() {
    return (
        <div className="home mt-16 flex flex-col gap-8">
            <div className="topdiv">
                <div className="container flex flex-row flex-wrap mx-auto justify-between items-center p-4">
                    <div className="left px-4 sm:py-4 sm:px-12">
                        <h2 className="text-3xl mb-4">Hey,</h2>
                        <h1 className="py-4 text-5xl mb-4">I'm <strong>Karthikeya</strong></h1>
                        <p>Computer Science Student</p>
                        <p>Fullstack Developer</p>
                        <p>ML enthusiast</p>
                        <h3 className="mt-8 text-xl font-bold">And Welcome to my Portfolio....</h3>

                    </div>

                    <div className="right mx-auto w-2/3 lg:mx-0 sm:w-5/12  ">
                        <img src={right} alt="" />
                    </div>
                </div>
            </div>

            <div className="homeDown xl:mt-28">
                <div className="container flex flex-row flex-wrap mx-auto mt-4 justify-between items-center p-4">
                    <div className="left px-4 sm:py-4 sm:px-12 md:w-2/3 lg:w-1/2 gap-4">
                        <h2 className="font-semibold text-4xl mb-10">Let Me Introduce Myself</h2>
                        <p className="mb-6">Hey, I am <strong>Karthikeya</strong>, a Computer Science Student and
                            Intrested in MERN stack development and Machine learning</p>
                        <p className="mb-4">Constantly seeking fresh opportunities to learn and expand my skills.</p>
                        <p className="mb-4">A quick learner and always looking for new challenges to solve. </p>
                        <p className="mb-4">I am a competitive coder and always looking for
                            new projects to work on.</p>
                    </div>

                    <div className="right mx-auto my-8 w-2/3 sm:w-1/2 md:w-1/3">
                        <img src={profilePic} alt="" />
                    </div>

                </div>
            </div>

            <div className="contactt flex flex-col items-center justify-center mt-8 sm:mt-20 mb-8">
                <h3 className="text-3xl font-bold">
                    Find me at
                </h3>
                <ul className="flex flex-row p-8">
                    <li className="hover:opacity-50"><a href="https://github.com/karthikeyaspace" target="_blank"><img src={github} className="w-8 mx-3" alt="" /></a></li>
                    <li className="hover:opacity-50"><a href="https://linkedin.com/in/karthikeyaveruturi" target="_blank"><img src={linkedin} className="w-8 mx-3" alt="" /></a></li>
                    <li className="hover:opacity-50"><a href="https://twitter.com/karthikeyaspace" target="_blank"><img src={twitter} className="w-8 mx-3" alt="" /></a></li>
                </ul>
            </div>

        </div>
    )
}