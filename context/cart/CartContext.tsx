import { createContext } from "react"
import { ICartProduct } from "../../interfaces"

interface ContextProps {
  cart: ICartProduct[]
  numberOfProducts: number
  subTotal: number
  taxRate: number
  total: number

  addProductToCart: (product: ICartProduct) => void
  updateCartQuantity: (product: ICartProduct) => void
  removeProductFromCart: (product: ICartProduct) => void
}

export const CartContext = createContext({} as ContextProps)
