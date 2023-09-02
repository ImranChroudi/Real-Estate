import React from 'react'
import {BiCheckDouble} from "react-icons/bi"
import {MdSupportAgent} from "react-icons/md"
import {PiUsersThree} from "react-icons/pi"
import {PiBagSimpleBold} from "react-icons/pi"
import { whyChooseUS } from '../../constants'




const WhyChooseUs = () => {

    const Icon = ({icon , idx})=>{
        switch (icon) {
            case "BiCheckDouble":
                return <BiCheckDouble className={idx === 2 || idx ===1  ?  "text-color_3 text-[30px]" : 'text-white text-[30px]'}/>
            case "MdSupportAgent": 
               return <MdSupportAgent className={idx === 2  || idx ===1 ?  "text-color_3 text-[30px]" : 'text-white text-[30px]'}/>
            case "PiUsersThree": 
               return <PiUsersThree className={idx === 2  || idx ===1 ?  "text-color_3 text-[30px]" : 'text-white text-[30px]'}/>
            case "PiBagSimpleBold": 
               return <PiBagSimpleBold className={idx === 2 || idx ===1  ?  "text-color_3 text-[30px]" : 'text-white text-[30px]'}/>
            default:
                break;
        }
    }
    return (
        <div className='content py-[20px] grid grid-cols-12 items-center'>
               <div className='sm:col-span-6 sm:mb-[0] mb-[30px] col-span-12  mr-[auto]'>
                  <p className='text-black sm:text-[47px] text-[35px] '>
                      Why Choose Our <br/><span className='text-color_3'>Properties</span>
                  </p>
                  <p className='leading-[25px]  my-[20px] text-color_text'>
                     "Effortlessly sell, rent, or buy properties with our all-in-one real estate service. We offer a wide range of listings, expert market insights, and a user-friendly experience, making us the ideal choice for your property needs."
                  </p>
                  <div className='w-full flex gap-[20px] items-center'>
                      <div >
                          <h6 className='text-color_3 text-[30px]'>
                             24<span className='text-[20px]'>HOURS</span>
                          </h6>
                          <p className='text-black'>
                            in day of Support 
                          </p>
                      </div>
                      <div>
                          <h4 className='text-color_3 text-[30px]'>
                             7<span className='text-[20px]'>Days</span>
                          </h4>
                          <p className='text-black'>
                             in week
                          </p>
                      </div>
                  </div>
               </div>


               <div className='sm:col-span-6 col-span-12 cursor-pointer'>
  <div className='md:w-[80%] w-[100%] sm:ml-[20%] ml-[0] grid grid-cols-12 justify-items-end'>
    {whyChooseUS.map((item, idx) => (
      <div
        className={
          idx === 2 || idx === 1
            ? 'whychooseUs-item m-[10px] border-gradient  shadow col-span-6 flex-center  h-[190px]'
            : `whychooseUs-item m-[10px] border-gradient shadow sm:col-span-5 col-span-6  flex-center h-[160px]  ${idx === 3 ? "self-start" : "self-end" }`
        }
      >
        <div
          className={
            idx === 2 || idx === 1
              ? ' bg-color_1 py-[10px] px-[20px]  w-full h-full z-10  raduis flex-center '
              : ` raduis bg-color_3 py-[10px] px-[20px]  w-full h-full z-10 flex-center  ${idx === 3 ? "self-start" : "self-end" }`
           }>
         <div>
         <div 
            className='w-[50px] h-[50px] flex-center rounded-full'
            style={{ background: '#D9D9D952' }}
          >
          <Icon icon={item.icon} idx={idx} />
         </div>
         <p
            className={
            idx === 2 || idx === 1
              ? 'leading-[22px] text-color_text my-[8px]'
              : 'leading-[22px] text-white my-[8px]'
          }
          >
            {item.property}
          </p>
         </div>
         </div>
      </div>
    ))}
  </div>
</div>

        </div>
    )
}

export default WhyChooseUs
