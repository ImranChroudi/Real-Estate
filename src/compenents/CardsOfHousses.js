import React from 'react'
import {FiArrowRight} from "react-icons/fi"
import Card from './Card'

const CardsOfHousses = ({title , description , menuCards}) => {
    return (
        <div >
             <div className='w-full flex sm:flex-row sm:justify-between sm:items-center flex-col  '>
                 <div>
                    <h3 className='text-black title'> 
                       {title}
                    </h3>
                    <p className='text-color_text'>
                       {description}
                    </p>
                    
                 </div>
                 <div className='hover:scale-[1.7] cursor-pointer transition-[0.5s] sm:mt-[0] mt-[20px]'>
                    <FiArrowRight className="text-color_text text-[1rem]"/>
                 </div>
             </div>
             <div className='w-full grid gap-[20px] mt-[20px] grid-cols-12'>
                    {
                        menuCards.map((item)=> <Card item={item}/>)
                    }
                 </div>
        </div>
    )
}

export default CardsOfHousses
