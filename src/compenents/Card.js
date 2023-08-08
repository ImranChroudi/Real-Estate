import React from 'react'
import {FaBed} from "react-icons/fa"
import {BiSolidBath} from "react-icons/bi"
import { MdSquareFoot } from 'react-icons/md';



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
        <div id={id} className='card bg-white rounded-[10px] overflow-hidden col-span-3 '>
            <div className='relative w-full h-[150px]' >
                       {
                         imgs.map((img , idx)=> <img className='absolute w-full h-full'  key={idx} src={img} />)
                       }
                 <div>
                      
                 </div>
            </div>
            <div className='info p-[10px]'>
                <h3 className='text-black'>
                    {title}
                </h3>

                <p className='text-color_text'>
                     {description}
                </p>
                <h3 className='text-color_3 text-m_ftext'> 
                       {price}
                </h3>
                <div className='flex'>
                    {
                        features.map((feature , idx)=>(
                            <div key={idx} className='flex mr-[10px] gap-[5px] items-center'>
                                  <Icon icon={feature.icon} className="text-color_3"/>                              
                                 <h4>
                                    {feature.value}
                                 </h4>
                            </div>
                        ))
                    }
                </div>

                <div className='profile-starts mt-[20px] w-full flex-between'>
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


