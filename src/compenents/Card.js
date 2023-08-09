import React from 'react'
import {FaBed} from "react-icons/fa"
import {BiSolidBath} from "react-icons/bi"
import { MdPlaylistAdd, MdSquareFoot } from 'react-icons/md';
import {PiHeartStraight} from "react-icons/pi"



const Card = ({item}) => {


    const {id, imgs, title, description, price,  features, imgProfile, nameProfile, stars} = item

    console.log(features)
    const Icon = ({icon})=>{
        switch (icon) {
            case "icon_bed":
                return <FaBed className='text-color_3'/>
            case "icon_bath": 
               return <BiSolidBath className='text-color_3'/>
            case "icon_sqft": 
               return <MdSquareFoot className='text-color_3'/>
            default:
                break;
        }
    }

    return (
        <div id={id} className='card bg-white rounded-[10px] shadow  overflow-hidden md:col-span-3 sm:col-span-6 col-span-12 '>
            <div className='relative w-full h-[150px]' >
                       {
                         imgs.map((img , idx)=> <img key={idx} className='absolute w-full h-full' src={img} />)
                       }
                 <div className='absolute w-full h-full flex justify-between p-[10px]'>
                      <div className='h-full flex flex-col justify-between'>
                          <button className='like w-[30px] h-[30px] rounded-[10px] bg-white flex-center' >
                              <PiHeartStraight className='text-color_3'/>
                            </button>
                            <div className='h-[30px] flex-center px-[20px] rounded-[10px] bg-color_3'>
                            <h4 className=' text-white text-xs'>
                              New
                            </h4>
                            </div>
                      </div>
                      <button className='like w-[30px] h-[30px] rounded-[10px] bg-white flex-center' >
                              <MdPlaylistAdd className='text-color_3 text-lg'/>
                      </button>
                 </div>
            </div>
            <div className='info p-[10px]'>
                <h3 className='text-[18px] text-black'>
                    {title}
                </h3>

                <p className='my-[8px] leading-[22px]  text-color_text'>
                     {description.slice(0 , 110)}...
                </p>
                <h3 className='text-color_3 text-[18px] text-m_ftext'> 
                       {price}
                </h3>
                <div className='flex mt-[10px]'>
                    {
                        features.map((feature , idx)=>(
                            <div key={idx} className='flex mr-[10px] gap-[5px] items-center'>
                                  <Icon  icon={feature.icon} className="text-color_3 text-[25px]"/>                              
                                 <h4>
                                    {feature.value}
                                 </h4>
                            </div>
                        ))
                    }
                </div>

                <div className='profile-starts mt-[10px] w-full flex-between'>
                     <div className='flex items-center'>
                        <img src={imgProfile} className='w-[40px] mr-[10px] h-[40px] rounded-full' />
                        <h4>
                            {nameProfile}
                        </h4>
                     </div>
                     <div className='text-yellow-400'>
                        {stars}
                     </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Card


