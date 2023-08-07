import React, { memo } from 'react'
import WelcomSection from './WelcomSection'

const HomePage = () => {
    return (
        <div className='w-full'>
            <WelcomSection />
        </div>
    )
}

export default memo(HomePage)
