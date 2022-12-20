import styled from "styled-components";

const Card = styled.div`
    border: 1px solid black;
    border-radius:10px;
    box-shadow: 0px 1px 3px 4px #d4d4d4;
    width: 100%;
    height: 100%;
    position: ${({position}) => position};
    background-color: ${({backgroundColor}) => backgroundColor || "white"};
`

export default Card;