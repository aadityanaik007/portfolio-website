import React from 'react'
import articleBuzz from "../../assests/ArticleBuzzLogo.png"
import rusticFarmVilla from "../../assests/RusticFarmVilla.png"
import receipeDexter from "../../assests/receipeDexter.png"

import "./portfolio.css"
const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="portfolioDesc">Some of my projects include the following</span>
      
      <div className="portfolioImgs">
        <div className='portfolioImgDiv'>
            <img src={articleBuzz} alt="" className="portfolioImg" onClick={() => redirectToGithub("articleBuzz")} />
            <p>ArticleBuzz</p>
        </div>
        <div className='portfolioImgDiv'>
            <img src={rusticFarmVilla} alt="" className="portfolioImg" onClick={() => redirectToGithub("rusticFarmVilla")} />
            <p>Rustic Farm Villa</p>
        </div>
        <div className='portfolioImgDiv'>
            <img src={receipeDexter} alt="" className="portfolioImg" onClick={() => redirectToGithub("receipeDexter")} />
            <p>Receipe Dexter</p>
        </div>
      </div>
      

    </section>
  )
}

const redirectToGithub = (link) => {
  const githubRidirect = {
    "articleBuzz": "https://github.com/aadityanaik007/ArticleBuzz",
    "rusticFarmVilla": "https://rustic-farm-villa.netlify.app/",
    "receipeDexter": "https://github.com/aadityanaik007/ReceipeDexter/tree/main"
  }
  window.open(githubRidirect[link], "_blank")
}

export default Portfolio