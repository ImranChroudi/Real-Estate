import React, { memo } from 'react'
import logo from '../assets/logo.png';
import { footerData } from '../constants';
import { RiLinkedinFill } from 'react-icons/ri';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
         <footer className='pt-[40px] mt-[100px]'>
            <div className='w-full pt-[80px] pb-[40px] relative bg-[#31135E]'>
                <div className='flex absolute top-[-60px] left-[10%] px-[20px] justify-between items-center py-[40px] w-[80%] mx-auto rounded-[15px] ' style={{backgroundImage : "linear-gradient(to right , #6547D7 , white)"}}>
                    <p className='text-[20px]'>
                       Take good design today
                    </p>
                    <div className='flex items-center'>
                        <p className='mr-[10px]'>
                            Let`s Do it
                        </p>
                        <button className='btn rounded-[5px] bg-color_3'>
                            Get started
                        </button>
                    </div>
                </div> 
                <div className=' w-full py-[40px]'>
                   <div className='content grid grid-cols-12 flex justify-between'>
                        <div className='md:flex pt-[10px] md:justify-start sm:justify-self-center md:mb-[0] mb-[30px] md:col-span-3 sm:col-span-12 items-start max-w-[180px] min-w-[150px] md:items-center'>
                            <img src={logo} alt='logo' className='flex self-start mr-3'/>
                        </div>
                        {
                            footerData?.map((item , idx) => (
                                <div className='md:col-span-3 col-span-12 sm:mb-[0] mb-[20px] sm:col-span-4 ' key={idx}>
                                    <h3 className='text-[20px] mb-[10px] text-white font-semiboold'>
                                        {item?.titel}
                                    </h3>
                                    <ul>
                                        {
                                            item?.items?.map((subItem, subIdx) => ( 
                                                <li key={subIdx} className='my-[8px] text-[15px] text-white'>
                                                    {subItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                            
                        }
                        <div className='md:col-span-3 sm:mb-[0px] mb-[20px] col-span-12 sm:col-span-4'>
                            <p className='text-[25px] text-white'>
                                let's do it  
                            </p>

                            <div className='w-full flex   items-center'>
                                            <div className='flex'>
                                                   <ul className='flex gap-[5px] items-center'>
                                                         <li>
                                                             <AiOutlineInstagram className='text-[1.5rem] text-white'/>
                                                         </li>
                                                         <li>
                                                             <BiLogoFacebook className='text-[1.5rem] text-white'/>
                                                         </li>
                                                         <li>
                                                             <RiLinkedinFill className='text-[1.5rem] text-white'/>
                                                         </li>
                                                   </ul>
                                            </div>
                                            
                            </div>
                            <div className='mt-[20px]'>
                              <p className='text-[25px] text-white'>
                                 Subscribe
                              </p>
                              <p className='text-[18px] text-white'>
                                Subscribe to stay tuned for new web design and latest updates. Let's do it! 
                              </p>
                              <div className='lg:flex-row flex flex-col lg:items-center items-start  mt-[20px] ' style={{zIndex : 11}}>
                                      <div className=' w-[350px] h-[50px]'>
                                         <input className='w-[max-content] px-[15px] outline-none py-[10px] w-[100%] h-[100%] rounded-[10px] px-[10px]' placeholder='What are you looking foor ?'/>
                                      </div>
                                    <button className='btn raduis bg-color_3 lg:ml-[25px] ml-[0]  lg:mt-[0] mt-[10px] text-white flex-center px-[30px] h-[50px]'>
                                        Search
                                    </button>
                              </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
         </footer>
    )
}

export default memo(Footer)
