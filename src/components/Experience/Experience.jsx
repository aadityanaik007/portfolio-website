import React from 'react'
import fullerton from '../../assests/cal_state_logo.png'
import accrete from '../../assests/accreteAI.png'
import finrise from '../../assests/FinRise.png'
import "./experience.css"
const Experience = () => {
  return (
    <section id="Experience">
        <div id="clients">
            <h1 className="contactPageTitle">My Experience</h1>
            <p className="clientDesc">
            I've had the privilege of learning from prestigious universities and collaborating with a diverse array of companies, including notable names in my professional journey.
            </p>
            <div className="clientImgs">
                <img src={accrete} alt="" className="clientImg" onClick={()=>forwardToClientWeb('accrete')}/>
                <img src={finrise} alt="" className="clientImg" onClick={()=>forwardToClientWeb('finrise')}/>
                <img src={fullerton} alt="" className="clientImg" onClick={()=>forwardToClientWeb('fullerton')}/>
            </div>
        </div>
    </section>
  )
}
const forwardToClientWeb = (client_name)=>{
    const web_urls = {"accrete":"https://www.accrete.ai/","finrise":"https://www.linkedin.com/company/fin-rise-softech-pvt-ltd/?originalSubdomain=in","fullerton":"https://www.fullerton.edu/"}
    window.open(web_urls[client_name],"_blank")
}

export default Experience