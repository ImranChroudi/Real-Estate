import React , {useEffect, useState} from 'react'
import Filters from './Filters'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { expansiveHousses } from '../../constants'
import ListingsHousses from './ListingsHousses'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateAxeX, animateAxeY, handleAnimationXY } from '../../animate/gsap'
import { BiArrowFromLeft } from 'react-icons/bi'
import {FaMapMarkerAlt} from 'react-icons/fa'

import Map from './Map'
import { handleMap, isMapActive } from '../../redux/slice'
import { useDispatch, useSelector } from 'react-redux'

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ListiningsPage = () => {


    const mapActive = useSelector(isMapActive)
    const dispatch = useDispatch()

    useEffect(()=>{

        console.log(mapActive)

        const cardsAnimateX   = document.querySelectorAll(".listing-page .animate-x")
        const cardsAnimateY   = document.querySelectorAll(".listing-page .animate-y")
        const cardsAnimateXY = [...cardsAnimateX , ...cardsAnimateY]
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
  },[])
  useEffect(()=>{
    const mapAnimate   = document.querySelector(".listing-page .map")
    gsap.from(mapAnimate , {
      /*...animateAxeY */
      x : -100,
      opacity : 1,
      duration : 1
    })

  },)

  const styleContentWithMap = {
        width : "95%",
        marginLeft : "2.5%",
  }

    return (
        <div className='w-full listing-page '>
             <div className='w-full relative grid-cols-12 overflow-hidden 100vh'>

            <div className={
               mapActive ? 
               "col-span-8 md:w-[67%] px-[2.5%] w-[100%] grid grid-cols-12  ":
              ' col-span-12  content grid grid-cols-12'}>
               <div className="col-span-12  w-full mb-[20px]">
                  <div  className='w-full md:gap-0 gap-[10px] flex justify-between  items-center  ' style={{zIndex : 11}}>
                          <div className='animate-x w-[85%] '>
                             <input className='outline-none w-[100%] raduis h-[50px] px-[10px]' placeholder='What are you looking foor ?'/>
                          </div>
                         <button className='animate-x btn w-[12%] animate-x raduis bg-color_3 lg:mt-[0]  text-white flex-center px-[30px] h-[60px]'>
                              Search
                         </button>
                  </div>
              </div>


              <div className={`md:h-[100vh] overflow-scroll no-scroll ${mapActive ? "md:col-span-3 col-span-12 " : "md:col-span-3 col-start-1  col-span-12"}`}>
                    <Filters />
              </div>
  
                {
                   mapActive && 
                   <div className='md:hidden block border-s-color_3 box-shadow ml-[-20px] border-2 h-[500px] w-[100vw] z-10  bottom-0 overflow-hidden map'>
                         <Map />
                    </div>
                 }
                
              <div className={` h-[100vh] overflow-scroll no-scroll  ${mapActive ?  "md:pl-[20px] md:col-span-9 pl-[0]" : "md:pl-[40px] md:col-span-9 col-row-3 " } col-span-12`}>
                     <ListingsHousses />
              </div>
            </div>

              {
                   mapActive && 
                   <div className='md:block hidden absolute border-s-color_3 box-shadow border-2 md:w-[33%]  w-[100%] z-10 right-0 top-0 bottom-0 overflow-hidden map h-[100%] '>
                        <Map />
                    </div>
                 }
             </div>
             

            <div
            onClick={()=>dispatch(handleMap())}
             className='fixed  z-10 max-w-[max-content] sm:flex hidden right-[5%] bottom-[5%]'>
                  <div
                      className='relative btn-map-desktop shadow  rounded-[10px]  bg-color_3 text-white mr-[20px]'>
                      <p>Filter with map</p>
                  </div>
                  <div className='icon-map flex-center shadow w-[50px] cursor-pointer h-[50px] rounded-full bg-color_3 '>
                        <FaMapMarkerAlt className='text-color_3 border-s-color_1 border-color_3 shadow text-[1.5rem]'/>
                  </div>
             </div>
        </div>
    )
}

export default ListiningsPage



