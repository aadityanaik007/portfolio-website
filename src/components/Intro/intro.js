import React from 'react'
import "./intro.css"
import bg from "../../assests/profile_canva.png"
import {Link} from "react-scroll"
import btnImg from "../../assests/hireme.png"
const Intro =()=> {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Aaditya</span><br/>Web Developer</span>
            <p className="introPara">I'm a skilled web developer with experience in creating <br/>visually appealing and user friendly web applications</p>
            <Link><button className='btn'><img src={btnImg} alt="" srcset="" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro