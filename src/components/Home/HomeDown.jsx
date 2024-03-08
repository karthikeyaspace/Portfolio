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
                        a Frontend Developer.</p>
                    <p>I am also a Machine Learning enthusiast </p>
                    <p>I am always looking for new opportunities to learn and grow.</p>
                        <p>I am a quick learner and I am always looking for new challenges
                        to solve. </p> <p>I am also a competitive coder and I am always looking for
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