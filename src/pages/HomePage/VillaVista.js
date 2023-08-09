import React, { memo } from 'react'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import { villaVista } from '../../constants'

const VillaVista= () => {
    return (
        <section className=' content mx-[auto] mb-[40px]'>
            <CardsOfHousses 
               title="Villa Vista - Explore Exclusivity"
               description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore "
               menuCards={villaVista}
            />
        </section>
    )
}

export default memo(VillaVista)
