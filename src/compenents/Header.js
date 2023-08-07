import React from 'react';


const Header = () => {
    return (
        <nav className='bg-[#F7F7FD] text-[#7065F0] flex justify-center items-center py-4 px-3 w-full '>
            <img src='' alt=''/>
            <input
               type="text-[#D9D9D9]"
               placeholder="Search..."
               className="px-8 py-2 rounded-2xl focus:outline-none focus:border-[#7065F0] mr-6"
            />
            <ul className='flex justify-center items-center'>
                <li className='px-2'>Home</li>
                <li className='px-2'>Advices</li>
                <li className='px-2'>Listings</li>
                <li className='px-2'>Contact Us</li>
                <li className='px-2 mr-6'>Mortgage</li>
            </ul>
            <div className='flex px-6'>
            <div className='flex justify-center items-center px-2 mr-5'>
            <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5 mr-2"
                   viewBox="0 -8 72 72"
                   id="Layer_1"
                   data-name="Layer 1"
                   stroke="#7065F0"
                   >
                   <path
                   d="M12.54,52.05H59.46a2.11,2.11,0,0,0,1.6-.7A1.73,1.73,0,0,0,61.49,50,25.8,25.8,0,0,0,47.9,30.45a16.8,16.8,0,0,1-23.8,0A25.8,25.8,0,0,0,10.51,50a1.75,1.75,0,0,0,.43,1.38A2.11,2.11,0,0,0,12.54,52.05Z"
                   fill="#7065F0"
                  />
                  <path
                 d="M25.43,28.6c.27.29.56.56.85.82a14.52,14.52,0,0,0,19.43,0,11.1,11.1,0,0,0,.86-.82c.27-.29.54-.58.79-.89a14.6,14.6,0,1,0-22.72,0C24.89,28,25.16,28.31,25.43,28.6Z"
                 fill="#7065F0"
                 />
              </svg>
               <p className='text-[#D9D9D9]'>Sign In </p>
            </div>
            <div className='mr-6 relative'>
            <svg width="32px" height="32pxpx" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20" stroke="#7065F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <div className=" text-white absolute top-0 right-0 flex items-center justify-center h-5 w-5 bg-red-500 rounded-full">
                  2
            </div>
            </div>
               <button className="flex items-center bg-[#7065F0] text-white px-4 py-2 rounded-lg">
               Add Listining
               </button>
            </div>
        </nav>
    )
}

export default Header
