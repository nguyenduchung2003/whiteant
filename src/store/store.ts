import { configureStore } from "@reduxjs/toolkit"
import sliceOrder from "../Slice/Order"
import sliceDataProduct from "../Slice/DataProduct"
export const store = configureStore({
     reducer: {
          order: sliceOrder,
          dataProduct: sliceDataProduct,
     },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
