import React from 'react'

const PageDetails = () => {
    return (
        <div className='content'>
            <div className='grid w-full grid-cols-12'>
               <div className='col-span-8 grid grid-cols-12'>
                   <div className='col-span-4 pr-[10px]'>
                     <ul className='flex flex-col  w-full'>
                        <li className='w-full h-[350px] bg-red-500'>
                        </li>
                        <li className='w-full h-[350px] bg-red-500'>
                        </li>
                        <li className='w-full h-[350px] bg-red-500'>
                        </li>
                     </ul>
                   </div>
                   <div className='col-span-8 px-[10px]'>
                      <div className='rounded-[15px] h-[700px] bg-red-500'>
  
                       </div>
                    </div>
               </div>
              
                <div className='col-span-4'>
                       <div className='w-full h-[300px] bg-red-5 bg-red-500'>

                       </div>
                </div>
            </div>
        </div>
    )
}

export default PageDetails
