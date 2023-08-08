import React, { memo } from 'react'
import WelcomSection from './WelcomSection'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import ExpansiveHousses from './ExpansiveHousses'

const HomePage = () => {
    return (
        <div className='w-full'>
            <WelcomSection />
            <ExpansiveHousses />
        </div>
    )
}

export default memo(HomePage)
