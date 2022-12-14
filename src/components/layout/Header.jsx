import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox, colors } from '../../styles'
import Title from '../atoms/Title'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`
const UlStyled = styled(FlexBox)`
  list-style: none;
  padding-right: 2rem;
`
function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" align="center">
      <Title fontSize={dimensions.font.h6} color={colors.secondary}>
        MIPISO.com
      </Title>
      <UlStyled direction="row" justify="space-between">
        <Title fontSize={dimensions.font.h6} color={colors.main} margin="16px">
          Buscador
        </Title>
        <Title fontSize={dimensions.font.h6} color={colors.main} margin="16px">
          Datos
        </Title>
        <Title fontSize={dimensions.font.h6} color={colors.main} margin="16px">
          Mi Perfil
        </Title>
      </UlStyled>
    </HeaderStyled>
  )
}

export default Header
