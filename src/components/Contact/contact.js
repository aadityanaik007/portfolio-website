import React from 'react'
import './contact.css'
import accrete from '../../assests/accreteAI.png'
import finrise from '../../assests/FinRise.png'
import facebookIcon from '../../assests/facebook-icon.png'
import twitter from '../../assests/twitter.png'
import youtube from '../../assests/youtube.png'
import instagram from '../../assests/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Experience</h1>
            <p className="clientDesc">
            I've had the privilege of learning from prestigious universities and collaborating with a diverse array of companies, including notable names in my professional journey.
            </p>
            <div className="clientImgs">
                <img src={accrete} alt="" className="clientImg" />
                <img src={finrise} alt="" className="clientImg" />
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