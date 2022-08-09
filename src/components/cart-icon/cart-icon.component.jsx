import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  //This toggle functions sets the setIsCartOpen to the opposite defaulted value
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
