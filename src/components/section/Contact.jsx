import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from 'emailjs-com'
const ServiceId="service_b3vmuaj"
const templateId="template_z7h9gl9"
const publicKey="z8Zo0eCa7JcNyuLmp"
const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm(ServiceId,templateId,e.target,publicKey).then((result)=>{
            alert("Message Sent!")
            setFormData({name:"",email:"",message:""})
        }).catch(()=>alert("Oops! something went wrong please try again!"))


    }
  return (
    <section id='contact' className='min-h-screen flex justify-center items-center'>
        <RevealOnScroll>
           <div className='px-4 w-150'>
            <h2 className='text-4xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent text-center mb-4'>Get in Touch</h2>
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input type="text" 
                    value={formData.name}
                    
                    name='name' id='name' required className='w-full bg-white/5 rounded px-4 py-3 transition focus:outline-none focus:border border-blue-500 focus:bg-blue-500/5 ' placeholder='Name.....'
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    />
                </div>
                <div className='relative'>
                    <input type="email" 
                    value={formData.email}
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                    name='email' id='email' required className='w-full bg-white/5 rounded px-4 py-3 transition focus:outline-none focus:border border-blue-500 focus:bg-blue-500/5 ' placeholder='example@gmail.com'/>
                </div>
                <div className='relative'>
                    <textarea  rows={5} 
                    value={formData.message}
                    onChange={(e)=>setFormData({...formData,message:e.target.value})}
                    name='message' id='message' required className='w-full bg-white/5 rounded px-4 py-3 transition focus:outline-none focus:border border-blue-500  focus:bg-blue-500/5 ' placeholder='Message.....'/>
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(58,130,246,0.4)] cursor-pointer'>Send Message</button>
            </form>
            </div> 
        </RevealOnScroll>
        
    </section>
  )
}

export default Contact