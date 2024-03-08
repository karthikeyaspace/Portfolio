import focus from '../../assets/focus.png';
import crypto from '../../assets/crypto-app.png';
import surfsafe from '../../assets/surfsafe.png';
const data = {
    "projects": [
        {
            "name":"FOCUS",
            "image": focus,
            "description":"Focus is python based application that helps you be focused in task by blocking the distracting websites for a desired period of time. It automatically closes an app when opened by the user and also blocks desired websties to improve concentraton and productivity. It uses the hosts file to block the distracting websites. focus can also be used for parental control to block unwanted websites and apps.",
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
            "description": "SurfSafe is a python based application that helps you be safe while surfing the internet. It automatically blocks the malicious websites to keep you safe from phishing attacks and other cyber threats. It uses the hosts file to block the malicious websites. It checks the url of the website whether it has https or not to block a website. SurfSafe can also be used for parental control to block unwanted websites.",
            "github": "https://github.com/karthikeyaspace/SurfSafe.git",
            "image": surfsafe,
            "techStack": ["Python, ","Tkinter, ", "Hosts File"]
        }
    ]
}

export default data;