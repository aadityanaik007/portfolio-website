import React from 'react'
import trading from '../../assests/tradingCertificate.png'
import djangoReact from '../../assests/djangoReact.png'
import langchainCertificate from '../../assests/langchainCertificate.png'
import restapiCertificate from '../../assests/restapiCertificate.png'
import pythonbasicCertificate from '../../assests/pythonbasicCertificate.png'
import SDEICertificate from '../../assests/SDEICertificate.png'
// import SDEICertificate from '../../assests/SDEICertificate.png'
import './certification.css'
const Certification = () => {
  return (
        <section id='certifications'>
            <h2 className="certificationsTitle">My Certifications</h2>
            <span className="certificationsDesc">Some of my certifications include the following</span>
            <div className="certificationsImgs">
                <img src={trading} alt="" className="certificationsImg" onClick={()=>redirectToCertificate("linkedInStock")}/>
                <img src={langchainCertificate} alt="" className="certificationsImg" onClick={()=>redirectToCertificate("langChain")}/>
                <img src={restapiCertificate} alt="" className="certificationsImg" onClick={()=>redirectToCertificate("hackerRankRest")}/>
                <img src={pythonbasicCertificate} alt="" className="certificationsImg" onClick={()=>redirectToCertificate("hackerRankPython")}/>
                <img src={SDEICertificate} alt="" className="certificationsImg" onClick={()=>redirectToCertificate("hackerRankSDEIntern")}/>
                <img src={djangoReact} alt="" className="certificationsImg"/>
            </div>
            {/* <button className="certificationsBtn">See more</button> */}
        </section>
  )
}
const redirectToCertificate = (certificate) =>{
  const certifications = {"linkedInStock":"https://www.linkedin.com/feed/update/urn:li:activity:7128513151469293569/",
    "langChain":"https://www.linkedin.com/feed/update/urn:li:activity:7127011566880788480/",
    "hackerRankPython":"https://www.hackerrank.com/certificates/2a564b6ecaee",
  "hackerRankRest":"https://www.hackerrank.com/certificates/d4e193623afa",
  "hackerRankSDEIntern":"https://www.hackerrank.com/certificates/245f36054e4a"}
  window.open(certifications[certificate],"_blank")
}

export default Certification