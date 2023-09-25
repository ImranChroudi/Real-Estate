import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRange  , itemsFilter , handleFilter, isMapActive, handleMap} from '../../redux/slice'
import { AiOutlineArrowDown , AiOutlineArrowUp } from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {
    cityOptions,
    countryOptions,
    processOptions,
    priceMinOptions,
    priceMaxOptions,
    bedroomOptions,
    bathroomOptions,
    Amenities,
    PropertyType,
    typeHousses
  } from '../../constants/index';
import Select from './Select';
import Checkbox from './Checkbox';

 

const Filters = () => {
    
    const itemsSelecter = useSelector(itemsFilter)
    const mapActive = useSelector(isMapActive)



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


    

  
    
    return (
        <div className='w-full overflow-scroll sm:top-[10px] top-0'>
            <div className={`md:hidden visible flex items-center justify-between`}>
            <div
              onClick={()=>{
                setFilterActive(!filterActive)
            }}
              className={`bg-color_3 px-[10px] rounded-[5px] w-[48%]  btn-filter  mb-[10px] flex items-center justify-between`}>
                <h4 className='text-[25px] text-white'>
                    Filters
                </h4>
                <button
              >
                    {
                        filterActive ?   
                        <AiOutlineArrowUp className='text-[20px] text-white'/>  :
                        <AiOutlineArrowDown className='text-[20px] text-white'/>
                    }
                </button>
            </div>

            <div 
                onClick={()=>dispatch(handleMap())}
               className={`btn-map-mobile cursor-pointer bg-color_3 px-[10px] rounded-[5px] w-[48%] btn-filter  mb-[10px] flex items-center justify-between`}>
                <h4 className='text-[25px] text-white'>
                    Carte
                </h4>
                <div>
                    <FaMapMarkerAlt className='text-[20px] text-white'/>
                </div>
            </div>
            </div>

            <div className={`selecters sm:mt-[0px] mt-[10px] flex md:h-auto h-[0px]  overflow-hidden flex-wrap justify-between ${filterActive && "h-auto"}`}>
                     <div className={`${ mapActive ? "w-full mb-[10px]" : "md:w-[48%] w-full mb-[10px]"}`}>
                      <Select    feature="city"  title="City" items={cityOptions}/>
                    </div>
                    <div className={`${mapActive ? "w-full mb-[10px]" : "md:w-[48%] w-full mb-[10px]"}`}>
                      <Select   feature="country" title="Country" items={countryOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <Select  feature="process" title="Process" items={processOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <Select  feature="type" title="Type" items={typeHousses}/>
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

                  <div className='floors w-full'>
                    <p className='mb-[5px] text-color_text'>
                       Floors :
                    </p>
                     <ul className='w-full list-floors flex  items-center justify-between'>
                            {
                                [1,2,3,4,5].map((item , idx)=>(
                                 <li 
                                   onClick={()=>{
                                    dispatch(handleFilter({key : "floors" , value : item , type : "select"}))
                                    console.log("floor : " + item)
                                   }}
                                   key={idx} 
                                   className={`m-0 p-0  w-[30px] h-[30px] flex items-center justify-center  border-solid rounded-[5px]   ${itemsSelecter.floors === item ? "bg-color_3 text-white" : "bg-white text-color_text"}`} >
                                    {item}
                                 </li>
                                ))
                            }
                         </ul>
                  </div>

            </div>
        </div>
    )
}

export default Filters
