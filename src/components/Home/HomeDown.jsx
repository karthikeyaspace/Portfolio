import './Home.css'
import profilePic from '../../assets/homeimg.png'

export default function HomeDown() {
    return (
        <div className="homeDown">
            <div className="container">
                <div className="left">
                    <h2>Let Me Introduce Myself</h2>
                    <br />
                    <p>Hey, I am <strong>Karthikeya</strong>, a Computer Science Student and
                        Intrested in MERN stack and Machine learning</p>
                    <p>Constantly seeking fresh opportunities to learn and expand my skills.</p>
                    <p>A quick learner and always looking for new challenges to solve. </p> 
                    <p>I am a competitive coder and always looking for
                        new projects to work on.</p>
                </div>

                <div className="right">
                    <div className="img-container">
                        <img src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}