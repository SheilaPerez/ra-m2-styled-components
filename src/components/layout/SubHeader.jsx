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
  width: ${({ width }) =>
    width ||
    '30px'}; // overkill, no es necesario que todo se pueda editar por props
  height: ${({ height }) =>
    height ||
    '30px'}; // overkill, no es necesario que todo se pueda editar por props
  background-color: ${({ backgroundColor }) =>
    backgroundColor}; // overkill, no es necesario que todo se pueda editar por props
  border-radius: ${({ borderRadius }) =>
    borderRadius ||
    '5px'}; // overkill, no es necesario que todo se pueda editar por props
  padding: ${({ padding }) => padding};
  display // Parece que falta algo aquí
`

function SubHeader() {
  return (
    <SubHeaderStyled>
      <Select placeholderSelect="Piso, chalet o garaje..." name="building" />
      <Select placeholderSelect="Madriz, Barcelona o Zaragoza..." name="city" />
      <IconDivStyled backgroundColor="blue" align="center" justify="center">
        <Icon iconName="search" />
      </IconDivStyled>
    </SubHeaderStyled>
  )
}

export default SubHeader
