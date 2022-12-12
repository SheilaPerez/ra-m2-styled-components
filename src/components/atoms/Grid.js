import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({columns}) => columns || ""};
    grid-template-rows: ${({rows}) => rows || ""};
    grid-template-areas: ${({areas}) => areas || ""};
    grid-gap: ${({gap}) => gap || 0};
`


export default Grid;