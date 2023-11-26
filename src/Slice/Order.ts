import { createSlice } from "@reduxjs/toolkit"

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
               console.log(action.payload)
               if (
                    state.arrayOrderProduct.some(
                         (item) =>
                              item.id == action?.payload.id &&
                              item.emailNow == action.payload.emailNow
                    )
               ) {
                    state.arrayOrderProduct.forEach((item) => {
                         if (
                              item.id == action?.payload.id &&
                              item.emailNow == action.payload.emailNow
                         )
                              item.quantity += action?.payload.quantity
                    })
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
               const dataLocal: userType[] = JSON.parse(
                    localStorage.getItem("userss") as string
               )
               const x = dataLocal.filter((user) => user.status == true)
               const userNow = Object.assign({}, x)[0]
               state.arrayOrderProduct = state.arrayOrderProduct.filter(
                    (item) => item.emailNow !== userNow.userName
               )
               state.arrayMyOrder.push(action.payload)
          },
     },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, updateItem, completeMyOrder } =
     slice.actions

export default slice.reducer
