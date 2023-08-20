import React from 'react'
import { cities } from '../../constants'
import { FiArrowRight } from 'react-icons/fi'

const OurLocations = () => {

    return (
        <section className='h-[70vh] my-[40px]'>
             <div className='w-full h-full relative'>
                 <div className='sm:absolute sm:w-[40%] w-full h-full  z-10 left-0 flex-center' style={{zIndex : "1111" ,backgroundImage : "linear-gradient(85.53deg, #7065F0 69.48%, rgba(112, 101, 240, 0) 173.38%)"}}>
                    <div className='mx-[20%] text-center' >
                         <p className='text-white md:text-[47px] text-[35px] '> 
                          Our Operational 
                          Locations
                           That we are 
                           working in
                         </p>
                         <div className='hover:scale-[1.2] sm:transform-rotate-[0deg] transform-rotate-[90deg]  mt-[20px] cursor-pointer transition-[0.5s] flex justify-center '>
                             <FiArrowRight className="text-white text-[3rem]"/>
                          </div>
                    </div>
                 </div>
                 <div className='h-full flex w-full'>
                     {
                        cities.map((item , idx)=> (
                            <div id={item.id} key={idx} className='relative city h-full w-[20%]'>
                                 <img src={item.image} className='absolute h-full w-full' /> 
                                 <div className='z-10 absolute  name-desc-city w-full  p-[20px]'>
                                     <h4 className='text-white text-[30px] mb-[20px]'>{item.name}</h4>
                                     <p className='text-white  city-desc'>
                                        {item.description.slice(0 , 100)}
                                     </p>
                                 </div>

                            </div>

                        ))
                     }
                 </div>
             </div>
        </section>
    )
}

export default OurLocations


