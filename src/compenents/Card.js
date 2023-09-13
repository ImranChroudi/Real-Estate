import React, { lazy } from 'react'
import {FaBed} from "react-icons/fa"
import {BiSolidBath} from "react-icons/bi"
import { MdPlaylistAdd, MdSquareFoot } from 'react-icons/md';
import {PiHeartStraight} from "react-icons/pi"



const Card = ({item , styleListings}) => {


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
        <div 
            id={id} 
            className={ 
            styleListings === true ?  
            `md:col-span-4 animate-y  sm:col-span-6 col-span-12` : 
            `card animate-y md:col-span-3 sm:col-span-6 col-span-12`}
        >
           <div className='border-gradient transition-[0.5s] hover:translate-y-[-5px] cursor-pointer shadow '>
           <div className='h-full flex flex-col w-full overflow-hidden rounded-[10px]  bg-white ' style={{zIndex : 1111}}>
            <div className='z-1 relative w-full h-[150px]' >
                       {
                         imgs.map((img , idx)=> <img key={idx} loading={lazy} className='absolute w-full h-full' src={img} />)
                       }
                 <div className='absolute w-full h-full flex justify-between p-[10px]'>
                      <div className='h-full flex flex-col justify-between'>
                          <button className='like w-[30px] icon-hover h-[30px] rounded-[10px] bg-white flex-center' >
                              <PiHeartStraight />
                            </button>
                            <div className={`h-[30px] flex-center px-[20px] rounded-[5px] ${item.process === "sell" ? "bg-green-300" : "bg-yellow-500"} `}>
                            <h4 className=' text-black'>
                                {item.process}
                            </h4>
                            </div>
                      </div>
                      <button className='like w-[30px] h-[30px] rounded-[10px] icon-hover bg-white flex-center' >
                              <MdPlaylistAdd className='text-lg '/>
                      </button>
                 </div>
            </div>
            <div className=' bg-white info p-[10px]' style={{zIndex : "111"}}>
                <h3 className='text-[18px] text-black'>
                    {title.slice(0 , 50)}...
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
            </div> 
        </div>
    )
}

export default Card


