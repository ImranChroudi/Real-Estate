import React, { memo } from 'react'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { cheapHousses, expansiveHousses } from '../../constants'

const CheapHousses = () => {
    return (
        <section className='content mx-[auto] mb-[40px]'>
            <CardsOfHousses 
               title="Cheap Housses"
               description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore "
               menuCards={cheapHousses}
               key="cheap_housses"
            />
        </section>
    )
}

export default memo(CheapHousses)
