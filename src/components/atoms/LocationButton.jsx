import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function LocationButton({ buttonTxt, onClick = () => {} }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      padding="4px 13px"
      margin="0 0 0 5px"
    >
      {buttonTxt}
    </Button>
  )
}

Button.propTypes = {
  buttonTxt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
