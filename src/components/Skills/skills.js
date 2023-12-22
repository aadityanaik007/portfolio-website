import React from 'react'
import UIDesign from '../../assests/ui-design.png' 
import WebDesign from '../../assests/website-design.png' 
import AppDesign from '../../assests/app-design.png' 
import './skills.css'
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I'm a skilled and passionate web designer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is demo text for UI/UX Design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>This is demo text for Web Design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is demo text for App Design</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills