import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const IconStyled = styled.span`
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  color: ${({ color }) => color};
`
function Icon({ iconName }) {
  return (
    <IconStyled
      className="material-symbols-outlined"
      color={colors.searchButton}
    >
      {iconName}
    </IconStyled>
  )
}

export default Icon

Icon.propTypes = {
  iconName: PropTypes.string,
}
