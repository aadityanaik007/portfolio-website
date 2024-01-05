import React,{ useRef,useState } from 'react'
import './contact.css'
import leetcode from '../../assests/leetcode.png'
import twitter from '../../assests/twitter.png'
import github from '../../assests/github.png'
import linkedin from '../../assests/linkedin.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4jmg601', 'template_kxd0id9', form.current, 'YHrv2j6THdPE7oWLl')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setSuccessMessage("Thank you for the message, I'll revert back ASAP!!")
          setTimeout(() => {
            setSuccessMessage('');
          }, 4000);
      }, (error) => {
          console.log(error.text);
          setErrorMessage(error.text)
          setTimeout(() => {
            setErrorMessage('');
          }, 4000);
      });
    }
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" name='your_name' className="name" placeholder='Your Name' required/>
                    <input type="email" name="email_id" className="email" placeholder='Your Email' required/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
                    <button input='submit' value='sent' className="submitBtn" >Submit</button>
                    {errorMessage && <div className="errorBlock" style={{ color: 'white','fontSize':"1.5rem" }}>{errorMessage}</div>}
                    {successMessage && <div className="successBlock" style={{ color: 'white','fontSize':"1.5rem" }}>{successMessage}</div>}
                    <div className="links">
                        <img src={linkedin} alt="" className="link" onClick={()=>redirectToLink("linkedin")}/>
                        <img src={github} alt="" className="link" onClick={()=>redirectToLink("github")}/>
                        <img src={leetcode} alt="" className="link" onClick={()=>redirectToLink("leetcode")}/>
                        <img src={twitter} alt="" className="link" onClick={()=>redirectToLink("twitter")}/>
                    </div>
                </form>
            </div>
    </section>
  )
  // return (
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );
};
const redirectToLink =(link)=>{
  const linksDict = {"twitter":"https://twitter.com/Aadi_tyaaa","github":"https://github.com/aadityanaik007","linkedin":"https://www.linkedin.com/in/aadityasnaik/","leetcode":"https://leetcode.com/aaditya_naik/"}
  window.open(linksDict[link], "_blank")
}
export default Contact