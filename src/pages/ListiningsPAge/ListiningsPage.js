import React , {useEffect} from 'react'
import Filters from './Filters'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { expansiveHousses } from '../../constants'
import ListingsHousses from './ListingsHousses'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateAxeX, animateAxeY } from '../../animate/gsap'

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ListiningsPage = () => {

    useEffect(()=>{

        const cardsAnimateX   = document.querySelectorAll(".listing-page .animate-x")
        const cardsAnimateY   = document.querySelectorAll(".listing-page .animate-y")
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
        <div className='w-full listing-page'>
            <div className='content'>
                  <div  className='w-full lg:flex-row flex flex-col lg:items-center items-start  mt-[20px] ' style={{zIndex : 11}}>
                          <div className='animate-x md:w-[100%] w-[100%]'>
                             <input className='outline-none w-[100%] raduis h-[50px] px-[10px]' placeholder='What are you looking foor ?'/>
                          </div>
 
                         <button className='animate-x btn animate-x raduis bg-color_3 lg:ml-[25px] ml-[0]  lg:mt-[0] mt-[10px] text-white flex-center px-[30px] h-[60px]'>
                              Search
                         </button>
                  </div>
            </div>
            <div className='sm:mt-[40px] mt-[20px] content grid grid-cols-12'>
                <div className=' sm:col-span-3 col-span-12'>
                    <Filters />
                </div>
                <div className='sm:col-span-9 col-span-12 md:pl-[40px] sm:pl-[20px] pl-[0]'>
                   <ListingsHousses />
                </div>
            </div>
        </div>
    )
}

export default ListiningsPage
