import React from 'react'
import "./navbar.css"
import logo from '../../assests/logo.png'
import {Link} from "react-scroll"
import contact from "../../assests/contact.png"

const Navbar = ()=> {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
        <Link className="desktopMenuListItem" activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className="desktopMenuListItem" activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
        <Link className="desktopMenuListItem" activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={500}>Clients</Link>
      </div>
      <button id="contactMeBtn" className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contact} alt="contact" className="desktopMenuImg"/>
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar