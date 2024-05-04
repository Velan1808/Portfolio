import React, { useRef, useState } from 'react'
import './Footer.css'
import emailjs from '@emailjs/browser';
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    const [result, setResult] = useState('')
    const [inputValue, setInputValue]= useState()
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gcbuzyc', 'template_4jyieji', form.current, {
          publicKey: 'vTUCFGncAsMmJyzqG',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setResult("Sent successfully...!")
            setInputValue('')
          },
          (error) => {
            console.log('FAILED...', error.text);
            setResult("Failed to sent ***")
          },
        );
    };

  return (
    <div id='footer' className='footer'>
        <div className='footer-left'>
          <h1>Get in touch</h1>
          <div className='my-details'>
            <p className='name'> <FaUserAlt /> Velan K</p>
            <p className='email'> <FaPhone /> velankvelu4441@gmail.com</p>
            <p className='number'> <FaRegEnvelope /> +91 6369961739</p>
          </div>
           <div className="contact-icon">
                <a href="https://www.linkedin.com/in/velank18/"> <FaLinkedin className='linkedin'/></a>
                <a href="https://github.com/Velan1808">  <FaGithub className='github' /></a>
                <a href="https://wa.me/916369961739"> <FaWhatsappSquare className='whatsapp'/></a>       
           </div>
        </div>

        <div  className='footer-right'> 
            <h1 className=''>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className=''>
              <div className='visited-details'>
                <div>
                  <label htmlFor="" className=''>Name:</label>
                  <input type="text" name='from_name' value={inputValue} required  className='' placeholder="Enter name" />
                </div>              
                <div>
                  <label htmlFor="" className=''>Email_id:</label>
                  <input type="email" name='from_email' value={inputValue} required placeholder="example123@gmail.com" className='' />
                </div>
             </div>
             <div>
                <label htmlFor="message" className=''>Message</label>
                <textarea name='message' required id="" value={inputValue} cols="30" rows="5" placeholder="your message" className=''></textarea>
             </div>
                <button type="submit">Submit</button>
            </form>

            <span>{result}</span>
        </div>
    </div>
  )
}

export default Footer