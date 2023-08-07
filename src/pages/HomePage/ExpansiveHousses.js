import React from 'react'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { expansiveHousses } from '../../constants'

const ExpansiveHousses = () => {
    return (
        <section className='w-full'>
            <CardsOfHousses 
               title="Expansive houses"
               description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore "
               menuCards={expansiveHousses}
            />
        </section>
    )
}

export default ExpansiveHousses
