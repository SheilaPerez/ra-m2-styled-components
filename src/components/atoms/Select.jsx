import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectStyled = styled.select`
  width: ${({ width }) => width || '300px'};
  padding: ${({ padding }) => padding || '5px 22px'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  border: ${({ border }) => border || '1px solid grey'};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  margin: ${({ margin }) => margin};
  appearance: ${({ apperance }) => apperance || 'none'};
`

function Select({ placeholderSelect, name }) {
  return (
    <SelectStyled
      type="text"
      name={name}
      placeholder={placeholderSelect}
      boxShadow="3px 4px 6px 0px #d4d4d4"
      margin="0 10px 0 0 "
    />
  )
}

export default Select

Select.propTypes = {
  placeholderSelect: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
