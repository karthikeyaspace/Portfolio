import { Link } from "react-router-dom"
import OIV from '../assets/open-in-view.svg'

export default function NotFound() {
    return (
        <div className="nopage mt-16">
            <div className="container text-center">
                <div className="head">
                    <h1>Welcome to No-Page</h1>
                    <h2>I mean 404 page</h2>
                    <h3>I mean a non existing page</h3>
                    <h4>Sorry i'll fire my self</h4>
                    <h5>let me take you to the right page</h5>
                    <div className="paths mt-12">
                        <Link to="/"><p className="py-2 no-underline">Go to the <strong>Home</strong> page <img src={OIV} alt="" /></p> </Link>
                        <Link to="/about"> <p className="py-2 no-underline">Know <strong>About</strong> me <img src={OIV} alt="" /></p ></Link>
                        <Link to="/projects"><p className="py-2 no-underline">View the <strong>Projects</strong> what have I done <img src={OIV} alt="" /></p></Link>
                        <Link to="/blogs"><p className="py-2 no-underline"><strong>Blogs</strong> I have written <img src={OIV} alt="" /></p ></Link>
                        <Link to="/contact"><p className="py-2 no-underline"><strong>Contact</strong> me <img src={OIV} alt="" /></p></Link>
                        <Link to="/resume"><p className="py-2 no-underline">My <strong>Resume</strong> <img src={OIV} alt="" /></p></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}