import { createContext, useState, useEffect } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

//User context is basically user data when a user signs up or signs in

// the actual value you want to access (in this case the state of the current user. Whether the user is logged in or logged out)
// actual storage
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

// the actual component
// When you wrap a component inside the <UserProvider></UserProvider> component can access the context value within the Provider (value)
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
        //Creates Document if user is passed in and does not exist yet
      }
      setCurrentUser(user)
      //This sets user based on the auth changes (whether there is a user signed in or out)
    })

    return unsubscribe
    //unsubscribe means that when useEffect unmounts so will the auth listener
  }, [])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
