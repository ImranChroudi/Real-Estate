import React from 'react'
import { FaRegBell, FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='md:hidden flex justify-between items-center px-6'>
            <div className='flex justify-between items-center px-2 mr-5'>
              <FaUserAlt className='mr-2'/>
               <p className='text-[#D9D9D9]'>Sign In </p>
            </div>
            <div className='mr-6 relative '>
              <FaRegBell size={35}/>
            <div className=" text-white absolute top-0 right-0 sm:flex sm:items-center sm:justify-center h-5 w-5 bg-red-500 rounded-full">
                  2
            </div> 
            </div>
               <button className="flex items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
               Add Listining
               </button>
            </div>
    )
}

export default Navbar
