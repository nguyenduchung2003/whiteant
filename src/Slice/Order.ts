import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: arrayOrderProduct[] = []

export const slice = createSlice({
     name: "order",
     initialState,
     reducers: {
          addItem: (state, action) => {
               console.log("Run slice add Item")
               if (state.some((item) => item.id == action?.payload.id)) {
                    state.forEach(
                         (item) => (item.quantity += action?.payload.quantity)
                    )
               } else {
                    state.push(action?.payload)
               }
          },
          deleteItem: (state, action: PayloadAction<number>) => {
               return state.filter((item) => item.id != action.payload)
          },
          updateItem: (state, action) => {
               if (action.payload.type == "tang") {
                    state.forEach((item) => {
                         if (item.id == action.payload.id) {
                              item.quantity++
                         }
                    })
               } else {
                    state.forEach((item) => {
                         if (item.id == action.payload.id) {
                              item.quantity--
                         }
                    })
               }
          },
     },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, updateItem } = slice.actions

export default slice.reducer
