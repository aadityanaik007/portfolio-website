import React from 'react'
import UIDesign from '../../assests/ui-design.png' 
import WebDesign from '../../assests/website-design.png' 
import AppDesign from '../../assests/app-design.png' 
import './skills.css'
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">As a seasoned software engineer with 2.8 years of experience, 
        I specialize in the dynamic realms of software development in AI and trading. My expertise extends 
        to working with MVC and MVT architectures, deploying scalable solutions using 
        AWS and Docker. Proficient in both frontend technologies like 
        React and backend technologies including Node.js and Django, I excel in developing end-to-end 
        solutions, seamlessly integrating machine learning models into web applications for 
        cutting-edge, impactful results.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Elevating ideas to immersive web experiences through expert web development.</p>
                </div>
            </div>
            <div className="skillBar" id="skillBarML">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>ML Applications</h2>
                    <p>End-to-end app development, bridging ML ops with web tech</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Development</h2>
                    <p>Crafting digital experiences through innovative app development</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills