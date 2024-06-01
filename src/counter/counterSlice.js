import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  prodId: [],
  check: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addproduct: (state, action) => {
      state.check = state.idProd.search(action.payload.id)
      if (state.prodId >= 0) {
        alert('This Product already in cart')
      } else {
        state.cart.push(action.payload);
        state.prodId = (action.payload.id);
      }
    }
  },
})

export const { addproduct } = counterSlice.actions

export default counterSlice.reducer