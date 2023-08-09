import React, { memo } from 'react'
import ExpansiveHousses from './ExpansiveHousses'
import VillaVista from './VillaVista'
import CheapHouses from './CheapHouses'

const Housses = () => {
    return (
        <div className='pb-[30px]'>
            <ExpansiveHousses />
            <VillaVista />
            <CheapHouses />

            <div className='content mx-[auto]'> 
            <button className='mt-[-40px] h-[50px] px-[30px] rounded-[10px]  text-white bg-color_3'>
                 Advanced Search
            </button>
            </div>
        </div>
    )
}

export default memo(Housses)
