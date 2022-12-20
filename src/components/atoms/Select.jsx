import styled from 'styled-components'
import PropTypes from 'prop-types'

// Demasiados estilos pasados por props. Le puedes dar unos estilos por defecto y ya está, luego cuando tienes el Select en otro nivel sobreescribirlos si es necesario
const SelectStyled = styled.select`
  width: ${({ width }) => width || '300px'}; // Overkill
  padding: ${({ padding }) => padding || '5px 22px'}; // Overkill
  border-radius: ${({ borderRadius }) => borderRadius || '5px'}; // Overkill
  border: ${({ border }) => border || '1px solid grey'}; // Overkill
  box-shadow: ${({ boxShadow }) => boxShadow || ''}; // Overkill
  margin: ${({ margin }) => margin}; // Overkill
  appearance: ${({ apperance }) => apperance || 'none'}; // Overkill
`

// Un select debería tener por lo menos una opción por defecto
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

// Exporta el componente como export default styled(Select)``
export default Select

Select.propTypes = {
  placeholderSelect: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
