import { createSlice } from '@reduxjs/toolkit';

const reactClickerSlice = createSlice({
  name: 'reactClicker',
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      return (state = state + action.payload);
    },
    decrease: (state, action) => {
      return (state = state - action.payload);
    },
    resetCounter: (state, action) => {
      return (state = action.payload);
    },
  },
});
export default reactClickerSlice;
