import { FC, ReactNode, useEffect, useReducer } from "react"
import Cookie from "js-cookie"

import { ICartProduct } from "../../interfaces"
import { CartContext, cartReducer } from "./"

interface Props {
  children: ReactNode
}

export interface CartState {
  cart: ICartProduct[]

  numberOfProducts: number
  subTotal: number
  taxRate: number
  total: number
}

const CART_INITAL_STATE: CartState = {
  cart: [],
  numberOfProducts: 0,
  subTotal: 0,
  taxRate: 0,
  total: 0
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITAL_STATE)

  useEffect(() => {
    try {
      const products = Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : []
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: JSON.parse(products)
      })
    } catch {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: []
      })
    }
  }, [])

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    const numberOfProducts = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    )
    const subTotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    )
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)
    const total = subTotal + subTotal * taxRate

    const orderSummary = {
      numberOfProducts,
      subTotal,
      taxRate,
      total
    }

    dispatch({
      type: "[Cart] - Update order summary",
      payload: orderSummary
    })
  }, [state.cart])

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some(p => p._id === product._id)
    if (!productInCart)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product]
      })

    const productInCartButDifferentSize = state.cart.some(
      p => p._id === product._id && p.size === product.size
    )
    if (!productInCartButDifferentSize)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product]
      })

    // Acumular
    const updatedProducts = state.cart.map(p => {
      if (p._id !== product._id) return p
      if (p.size !== product.size) return p

      // Actualizar la cantidad
      p.quantity += product.quantity
      return p
    })

    dispatch({
      type: "[Cart] - Update products in cart",
      payload: updatedProducts
    })
  }

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: product })
  }

  const removeProductFromCart = (product: ICartProduct) => {
    dispatch({
      type: "[Cart] - Remove product from cart",
      payload: product
    })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        updateCartQuantity,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
