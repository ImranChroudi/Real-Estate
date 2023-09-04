import React, { useEffect } from 'react'
import { cities } from '../../constants'
import { FiArrowRight } from 'react-icons/fi'
import { animateAxeX, animateAxeY, handleAnimationXY } from '../../animate/gsap'

import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const OurLocations = () => {

    useEffect(()=>{
        const itemsAnimateX = document.querySelectorAll(".our-locations .animate-x")
        const itemsAnimateY = document.querySelectorAll(".our-locations .animate-y")
        const itemsAnimated = [...itemsAnimateX , ...itemsAnimateY]
        handleAnimationXY(itemsAnimated)
         
    })

    return (
        <section className='sm:h-[70vh] our-locations h-[max-content] mt-[40px]'>
             <div className='w-full grid grid-cols-12 h-full relative'>
                 <div className='animate-x col-span-12 sm:col-span-4  w-full sm:py-[0] py-[30px] h-full z-10  flex-center' style={{zIndex : "1111" ,backgroundImage : "linear-gradient(85.53deg, #7065F0 69.48%, rgba(112, 101, 240, 0) 173.38%)"}}>
                    <div className='mx-[20%] text-center' >
                         <p className='text-white title '> 
                          Our Operational 
                          Locations
                           That we are 
                           working in
                         </p>
                         <div className='hover:scale-[1.2] sm:transform-rotate-[0deg] transform-rotate-[90deg]  mt-[20px] cursor-pointer transition-[0.5s] flex justify-center '>
                             <FiArrowRight className="text-white text-[3rem]"/>
                          </div>
                    </div>
                 </div>
                 <div className='sm:h-full min-w-[max-content] grid-flow-col col-span-12 sm:col-span-8 flex sm:grid grid-cols-12 h-[40vh] grid-rows-1 overflow-scroll w-full'>
                    
                     {
                        cities.map((item , idx)=> (
                            <div id={item.id} key={idx} className='animate-x overflow-hidden float-right row-span-12 col-span-12 sm:col-span-4 relative city h-full sm:max_w-[20%] min-w-[50%]'>
                                 <img src={item.image} className='absolute h-full w-full' /> 
                                 <div className=' z-10 absolute  name-desc-city w-full  p-[20px]'>
                                     <h4 className='  text-white text-[30px] mb-[20px]'>{item.name}</h4>
                                     <p className='text-white  city-desc'>
                                        {item.description.slice(0 , 100)}
                                     </p>
                                 </div>

                            </div>

                        ))
                     }
                 </div>
             </div>
        </section>
    )
}

export default OurLocations


