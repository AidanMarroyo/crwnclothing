import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  //This toggle functions sets the setIsCartOpen to the opposite defaulted value
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
