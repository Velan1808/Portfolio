import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    const [result, setResult] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gcbuzyc', 'template_4jyieji', form.current, {
          publicKey: 'vTUCFGncAsMmJyzqG',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setResult("Sent successfully")
          },
          (error) => {
            console.log('FAILED...', error.text);
            setResult("Failed to sent")
          },
        );
    };

  return (
    <div id='footer' className='bg-orange-500 w-screen flex flex-row-reverse  justify-between px-28 py-7'>
        <div className='text-black bg-white font-semibold w-5/12  text-lg flex flex-col justify-center items-center gap-2  rounded-2xl'>
          <h1 className='text-2xl font-bold text-orange-500 -mt-12 mb-7'>Get in touch</h1>
          <div className='flex flex-col gap-y-2'>
           <p className='flex flex-row gap-3 justify-start items-center'> <FaUserAlt /> Velan K</p>
           <p className='flex flex-row gap-3 justify-start items-center'> <FaPhone /> velankvelu4441@gmail.com</p>
           <p className='flex flex-row gap-3 justify-start items-center'> <FaRegEnvelope /> +91 6369961739</p>
          </div>
           <div className="flex justify-around w-52 gap-2 bg-slate-300 p-2 -ml-11 rounded-lg mt-5">
                <a href="https://www.linkedin.com/in/velank18/"> <FaLinkedin className='w-10  h-10 text-blue-600 hover:scale-90 cursor-pointer'/></a>
                <a href="https://github.com/Velan1808">  <FaGithub className='w-10  h-10 text-black hover:scale-90 cursor-pointer' /></a>
                <a href="https://wa.me/916369961739"> <FaWhatsappSquare className='w-10  h-10 text-green-600 hover:scale-90 cursor-pointer'/></a>       
           </div>
        </div>

        <div  className=' w-2/5 flex flex-col gap-2 bg-white p-5 rounded-xl'> 
            <h2 className='flex justify-center text-2xl font-bold text-orange-500'>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2'>

                <label htmlFor="" className='text-xl font-medium'>Name:</label>
                <input type="text" name='from_name' required  className='border-solid border-black bg-slate-200 rounded-xl py-1 px-3 text-xl text-black' placeholder="Enter name" />

                <label htmlFor="" className='text-xl font-medium'>Email_id:</label>
                <input type="email" name='from_email' required placeholder="example123@gmail.com" className='border-solid border-orange-500 rounded-xl bg-slate-200 py-1 px-3 text-xl text-black' />

                <label htmlFor="message" className='text-xl font-medium'>Message</label>
                <textarea name='message' required id="" cols="30" rows="5" placeholder="your message" className='border-solid border-black rounded-xl bg-slate-200 py-1 px-3 text-lg'></textarea>

                <button type="submit" className='bg-blue-600 p-1 px-2 text-lg font-medium rounded-md  cursor-pointer'>Submit</button>
            </form>

            <span>{result}</span>
        </div>
    </div>
  )
}

export default Footer