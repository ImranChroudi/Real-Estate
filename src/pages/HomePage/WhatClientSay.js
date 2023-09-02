import React, { useEffect, useRef } from 'react'

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { whatsClientSay } from '../../constants';

import {RiStarSFill} from "react-icons/ri"

import Flickity from 'flickity';
import 'flickity/css/flickity.css';








const WhatClientSay = () => {


    const sliderRef = useRef()
    useEffect(() => {
        const flickity = new Flickity(sliderRef.current, {
          // Flickity options and settings
          // For example:
          // cellAlign: 'left',
          // wrapAround: true,
          // autoPlay: true,
        });
      
        return () => {
          flickity.destroy();
        };
      }, []);


   
    return (
        <section className='w-full'>
            <div className='content py-[20px]'>
                  <p className='text-black title '>
                  What did customers <span className='text-color_3'>Say</span>
                  </p>
                <div className='mt-[20px] py-[20px]'>
                <div className='' ref={sliderRef} aria-label="My Favorite Images" >
                    {
                        whatsClientSay.map((item , key)=>(
                         <div className='rounded-[10px] shadow-lg card-client mx-[10px]' >
                             <article className="sm:w-[400px] w-[300px] rounded-[10px] relative  z-10   rounded-md duration-300   hover:shadow-sm" key={key}>

                                     <div className='w-full h-full rounded-[10px] z-10 py-[15px] '>
                                     <div className="flex items-center ml-4 mr-2">
                                            <div className="flex-none w-[50px] h-[50px]   rounded-full">
                                                <img src={item.img} className="w-full h-full  rounded-full" alt={item.name} />
                                            </div>
                                            <div className="ml-3">
                                                <span className="block text-gray-900">{item.name}</span>
                                                <div className="mx-0 flex">
                                                     <RiStarSFill className='text-yellow-500'/>
                                                     <RiStarSFill className='text-yellow-500'/>
                                                     <RiStarSFill className='text-yellow-500'/>
                                                     <RiStarSFill className='text-yellow-500'/>
                                                     <RiStarSFill className='text-yellow-500'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-3 ml-4 mr-2 mb-3">
                                            <p className="text-gray-400 text-sm mt-1">{item.description.repeat(2)}</p>
                                        </div>

                                     </div>
                                </article>
                          </div>
                        ))
                    }
                 

                 </div>
                </div>
            </div>
        </section>
    )
}

export default WhatClientSay
