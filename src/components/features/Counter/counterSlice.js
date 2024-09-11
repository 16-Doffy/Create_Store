import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { // Chú ý: 'reducers', không phải 'reducer'
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice; // Đúng là 'actions', không phải 'action'
export const { increase, decrease } = actions; // Sử dụng 'actions' ở đây
export default reducer;
