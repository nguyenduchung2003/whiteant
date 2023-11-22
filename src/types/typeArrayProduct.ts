declare global {
     interface arrayNewProduct {
          id?: number
          pathImg: string
          name: string
          price: string
     }
     interface userType {
          userName: string
          passWord: string

          list: number[]
          status: boolean
     }
}
export {}
