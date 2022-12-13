import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox, colors } from '../../styles'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: ${({ alignItems }) => alignItems};
`
const UlStyled = styled(FlexBox)`
  list-style: none;
  padding-right: 2rem;
`
function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" alignItems="center">
      <Title fontSize={dimensions.font.h6} color={colors.secondary}>
        MIPISO.com
      </Title>
      <UlStyled direction="row" justify="space-between">
        <Text fontSize={dimensions.font.h6} color={colors.main} margin="16px">
          Buscador
        </Text>
        <Text fontSize={dimensions.font.h6} color={colors.main} margin="16px">
          Datos
        </Text>
        <Text fontSize={dimensions.font.h6} color={colors.main} margin="16px">
          Mi Perfil
        </Text>
      </UlStyled>
    </HeaderStyled>
  )
}

export default Header
