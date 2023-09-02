import React, { memo , useEffect} from 'react'
import ExpansiveHousses from './ExpansiveHousses'
import Apartments from './Apartments'
import CheapHouses from './CheapHouses'


import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateAxeX, animateAxeY } from '../../animate/gsap'

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Housses = () => {

    useEffect(()=>{

           const cardsAnimateX   = document.querySelectorAll(".cards-housses .animate-x")
           const cardsAnimateY   = document.querySelectorAll(".cards-housses .animate-y")
           cardsAnimateX.forEach((element , idx) => {
              gsap.from( element , {
                ...animateAxeX , 
                scrollTrigger : {
                  trigger : element
                }
            })})

            cardsAnimateY.forEach((element ) => {
                console.log(element.id)
                gsap.from( element , {
                  ...animateAxeY , 
                  delay : 0.3 * element.id,
                  scrollTrigger : {
                    trigger : element
                  }
              })})
     },)
    
    return (
        <div className='pb-[60px] sm:mt-[0] mt-[200px]'>
            <ExpansiveHousses />
            <Apartments />
            <CheapHouses />
            <div className='content mx-[auto] mb-[60px]'> 
              <button className='btn mt-[40px]  h-[50px] px-[30px] rounded-[10px]  text-white bg-color_3'>
                 Advanced Search
              </button>
            </div>
        </div>
    )
}

export default memo(Housses)
