import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRange  , itemsFilter} from '../../redux/slice'
import { AiOutlineArrowDown , AiOutlineArrowUp } from 'react-icons/ai'
import {
    cityOptions,
    countryOptions,
    processOptions,
    priceMinOptions,
    priceMaxOptions,
    bedroomOptions,
    bathroomOptions,
    Amenities,
    PropertyType
  } from '../../constants/index';
import Select from './Select';
import Checkbox from './Checkbox';

 

const Filters = () => {
    
    const itemsSelecter = useSelector(itemsFilter)


    const refRange = useRef({})
    const dispatch = useDispatch()
    const [values , setValues] = useState({min : 0 , max : 0})
    const [filterActive , setFilterActive] = useState(false)
    console.log(itemsSelecter)



   
 

    const rangeChanges =() =>{
        let valueMin = 500 - refRange.current.rangeMin.value
        let valueMax = refRange.current.rangeMax.value
        setValues({min : valueMin , max : valueMax})
        dispatch(handleRange({valueMin , valueMax}))
    }

   

    const handleFilter = ()=>{
        setFilterActive(!filterActive)
    }
    
    return (
        <div className='w-full sm:sticky  sm:top-[10px] top-0'>
            <div className='sm:hidden bg-color_3 px-[10px] rounded-[5px] flex btn-filter w-full flex items-center justify-between'>
                <h4 className='text-[25px] text-white'>
                    Filters
                </h4>
                <button
                   onClick={()=>handleFilter()}
                >
                    {
                        filterActive ?   
                        <AiOutlineArrowUp className='text-[20px] text-white'/>  :
                        <AiOutlineArrowDown className='text-[20px] text-white'/>
                    }
                </button>
            </div>
            <div className={`selecters sm:mt-[0px] mt-[10px] flex sm:h-auto h-[0px]  overflow-hidden flex-wrap justify-between ${filterActive && "h-auto"}`}>
                  <div className='md:w-[48%] w-full mb-[10px]'>
                      <Select    feature="city"  title="City" items={cityOptions}/>
                    </div>
                    <div className='md:w-[48%] w-full mb-[10px]'>
                      <Select   feature="country" title="Country" items={countryOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <Select  feature="process" title="Process" items={processOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <Checkbox   feature="propertyType" title="Property Type :" items={PropertyType}/>
                    </div>
                    <div className='w-full flex flex-wrap justify-between'>
                      <p className='w-full mb-[5px] text-color_text'>
                        Price
                      </p>
                      <div className='w-[48%] mb-[10px]'>
                        <Select   feature="minPrice" title="Min Price" items={priceMinOptions}/>
                      </div>
                      <div className='w-[48%] mb-[10px]'>
                        <Select   feature="maxPrice" title="Max Price" items={priceMaxOptions}/>
                      </div>
                    </div>
                    <div className='w-[48%] mb-[10px]'>
                      <Select   feature="bedrooms" title="Bedrooms" items={bedroomOptions}/>
                    </div>
                    <div className='w-[48%] mb-[10px]'>
                      <Select  feature="bathrooms" title="Bathrooms" items={bathroomOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <Checkbox  feature="amenities" title="Amenities" items={Amenities}/>
                    </div>

                  <div className='w-full'>
                       <p className='mb-[5px] text-color_text'>
                           Size : 
                       </p>
                      <div className='flex w-full'>

                          <input ref={el => (refRange.current.rangeMin = el)} onChange={()=>rangeChanges()} type='range' max={500} min={0}  className='rangeReserve w-[50%] py-[10px] bg-transparent'/>
                          <input ref={el => (refRange.current.rangeMax = el)} onChange={()=>rangeChanges()}  type='range' max={1000} min={500} className='w-[50%] bg-transparent ml-[-3px]'/>

                      </div>
                      <div className='w-full flex justify-between items-center'>
                            <h4 className='text-color_text'>
                                    Min : {values.min}
                            </h4>
                            <h4 className='text-color_text'>
                                   Max : {values.max}
                            </h4>
                        </div>

                  </div> 

                  <div className='floors'>
                    <p className='mb-[5px] text-color_text'>
                       Floors :
                    </p>
                    <div className='w-full'>
                        <ul className='w-full list-floors flex gap-[10px] items-center justify-between'>
                            {
                                [1,2,3,4,5].map((item , key)=>(
                                 <li 
                                   onClick={()=>{
                                    dispatch(handleFilter({key : "floors" , value : item , type : "select"}))
                                   }}
                                   key={key} 
                                   className='m-0 p-0 text-color_text w-[30px] h-[30px] flex items-center justify-center  border-solid rounded-[5px] bg-white' >
                                    {item}
                                 </li>
                                ))
                            }
                         </ul>
                    </div>
                  </div>

            </div>
        </div>
    )
}

export default Filters
