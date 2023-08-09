import React, { memo } from 'react'
import WelcomSection from './WelcomSection'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import ExpansiveHousses from './ExpansiveHousses'
import VillaVista from './VillaVista'
import CheapHouses from './CheapHouses'
import Housses from './Housses'

const HomePage = () => {
    return (
        <div className='w-full'>
            <WelcomSection />
            <Housses /> 
            
        </div>
    )
}

export default memo(HomePage)
