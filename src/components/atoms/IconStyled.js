import styled from 'styled-components'

// Este componente no hace nada util, lo eliminaria.
const IconStyled = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  padding: ${({ padding }) => padding};
`

export default IconStyled
