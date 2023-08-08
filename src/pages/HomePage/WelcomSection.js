import React, { memo } from 'react'
import bgWelcomSection from "../../assets/imgaesHome/bg-welcom-section.avif"
import { cities, typeProcces } from '../../constants'
import SelectConstants from '../../compenents/SelectConstants'
import SelectWithSearch from '../../compenents/SelectWithSearch'
import {IoIosArrowForward} from "react-icons/io"


const WelcomSection = () => {


    return (
        <div className='welcom-section min-h-[80vh]  w-full'>
             <div className=' w-full relative md:px-[75px] px-[20px] sm:rounded-[50px] rounded-[0px]  py-[100px] bg bg-welcom-section' style={{backgroundImage : `url(${bgWelcomSection})`}}>
                  <div  style={{zIndex : 111}}>
                  <div>
                       <h1 className='sm:text-[47px] text-[35px] text-white'>
                         Unlock the Door To Your Dream Home <br className='xl:block hidden'/>
                         Using Our Platform
                       </h1>
                  </div>

                  <div className='lg:flex-row flex flex-col lg:items-center items-start  mt-[20px] ' style={{zIndex : 11}}>
                      <div className='md:flex-row flex flex-col md:items-center items-start  w-[100%] bg-white py-[10px] px-[20px] raduis'>
                          <div className='md:w-[100%] w-[100%]'>
                             <input className='outline-none w-[100%] px-[10px]' placeholder='What are you looking foor ?'/>
                          </div>
                         <div className='sm:flex-row flex flex-col  md:mt-[0] mt-[10px] md:w-[auto] w-[100%]'>
                          <div className=' align-center cursor md:w-[180px] w-[100%]' style={{zIndex : 111}} >
                              <SelectConstants menu={typeProcces} />
                           </div>
                          <div className=' align-center cursor md:w-[180px] w-[100%]' style={{zIndex : 111}}>
                              <SelectWithSearch menu={cities} />
                          </div>
                         </div>
                      </div>

                         <button className='raduis bg-color_3 lg:ml-[25px] ml-[0]  lg:mt-[0] mt-[10px] text-white flex-center px-[30px] h-[60px]'>
                              Search
                         </button>
                  </div>

                  <div className='align-center mt-[20px]'>
                         <p className='mr-[10px] text-white'>
                            For More Search Go To 
                         </p>
                         <button className='raduis bg-color_3   btn'>
                              Advanced Search
                         </button>
                  </div>
                  </div>
                  <div className='shadow md:w-[80%] w-[95%] md:left-[10%] left-[2.5%]   sm:bottom-[-70px] bottom-[-120px] absolute mx-auto sm:rounded-[50px] py-[20px] bg-white rounded-[0px]'>
                      <div className='grid grid-cols-12 sm:px-[30px] px-[10px]'>
                          <div className='sm:col-span-3 col-span-6 px-[10px]'>
                             <h4 className='text-color_3 sm:text-[36px] text-[20px]'>
                                300+
                             </h4>
                             <p className='text-color_text'> 
                                Cities To see
                             </p>
                          </div>

                          <div className='sm:col-span-4 col-span-6 px-[10px]'>
                             <h4 className='text-color_3 sm:text-[36px] text-[20px]'>
                                2000+
                             </h4>
                             <p className='text-color_text'> 
                                Houses (Renting , Selling , Buying )
                             </p>
                          </div>

                          <div className='sm:col-span-3 col-span-6 px-[10px]'>
                             <h4 className='text-color_3 sm:text-[36px] text-[20px]'>
                                5K+
                             </h4>
                             <p className='text-color_text'> 
                             More than 5k of costumers
                             </p>
                          </div>

                          <div className='sm:col-span-2 col-span-2  px-[10px]' style={{display: "grid" , placeItems : "center"}}>
                              <button className='cercle-btn'>
                                   <IoIosArrowForward  className='text-white text-[30px] mx-auto'/>
                              </button>
                          </div>
                      </div>

                  </div>
             </div>
        </div>
    )
}

export default memo(WelcomSection)
