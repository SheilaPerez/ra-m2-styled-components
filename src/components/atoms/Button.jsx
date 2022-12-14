import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || colors.main};
  color: ${({ color }) => color || colors.font.buttons};
  font-size: ${({ fontSize }) => fontSize || dimensions.font.h6};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius || '7px'};
  border: ${({ border }) => border || 'none'};
`
function Button({ buttonTxt }) {
  return (
    <ButtonStyled type="button" padding="4px 13px" margin="0 0 0 5px">
      {buttonTxt}
    </ButtonStyled>
  )
}

export default Button

Button.propTypes = {
  buttonTxt: PropTypes.string.isRequired,
}
