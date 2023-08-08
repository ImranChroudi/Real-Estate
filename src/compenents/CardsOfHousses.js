import React from 'react'
import {FiArrowRight} from "react-icons/fi"
import Card from './Card'

const CardsOfHousses = ({title , description , menuCards}) => {
    return (
        <div>
             <div className='w-full flex-between items-center'>
                 <div>
                    <h3 className='text-black'> 
                       {title}
                    </h3>
                    <p className='text-color_text'>
                        {description}
                    </p>
                 </div>
                 <div>
                 <FiArrowRight className="text-color_text"/>
                 </div>
             </div>
             <div className='w-full'>
                    {
                        menuCards.map((item)=> <Card item={item}/>)
                    }
                 </div>
        </div>
    )
}

export default CardsOfHousses
