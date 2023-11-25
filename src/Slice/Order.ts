import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface initialStateType {
     arrayOrderProduct: arrayOrderProduct[]
     arrayMyOrder: arrayMyOrder[]
}

const initialState: initialStateType = {
     arrayOrderProduct: [],
     arrayMyOrder: [],
}

export const slice = createSlice({
     name: "order",
     initialState,
     reducers: {
          addItem: (state, action) => {
               if (
                    state.arrayOrderProduct.some(
                         (item) => item.id == action?.payload.id
                    )
               ) {
                    state.arrayOrderProduct.forEach(
                         (item) => (item.quantity += action?.payload.quantity)
                    )
               } else {
                    state.arrayOrderProduct.push(action?.payload)
               }
          },
          deleteItem: (state, action) => {
               // return state.arrayOrderProduct.filter(
               //      (item) => item.id != action.payload
               // )
               return {
                    ...state,
                    arrayOrderProduct: state.arrayOrderProduct.filter(
                         (item) => item.id !== action.payload
                    ),
               }
          },
          updateItem: (state, action) => {
               if (action.payload.type == "tang") {
                    state.arrayOrderProduct.forEach((item) => {
                         if (item.id == action.payload.id) {
                              item.quantity++
                         }
                    })
               } else {
                    state.arrayOrderProduct.forEach((item) => {
                         if (item.id == action.payload.id) {
                              item.quantity--
                         }
                    })
               }
          },
          completeMyOrder: (state, action) => {
               state.arrayOrderProduct = []
               state.arrayMyOrder.push(action.payload)
          },
     },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, updateItem, completeMyOrder } =
     slice.actions

export default slice.reducer
