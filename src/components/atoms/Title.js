import styled from 'styled-components';
import { colors} from '../../styles'

const Title = styled.p`
    font-size: ${({fontSize}) => fontSize};
    color: ${({ color }) => color || colors.font.headings};
    position: ${({position}) => position};
    margin: ${({margin}) => margin};
    text-overflow: ${({textOverflow}) => textOverflow};
    overflow: ${({overflow}) => overflow};
    white-space: ${({whiteSpace}) => whiteSpace};
    width: ${({width}) => width}
`
export default Title