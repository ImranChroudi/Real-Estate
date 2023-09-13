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
  },
  itemsFilter : {
        city  : "",
        country : "",
        process : "",
        propertyType : [""],
        minPrice : "",
        maxPrice : "",
        bedrooms : "",
        bathrooms : "",
        amenities : [""],
        floors : ""
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
    handleSelect: (state, action) => {
      const { selects } = state;
      if (action.payload === 'selectTypeActive') {
        selects.selectTypeActive = !selects.selectTypeActive;
        selects.selectSearchCityActive = false;
      } else {
        selects.selectTypeActive = false;
        selects.selectSearchCityActive = !selects.selectSearchCityActive;
      }
    },
    handleRange: (state, action) => {
      const { valueMin, valueMax } = action.payload;
      state.sizeMin = valueMin;
      state.sizeMax = valueMax;
    },
    handleFilter: (state, action, type) => {
      const { key, value } = action.payload;
    
      if (type === "select") {
        // Set the value for the specified key
        state.itemsFilter[key] = value;
      } else {
        // Check if the value already exists in the array
        const index = state.itemsFilter[key].indexOf(value);
    
        if (index === -1) {
          console.log(true);
          // Value doesn't exist, add it to the array or create a new array
          state.itemsFilter[key] = state.itemsFilter[key] !== ""
            ? [...state.itemsFilter[key], value]
            : [value];
        } else {
          console.log(false);
          // Value exists, remove it from the array
          state.itemsFilter[key] = state.itemsFilter[key].filter((item) => item !== value);
        }
      }
    }
    

  },
});

export const isNavMobileActive = (state) => state.realEstateRedux.isNavMobileActive;
export const memberActive = (state) => state.realEstateRedux.memberAgencyActive;
export const membersAgencyDownToUp = (state) => state.realEstateRedux.membersAgencyDownToUp;
export const selects = (state) => state.realEstateRedux.selects;
export const itemsFilter = (state) => state.realEstateRedux.itemsFilter;





export const { handleNavMobile , handleLeftMemberAgency , handleRightMemberAgency , handleSelect , handleRange , handleFilter} = realEstateSlice.actions;


export default realEstateSlice.reducer;
