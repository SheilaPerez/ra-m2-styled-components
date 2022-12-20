import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectStyled = styled.select`
  width: 300px;
  padding: 5px 22px;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 3px 4px 6px 0px #d4d4d4;
  margin: 0 10px 0 0;
  appearance: none;
`

function Select({ placeholderSelect, name, children }) {
  return (
    <SelectStyled type="text" name={name} placeholder={placeholderSelect}>
      {children}
    </SelectStyled>
  )
}

export default styled(Select)``

Select.propTypes = {
  placeholderSelect: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
