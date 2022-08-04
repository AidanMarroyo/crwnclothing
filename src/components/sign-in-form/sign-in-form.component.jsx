import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  // empties form fields after button submit
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  //Sign in using Google Popup
  const popUpGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  // function that handles button submit
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password or email')
          break
        case 'auth/user-not-found':
          alert('incorrect password or email')
          break
        default:
          console.log(error)
      }
    }
  }

  // function that handles form input changes
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        ></FormInput>

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        ></FormInput>

        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button onClick={popUpGoogleUser} buttonType='google' type='button'>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
