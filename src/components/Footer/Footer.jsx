import './Footer.css';
import github from '../../assets/github-logo.svg';
import linkedin from '../../assets/linkedin-logo.svg';
import twitter from '../../assets/twitter-logo.svg';
import email from '../../assets/email-logo.svg';


export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="item">
                    <h4>Developed by <a href="https://github.com/karthikeyaspace/portfolio">Karthikeya.V</a></h4>
                </div>
                <div className="item">
                    <h4>Copyright <span style={{ width: '100px' }}>&copy;</span> 2024 VK</h4>
                </div>
                <div className="item">
                    <a href="https://github.com/karthikeyaspace" target='_blank'><span className='link'><img src={github} alt="github" /></span></a>
                    <a href="https://linkedin.com/in/karthikeyaveruturi" target='_blank'><span className='link' ><img src={linkedin} alt="linkedin" /></span></a>
                    <a href="https://twitter.com/karthikeyaspace" target='_blank'><span className='link'><img src={twitter} alt="twitter" /></span></a>
                    <a href="mailto:karthikeyaveruturi2005@gmail.com" target='_top'><span className='link'><img src={email} alt="mail" /></span></a>
                </div>
            </div>

        </div>
    )
}