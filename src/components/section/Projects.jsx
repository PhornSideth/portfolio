import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Projects = () => {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
     <div className='max-w-5xl mx-auto px-4'>
    <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent mb-6'>
        Feature Project
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow '>
                <h3 className='text-xl font-semibold mb-2'> Cloud Platform</h3>
                <p className='text-grey-300 mb-4'>
                    Scalable cloud infrastucture management with real-time monitoring
                    and automated scaling
                </p>
                <div className='mb-5 space-x-4 flex flex-wrap'>
                    {["React","Nodejs","AWS","Docker"].map((tech,key)=>(
                        <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='flex items-center justify-between'> 
                    <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project  &#8594;</a>
                </div>
            </div>
            <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow '>
                <h3 className='text-xl font-semibold mb-2'> Cloud Platform</h3>
                <p className='text-grey-300 mb-4'>
                    Scalable cloud infrastucture management with real-time monitoring
                    and automated scaling
                </p>
                <div className='mb-5 space-x-4 flex flex-wrap'>
                    {["React","Nodejs","AWS","Docker"].map((tech,key)=>(
                        <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='flex items-center justify-between'> 
                    <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project  &#8594;</a>
                </div>
            </div>
            <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow '>
                <h3 className='text-xl font-semibold mb-2'> Cloud Platform</h3>
                <p className='text-grey-300 mb-4'>
                    Scalable cloud infrastucture management with real-time monitoring
                    and automated scaling
                </p>
                <div className='mb-5 space-x-4 flex flex-wrap'>
                    {["React","Nodejs","AWS","Docker"].map((tech,key)=>(
                        <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='flex items-center justify-between'> 
                    <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project  &#8594;</a>
                </div>
            </div>
            <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow '>
                <h3 className='text-xl font-semibold mb-2'> Cloud Platform</h3>
                <p className='text-grey-300 mb-4'>
                    Scalable cloud infrastucture management with real-time monitoring
                    and automated scaling
                </p>
                <div className='mb-5 space-x-4 flex flex-wrap'>
                    {["React","Nodejs","AWS","Docker"].map((tech,key)=>(
                        <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='flex items-center justify-between'> 
                    <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project  &#8594;</a>
                </div>
            </div>

        </div>
        
     </div>
     </RevealOnScroll>
    </section>
  )
}

export default Projects