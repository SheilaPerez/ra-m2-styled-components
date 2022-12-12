import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox, colors } from '../../styles'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

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
    <HeaderStyled direction="row" justify="space-between">
      <Title fontSize={dimensions.font.h6} color={colors.secondary}>
        MIPISO.com
      </Title>
      <div>
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
      </div>
    </HeaderStyled>
  )
}

export default Header
