import React from 'react'
import portfolio1 from '../../assests/portfolio-1.png'
import portfolio2 from '../../assests/portfolio-2.png'
import portfolio3 from '../../assests/portfolio-3.png'
import portfolio4 from '../../assests/portfolio-4.png'
import portfolio5 from '../../assests/portfolio-5.png'
import portfolio6 from '../../assests/portfolio-6.png'
import './works.css'
const Works = () => {
  return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and </span>
            <div className="worksImgs">
                <img src={portfolio1} alt="" className="worksImg" />
                <img src={portfolio2} alt="" className="worksImg" />
                <img src={portfolio3} alt="" className="worksImg" />
                <img src={portfolio4} alt="" className="worksImg" />
                <img src={portfolio5} alt="" className="worksImg" />
                <img src={portfolio6} alt="" className="worksImg" />
            </div>
            <button className="worksBtn">See more</button>
        </section>
  )
}

export default Works