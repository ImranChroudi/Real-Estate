import React , {useState} from 'react'
import { FaRegBell, FaUserAlt } from 'react-icons/fa'
import { navigation } from '../constants';
import { NavLink } from 'react-router-dom';

const NavBarDesktop = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen);
    }

    
    return (

        <div >
          <ul className='flex justify-center mr-3 items-center'>
                {navigation.map(item => (
                            <li key={item.title} className='px-2 w-[max-content]'>
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
        
        </div>
    )
}

export default NavBarDesktop
