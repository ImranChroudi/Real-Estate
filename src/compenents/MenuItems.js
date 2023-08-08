import React, { useState } from 'react';
import { navigation } from '../constants/index';
import { NavLink } from 'react-router-dom';

const MenuItems = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen);
    }
    return (

        <ul className='hidden md:flex justify-center items-center'>
                        {navigation.map(item => (
                            <li key={item.title} className='px-2'>
                                <NavLink
                                    to={item.path}
                                    activeClassName='font-bold'
                                    className='hover:underline'
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                  ))}
                  <div>
                    <button onClick={toggleNavbar}>
                       {/*  {isOpen ? <X/> : <MenuItems/>} */}
                    </button>
                </div>
        </ul>
    )
}

export default MenuItems
