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
     interface arrayOrderProduct {
          id?: number
          pathImg: string
          name: string
          price: string
          quantity: number
          emailNow?: string
     }
     interface arrayMyOrder {
          emailNow?: string
          name?: string
          email?: string
          numberPhone?: string
          address?: string
          valueShip?: string
          valuePayment?: string
          nameProvince?: string
          nameDistrict?: string
          nameWard?: string
          totalAmount?: number
          arrayOder?: arrayOrderProduct[]
     }
}
export {}
