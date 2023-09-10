import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleRange } from '../../redux/slice'
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



const Select = ({title , items})=>{
    return (
        <div className='w-full'>
           {
            title &&
             (<p className='w-full mb-[5px] text-color_text'>
                {title} :
              </p>)
           }
            <div className=' rounded-[10px] px-[15px] py-[10px] border-solid'>
              <select className='w-fu dll w-full bg-transparent ' >
               {
                   items.map(( item , key)=>(
                    <option key={key} className='text-color_text'>
                        {item}
                    </option>
                   ))
               }
              </select>
            </div>
        </div>
    )
}

const CheckBoxs = ({title , items})=>{

    const handleCheckBox = (item)=>{
            document.querySelector(`.selecters #${item}`).click()
            let checkboxClickey =  document.querySelector(`#check-${item}`) 
            checkboxClickey.classList.contains("active") ?  checkboxClickey.classList.remove("active") :  checkboxClickey.classList.add("active") 

            console.log(document.querySelector(`.selecters #${item}`))
         }
         
    return (
        <div className='w-full' >
            <p className='mb-[5px] text-color_text'>
                {title} : 
            </p>
             {
                  items.map((item , key)=>(
                     <div className='flex items-center'>
                        <input name={item} id={item} type='checkbox' className='w-[0px]  h-[0px]  opacity-0 rounded-[10px] ' value={item} />
                        <button
                           onClick={()=>{handleCheckBox(item)}}
                           id={`check-${item}`} className={`h-[15px] btn-checkbox cursor-pointer rounded-[5px] w-[15px] border-solid bg-white`}>
                        </button>
                        <label className='ml-[5px] text-color_text' for={item}>{item}</label>
                     </div>
                  ))
             }
        </div>
    )
}
 

const Filters = () => {

    const refRange = useRef({})
    const dispatch = useDispatch()
    const [values , setValues] = useState({min : 0 , max : 0})
    const [filterActive , setFilterActive] = useState(false)
 

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
                        <AiOutlineArrowUp className='text-[20px] text-white'/>:
                        <AiOutlineArrowDown className='text-[20px] text-white'/>
                    }
                </button>
            </div>
            <div className={`selecters sm:mt-[0px] mt-[10px] flex sm:h-auto h-[0px]  overflow-hidden flex-wrap justify-between ${filterActive && "h-auto"}`}>
                  <div className='md:w-[48%] w-full mb-[10px]'>
                      <Select title="City" items={cityOptions}/>
                    </div>
                    <div className='md:w-[48%] w-full mb-[10px]'>
                      <Select title="Country" items={countryOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <Select title="Process" items={processOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <CheckBoxs title="Property Type :" items={PropertyType}/>
                    </div>
                    <div className='w-full flex flex-wrap justify-between'>
                      <p className='w-full mb-[5px] text-color_text'>
                        Price
                      </p>
                      <div className='w-[48%] mb-[10px]'>
                        <Select title="Min Price" items={priceMinOptions}/>
                      </div>
                      <div className='w-[48%] mb-[10px]'>
                        <Select title="Max Price" items={priceMaxOptions}/>
                      </div>
                    </div>
                    <div className='w-[48%] mb-[10px]'>
                      <Select title="Bedrooms" items={bedroomOptions}/>
                    </div>
                    <div className='w-[48%] mb-[10px]'>
                      <Select title="Bathrooms" items={bathroomOptions}/>
                    </div>
                    <div className='w-full mb-[10px]'>
                      <CheckBoxs title="Amenities" items={Amenities}/>
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
                                 <li key={key} className='m-0 p-0 text-color_text w-[30px] h-[30px] flex items-center justify-center  border-solid rounded-[5px] bg-white' >
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
