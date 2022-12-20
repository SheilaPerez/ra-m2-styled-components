import React from 'react'
import styled from 'styled-components'
import Select from '../atoms/Select'
import Icon from '../atoms/Icon'
import { FlexBox } from '../../styles'

const SubHeaderStyled = styled(FlexBox)`
  background-color: #c5e3f475;
  padding: 0.8rem 2rem;
  flex-direction: row;
`

const IconDivStyled = styled(FlexBox)`
  width: 30px;
  height: 30px;
  background-color: blue;
  border-radius: 5px;
`

function SubHeader() {
  return (
    <SubHeaderStyled>
      <Select placeholderSelect="Piso, chalet o garaje..." name="building">
        <option value={0}>Busca casas</option>
      </Select>
      <Select placeholderSelect="Madriz, Barcelona o Zaragoza..." name="city">
        <option value={0}>Busca ciudades</option>
      </Select>
      <IconDivStyled align="center" justify="center">
        <Icon iconName="search" />
      </IconDivStyled>
    </SubHeaderStyled>
  )
}

export default SubHeader
