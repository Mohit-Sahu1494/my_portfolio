import {motion, useScroll, useTransform } from 'framer-motion'
import { div } from 'framer-motion/client'
import React, { useEffect, useMemo, useState } from 'react'
import { useRef } from 'react'

const experices=[
    {
        role:"Web Developer",
        company:"Brain Mentors",
        duration:"2022",
        description:"built Appications"
    },
       {
        role:"Web Developer",
        company:"Brain Mentors",
        duration:"2022",
        description:"built Appications"
    },
    {
        role:"Web Developer",
        company:"Brain Mentors",
        duration:"2022",
        description:"built Appications"
    }

]


function  Experience({exp,idx,start,end,scrollYprogress,layout}){
  const scale =useTransform(scrollYprogress,[start,end],[0,1])
  const opacity =useTransform(scrollYprogress,[start,end],[0,1])

  const y=useTransform(scrollYprogress,[start,end],[inx%2===0?30:-30,0])
  const x=useTransform(scrollYprogress,[start,end],[-24,0])



  if(layout==="desktop"){
    return (
        <div className='relative flex flex-1 justify-center items-center min-w-0 '>
             <motion.div className='z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]'
             style={{
                 scale,opacity
             }}
            >
             </motion.div>
            
            <motion.div className={`absolute ${idx%2===0?"-top-8":"-bottom-8"} w-[3px] bg-white/40 `}
              style={{
                height:"40",
                opacity
              }}
            >
            </motion.div>
            
            <motion.article className={`absolute ${idx%2===0?"bottom-12":"top-12"} bg-gray-900/80 backdrop-blur border border-gray-700/70  rounded-xl  p-7  w-[320px] shadow-lg`}
              style={{
                opacity,y,maxWidth:"90vw",
              }}
              transition={{duration:0.4,delay:idx*0.15}}
            >
               
           <h3 className='text-xl font-semibold'>
            {exp.role}
           </h3>
           <p className='text-md text-gray-100 mb-3'>
            {exp.company}|{exp.duration}
           </p>
           <p className='text-md text-gray-300 break-words'>
            {exp.description}
           </p>

            </motion.article>

        </div>
    )
  }

   return (
   
    <div className='relative flex items-start '>
        <motion.div
         className='absolute -left-[14px] top-2 z-10 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]' 
         style={{
            scale,opacity
         }}
        >

        </motion.div>

        <motion.article

        className='bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg'
        style={{
            opacity,x
        }}
        transition={{duration:0.4, delay:idx*0.15}}
        >

                  
           <h3 className='text-lg font-semibold wrap-break-word'>
            {exp.role}
           </h3>
           <p className='text-sm text-gray-100 mb-2 wrap-break-word'>
            {exp.company}|{exp.duration}
           </p>
           <p className='text-sm text-gray-300 break-words'>
            {exp.description}
           </p>

        </motion.article>

    </div>

   )
}



function Expericence() {
    const ref=useRef(null)
    const [isMobile,setisMobile]=useState(false)

  useEffect(()=>{
    const checkMobile=()=>setisMobile(window.innerWidth<768);
    checkMobile();

    window.addEventListener("resize",checkMobile)
    return()=>{
       window.removeEventListener("resize",checkMobile) 
    }
  },[])

  const SCENE_HEIGHT_VH=isMobile?160*experices.length:120*experices.length

  const {scrollYprogress}=useScroll({target:ref,offset:["start start ","end end"]})

  const thresholds=useMemo(()=>experices.map((_,i)=>(i+1)/experices.length),[])

  const lineSize=useTransform(scrollYprogress,(v)=>`${v*100}%`)


  return (
    <section  id='experience' className='relative bg-black text-white'>

     <div 
     ref={ref}
     style={{
        height:`${SCENE_HEIGHT_VH}vh`,
        minHeight:"120vh",
     }}
     className='relativ '
     >
       <div className='sticky top-0 h-screen flex flex-col '>
        <h2 className='text-4xl sm:text-5xl font-semibold mt-5 text-center '>
            Experience
        </h2>
        <div className='flex flex-1 items-center justify-center px-6 pb-10 '>

{!isMobile&&(
       <div className='relative w-full max-7xl '>
        <div className='relative h-[6px] bg-white/15 rounded'>
        <motion.div
         className='absolute left-0 top-0 h-[6px] rounded origin-left'
         style={{
            width:lineSize
         }}
        >

        </motion.div>
        
        </div>

        <div className='relative flex justify-between'> 

        </div>






       </div>

)}


        </div>
       </div>


     </div>
    </section>
  )
}

export default Expericence
