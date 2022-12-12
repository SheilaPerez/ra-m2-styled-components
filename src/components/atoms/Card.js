import styled from "styled-components";
import { dimensions } from "../../styles";

const Card = styled.div`
    border: ${({border}) => border || ""};
    border-radius: ${({borderRadius}) => borderRadius || ""};
    box-shadow: ${({boxShadow}) => boxShadow || ""};
    width: ${({width}) => width || dimensions.base};
    height: ${({height}) => height || dimensions.base};
    position: ${({position}) => position};
    background-color: ${({backgroundColor}) => backgroundColor || "white"};
`

export default Card;