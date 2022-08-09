import { createContext, useState } from 'react'

//Cart context is being use to determine whether the state isCartOpen false or true

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

//isCartOpen useState is stating whether the cart is open by default. In this car it is not
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const value = { isCartOpen, setIsCartOpen }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
