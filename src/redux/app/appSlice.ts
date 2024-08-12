import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    requests: {},
  },
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
  },
});

export const {setRequests} = appSlice.actions;

export default appSlice.reducer;
