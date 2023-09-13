import React from 'react'
import { useDispatch } from 'react-redux'
import { handleFilter } from '../../redux/slice'

const CheckBox = ({title , items , feature})=>{

    const dispatch = useDispatch()

    const handleCheckBox = (item)=>{
            document.querySelector(`.selecters #${item}`).click()
            let checkboxClickey =  document.querySelector(`#check-${item}`) 
            checkboxClickey.classList.contains("active") ?  checkboxClickey.classList.remove("active") :  checkboxClickey.classList.add("active") 
            console.log(document.querySelector(`.selecters #${item}`))
            dispatch(handleFilter({key : feature , value : item , type : "checkbox"}))
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

export default CheckBox
