import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {
    const frontEndSkill=[
        "React",
        "Vue",
        "TypeScrpt",
        "TailwindCSS",
        "Svelte"
    ]
    const BackendSkill=[
        "Node.js",
        "Python",
        "Java",
        "AWS",
        "MongoDB",
        "GraphSQL"

    ]
  return (
    <section id='about' className='min-h-screen flex justify-center items-center py-10'>
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className='text-3xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-700 bg-clip-text text-transparent mb-6'>About Me</h2>
            <div className='glass rounded-xl p-8 border-white/10 border  hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
                Passionate developer with expertise in building scalable web
                application and creating innovative solutions
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

<div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
    <h3>Fontend</h3>
    <div className='flex flex-wrap gap-2'>
          {frontEndSkill.map((tech)=>(
            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,30,2246,0.2)] transition'>
                {tech}
            </span>
          ))}
    </div>

</div>
<div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
    <h3>Backend</h3>
    <div className='flex flex-wrap gap-2'>
          {BackendSkill.map((tech)=>(
            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,30,2246,0.2)] transition'>
                {tech}
            </span>
          ))}
    </div>

</div>
</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 tranistion-all'>
            <h1 className='text-xl text-bold mb-4'> Education</h1>
             <ul className='list-disc list-inside text-gray-300 space-y-3'>
                <li>
                    <srong>B.S. in Computer Science</srong> UME University
                </li>
                <li>
                    Relevant Coursework: Data Structure, Web Development,Cloud Computing..
                </li>
             </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 tranistion-all'>
            <h1 className='text-xl text-bold mb-4'>Work Experience</h1>
            <div className='space-y-4 text-gray-400'>
                <div>
                    <h4 className='font-semibold'>Software Engineer at ABC [2020-Present]</h4>
                    <p>
                        Developed and maintain microserivce for cloud-base application
                    </p>
                </div>
                <div>
                    <h4>Intern at DEG Startup</h4>
                    <p>
                        Assisted in building front-end components and and integration REST API
                    </p> 
                </div>

            </div>
            </div>
        </div>
        </div>
        </RevealOnScroll>
        

    </section>
  )
}

export default About