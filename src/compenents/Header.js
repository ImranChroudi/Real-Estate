import React from 'react';
import MenuItems from './MenuItems';
import Logo from './Logo';
import Navbar from './Navbar';
import { toggleNavbar} from './MenuItems'

const Header = () => {
    return (

        <header className='w-full sticky bg-[#F7F7FD] text-[#7065F0] top-0 z-[20] py-1 px-3 flex justify-between items-center'>
            <div className='flex flex-row items-center xs:mx-auto'>
                <Logo/>
               <input
               type="text-[#D9D9D9]"
               placeholder="Search..."
               className="md:hidden px-8 py-2 rounded-2xl focus:outline-none focus:border-[#7065F0] mr-6 "
               />
            </div>
            <nav className=' text-[#7065F0] sm:flex sm:justify-between sm:items-center md:flex-col py-4 px-3'>
                <MenuItems/>
                <Navbar/>
                {/* <div>
                    <button onClick={toggleNavbar}>
                        {isOpen ? </> : <MenuItems/>}
                    </button>
                </div> */}
         </nav>
        </header>
    )
}

export default Header
