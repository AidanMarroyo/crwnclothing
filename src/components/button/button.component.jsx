/* button types:
default
inverted
google sign in
*/

import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
  // the dynamic class name allows for one button component to be shared amongst the whole application while still adding the ability to add unique styles
}

//children prop represent what the text will be inside the button

export default Button
