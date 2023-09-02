import React , {memo, useState} from 'react'
import { FaRegBell, FaUserAlt } from 'react-icons/fa'
import {FiSearch } from "react-icons/fi"
import { navigation } from '../constants';
import { NavLink } from 'react-router-dom';
import {handleNavMobile, isNavMobileActive } from '../redux/slice';
import { useSelector , useDispatch } from 'react-redux';


const NavBarMobile = () => {

    const NavMobileActive = useSelector(isNavMobileActive)
    const dispatch = useDispatch()
    
    return (

       <>
    { 
        NavMobileActive &&
        
        <div className=' px-[40px] py-[20px] w-[90%] z-100 rounded bg-white top-[100px] shadow absolute right-[5%]'>
            <div className='w-full mb-[20px] p-[15px]  flex bg-low_opacity items-center rounded-[10px]'>
              <FiSearch className="mr-[10px]"/>
              <input
                  type="text-[#D9D9D9]"
                   placeholder="Search..."
                   className=" ml-[10px] bg-transparent"
               />
            </div>

          <ul>
                {navigation.map(item => (
                            <li
                            
                            key={item.title} className='px-2 font-semibold my-2 w-[max-content]'>
                                <NavLink
                                   onClick={()=> dispatch(handleNavMobile({state : false}))}

                                    to={item.path}
                                    activeClassName='font-bold'
                                    className='w-[max-content]'
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                  ))}

           </ul>

            <div className='min-w-[100%] mt-[20px]'>
                <button
                 onClick={()=> dispatch(handleNavMobile({state : false}))}
                className="flex items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
                   Add Listining
                 </button>
              </div>


        
        </div>
    }
       </>
    )
}

export default memo(NavBarMobile)
