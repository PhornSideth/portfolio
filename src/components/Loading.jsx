import React, { useEffect, useState } from 'react'


const Loading = ({onComplet}) => {
    const [text,setText]=useState("")
    const fullText="<Hello Developer/>"
    useEffect(()=>{
        let index=0
        const inteval=setInterval(()=>{
            setText(fullText.substring(0,index))
            index++
            if(index>fullText.length){
                clearInterval(inteval)
                setTimeout(()=>{
                    onComplet();
                },1000)
            }
        },100)
        return ()=>clearInterval(inteval)
    },[onComplet])
  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
        <div className="mb-4 text-4xl font-mono font-bold">
            {text} <span className="animate-blink ml-1">|</span>


        </div>
        <div className='w-[200px] h-[3px] bg-gray-100 rounded relative overflow-hidden'>
        <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'></div>

        </div>
    </div>
  )
}

export default Loading