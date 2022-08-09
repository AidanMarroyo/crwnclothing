import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon.component'

import './navigation.styles.scss'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
  //Calls currentUser value, not setter like in the sign-in component
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {/* This says that if there is a currentUser signed in then change to 'SIGN OUT' if there is no logged in user, display 'SIGN IN' */}
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon className='nav-link' />
        </div>
        {isCartOpen && <CartDropdown />}
        {/* The double && (short circuit operator) means that if the total line above evalutes to true (components can be truthy thats why they are functional components) then display the component CartDropdown, if not show nothing */}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
