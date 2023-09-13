import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleFilter } from '../../redux/slice'

const Select = ({title , items , feature , setItemsFilter ,itemsFilter})=>{

    const dispatch = useDispatch()

    return (
        <div className='w-full'>
           {
            title &&
             (
             <p className='w-full animate-y mb-[5px] text-color_text'>
                {title} : 
              </p>
              )
           }
            <div className='animate-x rounded-[10px] px-[15px] py-[10px] border-solid'>
              <select className='w-fu dll w-full bg-transparent ' >
               {
                   items.map(( item , key)=>(
                    <option 
                    onClick={()=>{
                        dispatch(handleFilter({key : feature , value : item , type : "select"}))
                    }}
                    key={key} className='text-color_text'>
                        {item}
                    </option>
                   ))
               }
              </select>
            </div>
        </div>
    )
}


export default Select
