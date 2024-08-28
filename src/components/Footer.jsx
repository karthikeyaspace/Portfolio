import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import twitter from '../assets/twitter-logo.svg';
import email from '../assets/email-logo.svg';


export default function Footer() {
    return (
        <div className="border-t-2 mb-10 border-secondary bg-primary text-secondary border-opacity-80 text-center">
            <div className="container flex flex-row flex-wrap items-center justify-evenly m-0 static bottom-0 px-12 py-8">
                <div>
                    <h4>Developed by <a href="https://github.com/karthikeyaspace/portfolio">Karthikeya.V</a></h4>
                </div>
                <div className="my-2  md:my-0">
                    <h4>Copyright <span style={{ width: '100px' }}>&copy;</span> 2024 VK</h4>
                </div>
                <div className="item mb-2 md:mb-0 flex flex-row">
                    <a href="https://github.com/karthikeyaspace" target='_blank'><span className='link'><img src={github} className='w-6 mx-4 hover:opacity-60' alt="github" /></span></a>
                    <a href="https://linkedin.com/in/karthikeyaveruturi" target='_blank'><span className='link' ><img src={linkedin} className='w-6 mx-4 hover:opacity-60' alt="linkedin" /></span></a>
                    <a href="https://twitter.com/karthikeyaspace" target='_blank'><span className='link'><img src={twitter} className='w-6 mx-4 hover:opacity-60' alt="twitter" /></span></a>
                    <a href="mailto:karthikeyaveruturi2005@gmail.com" target='_top'><span className='link'><img src={email}  className='w-6 mx-4 hover:opacity-60' alt="mail" /></span></a>
                </div>
            </div>

        </div>
    )
}