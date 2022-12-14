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
  width: ${({ width }) => width || '30px'};
  height: ${({ height }) => height || '30px'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  padding: ${({ padding }) => padding};
  display
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
