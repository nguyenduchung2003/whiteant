import { createSlice } from "@reduxjs/toolkit"

const initialState: arrayNewProduct[] = [
     {
          id: 1,
          pathImg: "https://product.hstatic.net/1000210298/product/nqb06740-1__custom__e2a299f835cd45aebf8f45817b27e04d_master.jpg",
          name: "Đầm Suông Trễ Vai Nữ LYNNE OFF THE SHOULDER DRESS 120900001",
          price: "2985000",
          size: ["S", "M", "L"],
          quantity: 25,
          material: "Vải Cotton",
          describe:
               "Đây là mô tả của váy Đầm Suông Trễ Vai Nữ LYNNE OFF THE SHOULDER DRESS 120900001",
     },
     {
          id: 2,
          pathImg: "https://product.hstatic.net/1000210298/product/170300175.381_-_785.000_-_110100080.001_-_985.000__2__1e85ef0ec1dd41649f0b8feef37e0ef2_master.jpg",
          name: "Chân Váy Bút Chì Dáng Dài Xếp Ly Nữ EUNICE PENCIL SKIRT 110100080.001",
          price: "1185000",
          size: ["S", "M", "L"],
          quantity: 25,
          material: "Vải Cotton",
          describe:
               "Đây là mô tả của váy Chân Váy Bút Chì Dáng Dài Xếp Ly Nữ EUNICE PENCIL SKIRT 110100080.001",
     },
     {
          id: 3,
          pathImg: "https://product.hstatic.net/1000210298/product/170300227.100_-1_185_000__4__1c6a191af02a41cbb2134ee41289fb17.jpg",
          name: "Áo Trễ Vai Nữ PANDORER KNIT TOP 170300227",
          price: "592500",
          size: ["S", "M", "L"],
          quantity: 25,
          material: "Vải Cotton",
          describe:
               "Đây là mô tả của váy Áo Trễ Vai Nữ PANDORER KNIT TOP 170300227",
     },
     {
          id: 4,
          pathImg: "https://product.hstatic.net/1000210298/product/150403003-4_850k-110205002-1_185k__2__5bfccd1f0c0b45a29cfc77f7fec15d21_master.jpg",
          name: "Măng Tô Dáng Dài Nữ Petillant 150403003.800",
          price: "2425000",
          size: ["S", "M", "L"],
          quantity: 25,
          material: "Vải Cotton",
          describe:
               "Đây là mô tả của váy Măng Tô Dáng Dài Nữ Petillant 150403003.800",
     },
     {
          id: 5,
          pathImg: "https://product.hstatic.net/1000210298/product/120430006.002_-2.485.000__1__82c020e7fcb24435b3df463c62d5f8db_master.jpg",
          name: "Đầm Sát Nách Xẻ Trước Nữ NERON TULIP DRESS 120430006.002",
          price: "1242500",
          size: ["S", "M", "L"],
          quantity: 25,
          material: "Vải Cotton",
          describe:
               "Đây là mô tả của váy Đầm Sát Nách Xẻ Trước Nữ NERON TULIP DRESS 120430006.002",
     },
     {
          id: 6,
          pathImg: "https://product.hstatic.net/1000210298/product/nqb09827__new_size_2__21eb6bf21519489dacf785ba3df50176_master.jpg",
          name: "Chân Váy Phồng Tạo Khối Nữ THEKLA RUFFLED SKIRT 110530003",
          price: "750000",
          size: ["S", "M", "L"],
          quantity: 25,
          material: "Vải Cotton",
          describe:
               "Đây là mô tả của váy Chân Váy Phồng Tạo Khối Nữ THEKLA RUFFLED SKIRT 110530003",
     },
]

export const slice = createSlice({
     name: "dataProduct",
     initialState,
     reducers: {
          addItemProduct: (state, action) => {
               state.push(action.payload)
          },
          deleteItemProduct: (state, action) => {
               return state.filter((item) => item.id != action.payload)
          },
          updateItemProduct: (state, action) => {
               return state.map((item) => {
                    if (item.id == action.payload.id) {
                         return {
                              ...item,
                              pathImg: action.payload.pathImg,
                              name: action.payload.name,
                              price: action.payload.price,
                         }
                    } else return item
               })
          },
     },
})

export const { addItemProduct, deleteItemProduct, updateItemProduct } =
     slice.actions

export default slice.reducer
