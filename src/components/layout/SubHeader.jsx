import React from 'react'
import styled from 'styled-components'
import InputStyled from '../atoms/InputStyled'
import Search from '../atoms/Icons/Search'
import IconStyled from '../atoms/IconStyled'
import { colors, dimensions, FlexBox } from '../../styles'

const SubHeaderStyled = styled(FlexBox)`
  background-color: #c5e3f475;
  padding: 0.8rem 2rem;
  flex-direction: row;
`

function SubHeader() {
  return (
    <SubHeaderStyled>
      {/* Aquí crearia un Select, con los pasos necesarios de Atoms / Molecules / ... */}
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
        margin="0 10px 0 0 "
      />
      <IconStyled
        width="40px"
        height="40px"
        backgroundColor={colors.searchButton}
        padding={dimensions.xs}
      >
        <Search />
      </IconStyled>
    </SubHeaderStyled>
  )
}

export default SubHeader
