import React, { useEffect } from 'react';
import MenuItems from './MenuItems';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import {FiSearch , FiMenu} from "react-icons/fi"
import NavBArMobile from './NavBArMobile';
import {FaUserAlt , FaRegBell} from "react-icons/fa"
import NavBarDesktop from './NavBarDesktop';
import { useMediaQuery } from 'react-responsive';
import { handleNavMobile, isNavMobileActive } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);




const Header = () => {

  const isDesktop = useMediaQuery({minWidth : 1024})
  const dispatch = useDispatch()
  const NavMobileActive = useSelector(isNavMobileActive)

     useEffect(() => {
      // Define the common animation
        const animateAxeY =  {
          y : 20,
          opacity : 0,
          duration : 0.7,
          // Add any other animation properties here
       }

       // Define the common animation
       const animateAxeX =  {
         x : -50,
         opacity : 0,
         duration : 0.5,
         // Add any other animation properties here
      }
 
        // Select the elements you want to animate
         const elementsToAnimateY = document.querySelectorAll('header .animate-y');
         const elementsToAnimateX = document.querySelectorAll('header .animate-x');

         let elementsXY = [...elementsToAnimateX , ...elementsToAnimateY]
        
 
        // Apply the common animation to each element
        elementsXY.forEach((element , idx) => {

            if(element.classList.contains("animate-y")){
               gsap.from(element, {
                  ...animateAxeY,
                  delay: 0.7 * idx, // Set the delay based on the index
                });
            }

            else if(element.classList.contains("animate-x")){
               gsap.from(element, {
                  ...animateAxeX,
                  delay: 0.7 * idx, // Set the delay based on the index
                  scrollTrigger: {
                     trigger: element,
                   },
                });
            }
          });

  })

    return (
        <header className='mx-[auto] w-[100%] sm:px-[30px] px-[10px] py-[30px] sticky  text-[#7065F0] top-0 z-[20] flex justify-between items-center'>
          <div className='flex flex-row items-center xs:mx-auto'>
             <div className='animate-y md:flex max-w-[180px] min-w-[100px] md:items-center'>
                <img src={logo} alt='logo' className='mr-3'/>
             </div>
             <div className="animate-x lg:flex hidden  px-[10px] bg-white shadow py-[10px] ml-[20px] rounded-full items-center">
               <button>
                <FiSearch />
               </button>
                <input
                  type="text-[#D9D9D9]"
                   placeholder="Search..."
                   className="bg-white ml-[10px] w-full lg:flex hidden"
               />
             </div>
            </div>
            <div className='flex'>
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
            <div className='relative mr-3'>
              <FaRegBell className='text-[25px]'/>
               <div className=" text-white absolute top-0 right-0 flex items-center justify-center h-4 w-4 bg-red-500 rounded-full">
                  <p className='text-[12px]'>2</p>
               </div> 
              </div>
              <div className='flex cursor-pointer justify-between items-center  mr-3'>
                <FaUserAlt className='mr-2'/>
                 <p className='text-[#D9D9D9] w-[max-content]'>Sign In </p>
              </div>
              <div className='w-[100%] lg:flex hidden'>
                <button className="flex btn items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
                   Add Listining
                 </button>
              </div>
              <div 
               onClick={()=>dispatch(handleNavMobile({state : NavMobileActive ? false : true }))}
              className='lg:hidden flex'>
                    <button className='cursor-pointer text-[1.5rem]'>
                       <FiMenu className='text-color_3'/>
                    </button>
                </div>
           </div>
            </div>
        </header>
    )
}

export default Header
