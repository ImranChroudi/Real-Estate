import React, { memo } from 'react'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { cheapHousses, expansiveHousses } from '../../constants'

const CheapHousses = () => {
    return (
        <section className='content mx-[auto] mb-[40px]'>
            <CardsOfHousses 
               title="Expansive houses"
               description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore "
               menuCards={cheapHousses}
            />
        </section>
    )
}

export default memo(CheapHousses)
