import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';


const Header = () => {
    return (

        <header>
            <div className='bg-[#F7F7FD] text-[#7065F0] flex justify-between items-center py-4 px-3 w-full '>
            <div className='flex justify-between items-center'>
               <img src='./assets/logo.jpeg' alt='' className='mr-6'/>
               <input
               type="text-[#D9D9D9]"
               placeholder="Search..."
               className="px-8 py-2 rounded-2xl focus:outline-none focus:border-[#7065F0] mr-6"
               />
            </div>
            <nav className=' text-[#7065F0] flex justify-between items-center py-4 px-3 w-full '>
            <img src='./assets/logo.jpeg' alt='' className=' mr-6'/>
            <input
               type="text-[#D9D9D9]"
               placeholder="Search..."
               className="px-8 py-2 rounded-2xl   mr-6"
            />
            <ul className='flex justify-center items-center'>
                <li className='px-2'>Home</li>
                <li className='px-2'>Advices</li>
                <li className='px-2'>Listings</li>
                <li className='px-2'>Contact Us</li>
                <li className='px-2 mr-6'>Mortgage</li>
            </ul>
            <div className='flex px-6'>
            <div className='flex justify-between items-center px-2 mr-5'>
              <FaUserAlt className='mr-2'/>
               <p className='text-[#D9D9D9]'>Sign In </p>
            </div>
            <div className='mr-6 relative'>
              <FaRegBell size={35}/>
            <div className=" text-white absolute top-0 right-0 flex items-center justify-center h-5 w-5 bg-red-500 rounded-full">
                  2
            </div> 
            </div>
               <button className="flex items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
               Add Listining
               </button>
            </div>
         </nav>
        </div>
        </header>
    )
}

export default Header
