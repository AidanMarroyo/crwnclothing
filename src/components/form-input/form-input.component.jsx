import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        {...otherProps}
        //   type='text'
        //   required
        //   onChange={handleChange}
        //   name='displayName'
        //   value={displayName}
        //   commented out props replaced by {...otherProps} which spreads out all remaining props found in sign up form component
      ></input>

      {/* This states: if label tag exists, then render the following:  */}
      {label && (
        <label
          className={
            `${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label` //Label className is a dynamic class that states if the otherProps value length is greater than 0, then append the className 'shrink' to list of classNames
          }
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
