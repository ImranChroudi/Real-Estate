import React, { memo } from 'react'
import WelcomSection from './WelcomSection'
import Housses from './Housses'
import WhyChooseUs from './WhyChooseUs'
import OurAgency from './OurAgency'
import OurLocations from './OurLocations'
import WhatClientSay from './WhatClientSay'


const HomePage = () => {
    return (
        <div className='w-full'>
            <WelcomSection />
            <Housses /> 
            <WhyChooseUs />
            <OurAgency />
            <OurLocations />
            <WhatClientSay />
        </div>
    )
}

export default memo(HomePage)
