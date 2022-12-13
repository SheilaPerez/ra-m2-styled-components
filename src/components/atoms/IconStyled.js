import styled from 'styled-components'

const IconStyled = styled.div `
    width: ${({width}) => width};
    height: ${({height}) => height};
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: ${({ borderRadius }) => borderRadius || "5px"};
    padding: ${({padding}) => padding}
`

export default IconStyled;