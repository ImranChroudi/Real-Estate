import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaMapMarker , FaAddressBook } from 'react-icons/fa';
import { MdKeyboardDoubleArrowLeft ,MdKeyboardDoubleArrowRight} from 'react-icons/md';

import GoogleMapReact from 'google-map-react';
import { handleMap } from '../../redux/slice';
import { useDispatch } from 'react-redux';
import { styleMap } from './styleMap';

const Map = () => {


   const dispatch = useDispatch()


   console.log(styleMap)






    
    
      const defaultCenter = {
        lat: 40.7128, // Latitude
        lng: -74.0060, // Longitude
      };


      


    return (
            <div className="h-[100%] w-full relative">
              <div className='z-20 btn-map absolute top-[10%] left-[-100px]'>
                   <button 
                     onClick={()=>dispatch(handleMap())}
                     className='w-[50px] h-[50px] rounded-full bg-white'>
                       <MdKeyboardDoubleArrowLeft className='text-gray'/>
                   </button>
              </div>
             <GoogleMapReact
                bootstrapURLKeys={{key : process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                center={defaultCenter}
                defaultCenter={defaultCenter}
                options={{ styles: styleMap }}
                defaultZoom={14}
                onChange={(e)=>console.log(e)}
                onChildClick={()=>console.log("this is my child")}
            >
                 <div 
                   className='bg-slate-50 w-[50px] h-[50px] cursor-pointer'
                   onClick={(e)=>console.log(e.target.attributes.lat)}
                    lat= {40.7128} // Latitude
                    lng= {-74.0060}
                  >
                    <h1 className='text-color_3  text-[1rem]'>Imran</h1>
                  </div>

            </GoogleMapReact>
          </div>
    )
}

export default Map
