import React , {useEffect} from 'react'
import { cheapHousses, expansiveHousses, listApartments } from '../../constants'
import CardsOfHousses from '../../compenents/CardsOfHousses'
import PaginationStacked from '../../compenents/PaginationStacked'



const ListingsHousses = () => {

   

    const housses = [...cheapHousses , ...expansiveHousses , ...listApartments ]
    
    return (
        <div className='w-full listings-housses'>
             <CardsOfHousses 
                         title="Available for rent and sell"
                         description="Lorem ipsum dolor sit amet, 
                                      consectetur adipiscing elit,
                                      sed do eiusmod tempor incididunt ut labore "
                         menuCards={housses}
                         key="Expansive_houses"
                         styleListings={true}
             />
            <PaginationStacked />
        </div>
    )
}

export default ListingsHousses
