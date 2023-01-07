import React from 'react'
import "./Footer.scss"
import FooterImg from "../../images/payment.png"
import Logo from "../../images/my-logo.png"

const Footer = () => {
    return(<>
        <div className='footer'>
            <div className='top'>
                <div className='item'>
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className='item'>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className='item'>
                    <h1>About</h1>
                    <span>lorem hello this is e commerce website created using react and redux. this site build for gain my personal experience about react and grab internship opportunity from software developing company</span>
                </div>
                <div className='item'>
                    <h1>Contact</h1>
                    <span>lorem hello this is e commerce website created using react and redux. this site build for gain my personal experience about react and grab internship opportunity from software developing company</span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <img src={Logo} alt="logo" />
                    <span className='copyright'>Copyright 2023. All Right Reserved</span>
                </div>
                <div className='right'>
                    <img src={FooterImg} alt='payment'/>
                </div>
            </div>
        </div>
    </>)
}

export default Footer