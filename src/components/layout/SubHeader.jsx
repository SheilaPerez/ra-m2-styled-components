import React from 'react'
import styled from 'styled-components'
import InputStyled from '../atoms/InputStyled'
import Search from '../atoms/Icons/Search'
import IconStyled from '../atoms/IconStyled'

const SubHeaderStyled = styled.div`
  background-color: #c5e3f475;
  padding: 0.8rem 2rem;
`

function SubHeader() {
  return (
    <SubHeaderStyled>
      <InputStyled
        type="text"
        name="search"
        placeholder="Piso, chalet o garaje..."
        boxShadow="3px 4px 6px 0px #d4d4d4"
        margin="0 10px 0 0 "
      />
      <InputStyled
        type="text"
        name="search"
        placeholder="Madriz, Barcelona o Zaragoza..."
        boxShadow="3px 4px 6px 0px #d4d4d4"
      />
      <IconStyled>
        <Search />
      </IconStyled>
    </SubHeaderStyled>
  )
}

export default SubHeader
