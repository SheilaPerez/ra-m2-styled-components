import styled from 'styled-components'

// Este componente lo eliminaria, y tendría los que ya tenias. InputNumber, InputText, InputColor, etc... Dentro de ese componente puedes tener un styled.input y devolverlo
const InputStyled = styled.input`
  width: ${({ width }) => width || '300px'};
  padding: ${({ padding }) => padding || '5px 22px'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  border: ${({ border }) => border || '1px solid grey'};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  margin: ${({ margin }) => margin};
`

export default InputStyled
