import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon.component'

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles.jsx'

const Navigation = () => {
  //Calls currentUser value, not setter like in the sign-in component
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>

          {/* This says that if there is a currentUser signed in then change to 'SIGN OUT' if there is no logged in user, display 'SIGN IN' */}
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon className='nav-link' />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
        {/* The double && (short circuit operator) means that if the total line above evalutes to true (components can be truthy thats why they are functional components) then display the component CartDropdown, if not show nothing */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
