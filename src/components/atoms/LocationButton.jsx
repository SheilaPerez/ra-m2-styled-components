import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function LocationButton({ buttonTxt }) {
  return (
    <Button type="button" padding="4px 13px" margin="0 0 0 5px">
      {buttonTxt}
    </Button>
  )
}

export default LocationButton

Button.propTypes = {
  buttonTxt: PropTypes.string.isRequired,
}
