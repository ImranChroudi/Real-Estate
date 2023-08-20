import React from 'react';
import MenuItems from './MenuItems';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import {FiSearch , FiMenu} from "react-icons/fi"
import NavBArMobile from './NavBArMobile';
import {FaUserAlt , FaRegBell} from "react-icons/fa"
import NavBarDesktop from './NavBarDesktop';
import { useMediaQuery } from 'react-responsive';



const Header = () => {

  const isDesktop = useMediaQuery({minWidth : 1024})

    return (
        <header className='mx-[auto] w-[100%] px-[30px] py-[30px] sticky  text-[#7065F0] top-0 z-[20] flex justify-between items-center'>
          <div className='flex flex-row items-center xs:mx-auto'>
             <div className='md:flex max-w-[180px] min-w-[120px] md:items-center'>
                <img src={logo} alt='logo' className='mr-3'/>
             </div>
             <div className={`${isDesktop ? "flex  px-[10px] bg-white shadow py-[10px] ml-[20px] rounded-lg items-center" : " w-[30px] h-[30px]   justify-center  rounded-full bg-color-text ml-[20px] rounded-full flex items-center justify-center " }`}>
               <button className={`${ isDesktop ? "" : "w-[100%] h-[100%]" }`}>
                <FiSearch />
               </button>
                <input
                  type="text-[#D9D9D9]"
                   placeholder="Search..."
                   className="bg-white ml-[10px] lg:flex hidden focus:border-[#7065F0]"
               />
             </div>
            </div>
            <nav className=' text-[#7065F0] sm:flex sm:justify-between sm:items-center md:flex-col py-4 px-3'>
                <div className='lg:hidden flex'>
                   <NavBArMobile/>    
                </div>
                <div className='lg:flex hidden'>
                  <NavBarDesktop />
                </div>
                {/* <div>
                    <button onClick={toggleNavbar}>
                        {isOpen ? </> : <MenuItems/>}
                    </button>
                </div> */}
             </nav>


            <div className=' flex justify-between items-center'>
              <div className='flex cursor-pointer justify-between items-center  mr-3'>
                <FaUserAlt className='mr-2'/>
                 <p className='text-[#D9D9D9] w-[max-content]'>Sign In </p>
              </div>
            <div className='relative mr-3'>
              <FaRegBell className='text-[25px]'/>
               <div className=" text-white absolute top-0 right-0 flex items-center justify-center h-4 w-4 bg-red-500 rounded-full">
                  <p className='text-[12px]'>2</p>
               </div> 
              </div>
              <div className='w-[100%] md:flex hidden'>
                <button className="flex items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
                   Add Listining
                 </button>
              </div>
              <div className='md:hidden flex'>
                    <button className='cursor-pointer text-[1.5rem]'>
                       <FiMenu className='text-color_3'/>
                    </button>
                </div>
         </div>
        </header>
    )
}

export default Header
