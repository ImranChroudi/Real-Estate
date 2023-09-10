import { createSlice } from '@reduxjs/toolkit';
import { membersAgency } from '../constants';

const initialState = {
  membersAgency: membersAgency,
  memberAgencyActive: membersAgency.find((item) => item.num === 2), // Use 'find' to get the active member
  isNavMobileActive : false,
  sizeHouse : 0,
  sizeMin : 0 ,
  sizeMax : 0,
  membersAgencyDownToUp : [0 ,1 , 2 , 3 , 4],
   selects : 
   {
      selectTypeActive : false,
      selectSearchCityActive : false 
   }

};

const realEstateSlice = createSlice({
  name: 'realEstateRedux',
  initialState,
  reducers: {
    handleNavMobile: (state , action) => {
        state.isNavMobileActive = action.payload.state
        console.log(state.membersAgency) // Use 'find' to get the active member
    }, 
    handleLeftMemberAgency: (state , action)=> {
      state.membersAgency = state.membersAgency.map((item) => ({ ...item, num: item.num > 0 ? item.num - 1 : membersAgency.length - 1 })   )
      state.memberAgencyActive =  state.membersAgency.find((item) => item.num === 2)
      console.log(state.membersAgency ) // Use 'find' to get the active member

      for (let i = 0; i < state.membersAgency.length; i++) {
        state.membersAgencyDownToUp[state.membersAgency[i]?.id] = state.membersAgency[i]
      }
    },
    handleRightMemberAgency: (state , action)=> {
      state.membersAgency = state.membersAgency.map((item) =>  ({...item, num: item.num < membersAgency.length - 1 ?  item.num + 1 : 0 })  )
      let member  =  state.membersAgency.find((item) => item.num === 2)
      state.memberAgencyActive = member
      console.log(state.membersAgency ) // Use 'find' to get the active member

      for (let i = 0; i < state.membersAgency.length; i++) {
        state.membersAgencyDownToUp[state.membersAgency[i]?.id] = state.membersAgency[i]
      }
    }, 
    handleSelect : (state , action) => {
        if(action.payload === "selectTypeActive"){
              state.selects.selectTypeActive = state.selects.selectTypeActive ? false : true 
              state.selects.selectSearchCityActive = false
           }
         else{
               state.selects.selectTypeActive = false
               state.selects.selectSearchCityActive = state.selects.selectSearchCityActive ? false : true
          }
    },
    handleRange : (state , action)=>{
        state.sizeMin = action.payload.valueMin 
        state.sizeMax = action.payload.valueMax
        
    }

  },
});

export const isNavMobileActive = (state) => state.realEstateRedux.isNavMobileActive;
export const memberActive = (state) => state.realEstateRedux.memberAgencyActive;
export const membersAgencyDownToUp = (state) => state.realEstateRedux.membersAgencyDownToUp;
export const selects = (state) => state.realEstateRedux.selects;




export const { handleNavMobile , handleLeftMemberAgency , handleRightMemberAgency , handleSelect , handleRange} = realEstateSlice.actions;


export default realEstateSlice.reducer;
