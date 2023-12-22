import React from 'react'
import './contact.css'
import walmart from '../../assests/walmart.png'
import microsoft from '../../assests/microsoft.png'
import facebook from '../../assests/facebook.png'
import adobe from '../../assests/adobe.png'

import facebookIcon from '../../assests/facebook-icon.png'
import twitter from '../../assests/twitter.png'
import youtube from '../../assests/youtube.png'
import instagram from '../../assests/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I got to work with a diverse group of companies.Some of the notable companies I've worked with includes!!
            </p>
            <div className="clientImgs">
                <img src={walmart} alt="" className="clientImg" />
                <img src={facebook} alt="" className="clientImg" />
                <img src={microsoft} alt="" className="clientImg" />
                <img src={adobe} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm'>
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' />
                    <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
                    <button input='submit' value='sent' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="" className="link" />
                        <img src={twitter} alt="" className="link" />
                        <img src={youtube} alt="" className="link" />
                        <img src={instagram} alt="" className="link" />
                    </div>
                </form>
            </div>
    </section>
  )
}

export default Contact