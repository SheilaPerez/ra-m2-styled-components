import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import SubHeader from './SubHeader'
import { FlexBox } from '../../styles'

const BodyStyle = styled.div`
  padding: 2rem;
`

function Body({ children }) {
  return (
    <FlexBox>
      <Header />
      <SubHeader />
      <BodyStyle>{children}</BodyStyle>
    </FlexBox>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
