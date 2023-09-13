import React, { useEffect, useRef } from 'react'
import {FiArrowRight} from "react-icons/fi"
import Card from './Card'
import animateX from '../animate/gsap'
import { gsap } from 'gsap'

const CardsOfHousses = ({styleListings , title , description , menuCards , key}) => {

   
    return (
        <div className='w-full cards-housses' >
             <div className='w-full flex sm:flex-row sm:justify-between sm:items-center flex-col  '>
                 <div className='animate-x' >
                    <h3 className='text-black title'> 
                       {title}
                    </h3>
                    <p className='text-color_text'>
                       {description}
                    </p>
                    
                 </div>
                 <div  className='animate-x hover:scale-[1.7] cursor-pointer transition-[0.5s] w-[max-content] sm:mt-[0] mt-[20px]'>
                    <FiArrowRight className="text-color_text text-[1rem]"/>
                 </div>
             </div>
             <div className='w-full grid gap-[20px] mt-[20px] grid-cols-12'>
                    {
                        menuCards.map((item , key)=> <Card styleListings={styleListings} key={key} item={item}/>)
                    }
                 </div>
        </div>
    )
}

export default CardsOfHousses
