import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  //Calls currentUser value, not setter like in the sign-in component
  const { currentUser, setCurrentUser } = useContext(UserContext)

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
