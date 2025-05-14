import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
        <div className='text-center'>
            <h1 className='text-3xl font-mono md:text-7xl mb-6 font-bold gradient-text bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>Hi!, I'm Sydeth</h1>
            <p className='text-lg max-w-lg mb-8 mx-auto font-mono bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent'>I'm a java full-stack developer who love crafting clean, scalable web
                application. My goal is to build solutions that offer both exceptional perfomance and a delightfull user experience
                 </p>
                 <div className='flex justify-center space-x-4'>
                        <a href="#projects" className='bg-blue-500 py-3 px-6 font-medium transition relative overflow-hidden hover:-tanslate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,24,0.4)] rounded-3xl'>View Projects</a>
                        <a href="#contact" className=' border border-blue-500/30 py-3 px-6 font-medium transition relative overflow-hidden hover:-tanslate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,24,0.4)] rounded-3xl hover:bg-blue-500/10'>Contact Me</a>
                 </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home