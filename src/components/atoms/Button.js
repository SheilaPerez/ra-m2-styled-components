import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Button = styled.button`
    background-color: ${({ backgroundColor }) => backgroundColor || colors.main};
    color: ${({color}) => color || colors.font.buttons};
    font-size: ${({ fontSize }) => fontSize || dimensions.font.h6};   
    padding: ${({padding}) => padding};
    margin: ${({margin}) => margin};
    border-radius: ${({borderRadius}) => borderRadius || "7px"};
    border: ${({border}) => border || "none"}
`

export default Button