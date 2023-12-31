import React, { memo, useEffect, useRef } from 'react'
import bgWelcomSection from "../../assets/imgaesHome/bg-welcom-section.avif"
import { cities, typeProcces } from '../../constants'
import SelectConstants from '../../compenents/SelectConstants'
import SelectWithSearch from '../../compenents/SelectWithSearch'
import {IoIosArrowForward} from "react-icons/io"
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


const WelcomSection = () => {  
    

  

   useEffect(() => {
      // Define the common animation
        const animateAxeY =  {
          y : 20,
          opacity : 0,
          duration : 0.7,
          // Add any other animation properties here
       }

       // Define the common animation
       const animateAxeX =  {
         x : -50,
         opacity : 0,
         duration : 0.5,
         // Add any other animation properties here
      }
 
        // Select the elements you want to animate
         const elementsToAnimateY = document.querySelectorAll('.welcom-section .animate-y');
         const elementsToAnimateX = document.querySelectorAll('.welcom-section .animate-x');

         let elementsXY = [...elementsToAnimateX , ...elementsToAnimateY]
        
 
        // Apply the common animation to each element
        elementsXY.forEach((element , idx) => {
            if(element.classList.contains("animate-y")){
               gsap.from(element, {
                  ...animateAxeY,
                  delay: 0.3 * idx, // Set the delay based on the index
                });
            }
            else if(element.classList.contains("animate-x")){
               gsap.from(element, {
                  ...animateAxeX,
                  delay: 0.3 * idx, // Set the delay based on the index
                  scrollTrigger: {
                     trigger: element,
                   },
                });
            }
          });


     
   },)


    return (
        <div className='welcom-section mx-[auto] mb-[120px]  sm:w-[85%] w-full '>
             <div  className=' w-full relative md:px-[75px] px-[20px] sm:rounded-[50px] rounded-[0px]  sm:py-[100px] py-[60px] bg bg-welcom-section' style={{backgroundImage : `url(${bgWelcomSection})`}}>
                  <div  className='z-100' style={{zIndex : 111}}>
                    <div className='animate-x' >
                       <h1 className='sm:text-[47px] z-1000 ss:text-[35px] text-[25px] text-white'>
                         Unlock the Door To Your Dream <span className='text-color_3 '>Home</span> <br className='xl:block hidden'/>
                         Using Our Platform
                       </h1>
                    </div>
                  <div  className=' lg:flex-row flex flex-col lg:items-center items-start  mt-[20px] ' style={{zIndex : 11}}>
                      <div className='animate-x md:flex-row flex flex-col md:items-center items-start  w-[100%] bg-white py-[10px] px-[20px] raduis'>
                          <div className='md:w-[100%] w-[100%]'>
                             <input className='outline-none w-[100%] px-[10px]' placeholder='What are you looking foor ?'/>
                          </div>
                         <div className='sm:flex-row flex flex-col  md:mt-[0] mt-[10px] md:w-[auto] w-[100%]'>
                          <div className=' align-center sm:mb-[0] sm:mr-[10px] mr-[0] mb-[10px] cursor md:w-[180px] w-[100%]' style={{zIndex : 15}} >
                              <SelectConstants menu={typeProcces} />
                           </div>
                          <div className=' align-center cursor md:w-[180px] w-[100%]' style={{zIndex : 11}}>
                              <SelectWithSearch menu={cities} />
                          </div>
                         </div>
                      </div>
 
                         <button className='animate-x raduis bg-color_3 lg:ml-[25px] ml-[0]  lg:mt-[0] mt-[10px] text-white flex-center px-[30px] h-[60px]'>
                              Search
                         </button>
                  </div>

                  <div   className='animate-y  align-center mt-[20px]'>
                         <p className='mr-[10px] text-white'>
                            For More Search Go To 
                         </p>
                         <button className='raduis bg-color_3   btn'>
                              Advanced Search
                         </button>
                  </div>
                  </div>


                  <div className='animate-x shadow z-10 md:w-[80%] w-[95%] md:left-[10%] left-[2.5%]   sm:bottom-[-70px] bottom-[-140px]  absolute mx-auto sm:rounded-[50px] py-[20px] bg-white rounded-[10px]'>
                      <div className='grid grid-cols-12 sm:px-[30px] px-[10px]'>
                          <div className='animate-y sm:col-span-3 col-span-6 px-[10px]'>
                             <h4 className='text-color_3 sm:text-[36px] text-[20px]'>
                                300+
                             </h4>
                             <p className='text-color_text'> 
                                Cities To see
                             </p>
                          </div>

                          <div className='animate-y sm:col-span-4 col-span-6 px-[10px]'>
                             <h4 className='text-color_3 sm:text-[36px] text-[20px]'>
                                2000+
                             </h4>
                             <p className='text-color_text'> 
                                Houses (Renting , Selling , Buying )
                             </p>
                          </div>

                          <div className='animate-y sm:col-span-3 col-span-6 px-[10px]'>
                             <h4 className='text-color_3 sm:text-[36px] text-[20px]'>
                                5K+
                             </h4>
                             <p className='text-color_text'> 
                             More than 5k of costumers
                             </p>
                          </div>

                          <div className='animate-y sm:col-span-2 col-span-2  px-[10px]' style={{display: "grid" , placeItems : "center"}}>
                              <button className='cercle-btn'>
                                   <IoIosArrowForward  className='text-white text-[30px] mx-auto'/>
                              </button>
                          </div>
                      </div>

                  </div>
             </div>
        </div>
    )
}

export default memo(WelcomSection)
