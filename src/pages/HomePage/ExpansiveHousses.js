import React, { memo } from 'react'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { expansiveHousses } from '../../constants'

const ExpansiveHousses = () => {
    return (
        <section className='content mx-[auto] mb-[40px]'>
            <CardsOfHousses 
               title="Expansive houses"
               description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore "
               menuCards={expansiveHousses}
               key="Expansive_houses"
            />
        </section>
    )
}

export default memo(ExpansiveHousses)
