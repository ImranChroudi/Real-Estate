import React, { useEffect, useRef } from 'react'
import { membersAgency } from '../../constants'
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import {RiLinkedinFill} from "react-icons/ri"
import {FiArrowLeft , FiArrowRight} from "react-icons/fi"
import member_1_no_bg from "../../assets/membersAgency/without_bg/member1.png"
import { useDispatch, useSelector } from 'react-redux'
import { handleLeftMemberAgency, handleRightMemberAgency, memberActive , membersAgencyDownToUp} from '../../redux/slice'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateAxeX, animateAxeY, animateAxeYTop, animateScale } from '../../animate/gsap'

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


const OurAgency = () => {

    const showMember = useSelector(memberActive)
    const AgencyDownToUp = useSelector(membersAgencyDownToUp)
   
    const dispatch = useDispatch()


    useEffect(()=>{

        const cardsAnimateY   = document.querySelectorAll(".our-agency  .animate-y")
        const cardsAnimateScale   = document.querySelectorAll(".our-agency  .animate-scale")
        const cardsAnimateYTop   = document.querySelectorAll(".our-agency  .animate-y-top")

        const elementsAnimated = [ ...cardsAnimateY , ...cardsAnimateScale , ...cardsAnimateYTop]


        elementsAnimated.forEach((element , idx) => {
            if(element.classList.contains("animate-y")){
                gsap.from( element , {
                    ...animateAxeY , 
                    y : 60,
                    delay : 0.3 * idx,
                    scrollTrigger : {
                      trigger : element
                    }
                })
            }

            else if(element.classList.contains("animate-scale")){
                gsap.from( element , {
                    ...animateScale , 
                    delay : 0.3 * idx,
                    scrollTrigger : {
                      trigger : element
                    }
                })
            }

            else if(element.classList.contains("animate-y-top")){
                gsap.from( element , {
                    ...animateAxeYTop , 
                    delay : 0.3 * idx,
                    scrollTrigger : {
                      trigger : element
                    }
                })
            }
        });
         

           
  },) 

    


    return (
        <section  className='w-full our-agency relative  sm:h-[80vh] h-[100vh]'>
                <div className='content'>
                   <p className='animate-y text-black title '>
                      Our <span className='text-color_3'>Agency</span>
                  </p>
                </div>
              
                <div className='animate-y absolute w-full text-center' style={{left : "50%" , top: "30%" , transform : "translate(-50% , -50%)" }}>
                     <p className=' text-color_text z-40 opacity-25 text-[60px] sm:text-[100px]'>{showMember.name} </p>
                </div>
             <div className='w-full h-full flex items-end'> 

              <div className='w-full members-agency  sm:mb-[100px] mb-[50px] py-[40px] items-center sm:flex hidden justify-between '>
                    {
                        membersAgency.map((member , idx)=>(
                                idx === 2 ? (
                                <article className=" sm:w-[400px] w-[300px] rounded-[10px] relative mx-[20px]  z-10 shadow-lg  rounded-md duration-300 translate-y-[-50px]  hover:shadow-sm" key={idx}>
                                      <div className=' absolute bottom-[100%] w-[60%] opacity-75 w-[300px] h-auto left-[50%] translate-x-[-50%] '>
                                          <img src={member_1_no_bg} />
                                      </div>
                                     <div className='animate-y-top w-full h-full rounded-[10px] z-10 py-[15px] bg-color_1'>
                                     <div className="flex items-center ml-4 mr-2">
                                            <div className="flex-none w-[50px] h-[50px]   rounded-full">
                                                <img src={showMember.img} className="w-full h-full  rounded-full" alt={showMember.name} />
                                            </div>
                                            <div className="ml-3">
                                                <span className="block text-gray-900">{showMember.name}</span>
                                                <span className="block text-gray-400 text-sm">{showMember.role}</span>
                                            </div>
                                        </div>
                                        <div className="pt-3 ml-4 mr-2 mb-3">
                                            <p className="text-gray-400 text-sm mt-1">{showMember.description.repeat(2)}</p>
                                        </div>

                                        <div className='mt-[20px] w-full flex  px-4 justify-between items-center'>
                                            <div className='flex'>
                                                   <ul className='flex gap-[5px] items-center'>
                                                         <li>
                                                             <AiOutlineInstagram className='text-color_text'/>
                                                         </li>
                                                         <li>
                                                             <BiLogoFacebook className='text-color_text'/>
                                                         </li>
                                                         <li>
                                                             <RiLinkedinFill className='text-color_text'/>
                                                         </li>
                                                   </ul>
                                            </div>
                                            <div className='btns-left-right'>
                                                <button
                                                  onClick={()=> dispatch(handleLeftMemberAgency())
                                                }
                                                >
                                                   <FiArrowLeft className="text-color_text text-[1rem]"/>
                                                </button>
                                                <button
                                                  onClick={()=> dispatch(handleRightMemberAgency())
                                                }
                                                >
                                                   <FiArrowRight className="text-color_text text-[1rem]"/>
                                                </button>
                                            </div>
                                        </div>
                                     </div>
                                </article>
        
                                ) : (
                                  <div key={idx} className={`animate-scale z-10 lg:h-[150px] w-[120px] border border-8 border-color_3  lg:w-[150px] h-[120px] rounded-full ${idx === 0 || idx === 4 ? "translate-y-[100px]" : ""}`} >
                                       <img className='w-full h-full rounded-full'  src={member.img} />
                                   </div>
                                )
                            
                          
                        ))
                    }

                    
             </div>


             <div className='w-full  members-agency sm:mb-[100px] py-[40px] items-center sm:hidden block justify-between'>
                                <article className="sm:max-w-md rounded-[10px] mx-[20px]  z-10 shadow-lg  rounded-md duration-300 translate-y-[-50px]  hover:shadow-sm" >
                                     <div className='animate-y absolute bottom-[100%] w-[60%] opacity-75 w-[300px] h-auto left-[50%] translate-x-[-50%] '>
                                          <img src={member_1_no_bg} />
                                      </div>
                                     <div className='animate-y-top w-full h-full rounded-[10px] z-10 py-[15px] bg-color_1'>
                                     <div className="flex items-center ml-4 mr-2">
                                            <div className="flex-none w-[50px] h-[50px]  rounded-full">
                                                <img src={membersAgency[2].img} className="w-full h-full  rounded-full" alt={membersAgency[2].name} />
                                            </div>
                                            <div className="ml-3">
                                                <span className="block text-gray-900">{membersAgency[2].name}</span>
                                                <span className="block text-gray-400 text-sm">{membersAgency[2].role}</span>
                                            </div>
                                        </div>
                                        <div className="pt-3 ml-4 mr-2 mb-3">
                                            <p className="text-gray-400 text-sm mt-1">{membersAgency[2].description.repeat(4)}</p>
                                        </div>

                                        <div className='mt-[20px] w-full flex  px-4 justify-between items-center'>
                                            <div className='flex'>
                                                   <ul className='flex gap-[5px] items-center'>
                                                         <li>
                                                             <AiOutlineInstagram className='text-color_text'/>
                                                         </li>
                                                         <li>
                                                             <BiLogoFacebook className='text-color_text'/>
                                                         </li>
                                                         <li>
                                                             <RiLinkedinFill className='text-color_text'/>
                                                         </li>
                                                   </ul>
                                            </div>
                                            <div className='btns-left-right'>
                                                <button>
                                                   <FiArrowLeft className="text-color_text text-[1rem]"/>
                                                </button>
                                                <button>
                                                   <FiArrowRight className="text-color_text text-[1rem]"/>
                                                </button>
                                            </div>
                                        </div>
                                     </div>
                                </article>

                                <div className='flex overflow-scroll sm:justify-around items-center w-full'>
                                {
                                    membersAgency.map((member , idx) => 
                                         (
                                           idx !== 2 && 
                                             <div key={idx} className={`z-10 h-[100px] border border-4 mx-[20px] border-color_3  min-w-[100px] rounded-full `} >
                                                     <img className='w-full h-full rounded-full'  src={member.img} />
                                            </div>
                                            
                                         )
                                    )
                                }
                                </div>
                    
             </div>
             </div> 
        </section>
    )
}

export default OurAgency
