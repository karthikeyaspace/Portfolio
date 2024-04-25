import focus from '../../assets/focus.png';
import crypto from '../../assets/crypto-app.png';
import surfsafe from '../../assets/surfsafe.png';
const data = {
    "projects": [
        {
            "name":"FOCUS",
            "image": focus,
            "description":"Focus is a Python app enhancing focus by blocking distracting websites, automatically closing specified apps, and utilizing the hosts file. Ideal for boosting productivity and parental control by limiting access to unwanted sites and apps.",
            "github": "https://github.com/karthikeyaspace/FOCUS.git",
            "techStack": ["Python, ", "Tkinter"]
        } ,
        {
            "name":"Crypt0-Know",
            "description":"Crypt0-Know is a simple web application that helps you to know the current price of the cryptocurrencies. It uses the CoinGecko API to fetch the current price of the cryptocurrencies. It has a user-friendly interface and is easy to use.",
            "github": "https://github.com/karthikeyaspace/Crypto-React-App.git",
            "image": crypto,
            "techStack": ["React JS, ", "CoinGecko API, ", "CSS, ","JavaScript"]
        },  
        {
            "name":"SurfSafe",
            "description": "SurfSafe, a Python app, enhances internet safety by automatically blocking malicious websites, safeguarding against phishing and cyber threats. It leverages the hosts file and HTTPS verification to ensure protection, doubling as parental control for blocking undesirable sites.",
            "github": "https://github.com/karthikeyaspace/SurfSafe.git",
            "image": surfsafe,
            "techStack": ["Python, ","Tkinter, ", "Hosts File"]
        }
    ]
}

export default data;