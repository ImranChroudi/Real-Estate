import React , {memo, useState} from 'react'
import { FaRegBell, FaUserAlt } from 'react-icons/fa'
import { navigation } from '../constants';
import { NavLink } from 'react-router-dom';

const NavBarMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen);
    }

    
    return (

        <div className=' px-[40px] py-[20px] w-[90%] z-100 rounded bg-white top-[100px] shadow absolute right-[5%]'>
          <ul>
                {navigation.map(item => (
                            <li key={item.title} className='px-2 font-semibold my-2 w-[max-content]'>
                                <NavLink
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
                <button className="flex items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
                   Add Listining
                 </button>
              </div>


        
        </div>
    )
}

export default memo(NavBarMobile)
