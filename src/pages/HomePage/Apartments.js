import React, { memo } from 'react'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { listApartments } from '../../constants'

const Apartments= () => {
    return (
        <section className=' content mx-[auto] mb-[40px]'>
            <CardsOfHousses 
               title="Apartments"
               description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore "
               menuCards={listApartments}
               key="Apartments"
            />
        </section>
    )
}

export default memo(Apartments)
