
import nothing from '../assets/nothing.png';

export default function Blogs() {
    return (
        <div className="blogs mt-16">
            <div className="container">
                <h1>
                    I have no Blogs
                </h1>
                <div className="nothing">
                    <img src={nothing} alt="nothing" />
                </div>
                <h3>Yet</h3>
            </div>
        </div>
    )
}