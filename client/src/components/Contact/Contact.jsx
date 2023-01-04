import React from 'react'
import "./Contact.scss"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import FacebookIcon from "@mui/icons-material/Facebook"
import PinterestIcon from "@mui/icons-material/Pinterest"

export const Contact = () => {
    return (<>
        <div className='contact'>
            <div className='wrapper'>
                <span>BE IN TOUCH WITH US</span>
                <div className='mail'>
                    <input type="text" placeholder='Enter your email' />
                    <button>Join Us</button>
                </div>
                <div className='icons'>
                    <FacebookIcon />
                    <PinterestIcon />
                    <GoogleIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
        </div>
    </>)
}
