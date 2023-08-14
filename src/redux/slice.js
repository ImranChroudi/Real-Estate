import { createSlice } from '@reduxjs/toolkit';
import { membersAgency } from '../constants';

const initialState = {
  membersAgency: membersAgency,
  memberAgencyActive: membersAgency.find((item) => item.id === 2), // Use 'find' to get the active member
};

const realEstateSlice = createSlice({
  name: 'realEstateRedux',
  initialState,
  reducers: {
    handleLeftMemberAgency: (state) => {
      state.memberAgencyActive = membersAgency.find((member) =>
        member.id === (state.memberAgencyActive.id + 1) % membersAgency.length // Corrected mapping logic
      );
    },
  },
});

export const memberActive = (state) => state.realEstateRedux.memberAgencyActive;

export const { handleLeftMemberAgency } = realEstateSlice.actions;

export default realEstateSlice.reducer;
