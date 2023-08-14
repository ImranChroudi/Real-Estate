import React, { memo } from 'react'
import WelcomSection from './WelcomSection'
import Housses from './Housses'
import WhyChooseUs from './WhyChooseUs'
import img_house from "../../assets/imagesCard/img-house.jpg"
import OurAgency from './OurAgency'


const HomePage = () => {
    return (
        <div className='w-full'>
            <WelcomSection />
            <Housses /> 
            <WhyChooseUs />
            <OurAgency />
        </div>
    )
}

export default memo(HomePage)
