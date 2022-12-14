import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../atoms/Card'
import Title from '../atoms/Title'
import Button from '../atoms/Button'
import { dimensions } from '../../styles'

const ImageStyle = styled.div`
  height: 100%;
  border-radius: 10px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`
const DivImageStyle = styled.div`
  height: 60%;
`
const DivInfoStyle = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`

function CardHouseInfo({ houseImage, houseInfo, housePrice }) {
  return (
    <Card
      border="1px solid black"
      borderRadius="10px"
      boxShadow="0px 1px 3px 4px #d4d4d4"
      height="193px"
      width="184px"
    >
      <DivImageStyle>
        <ImageStyle image={houseImage} alt="house" />
      </DivImageStyle>
      <DivInfoStyle>
        <Title
          color="grey"
          fontSize={dimensions.font.h6}
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {houseInfo}
        </Title>
        <Title fontWeight="bold" fontSize={dimensions.font.base}>
          {housePrice}
          <Button buttonTxt="Localizar" />
        </Title>
      </DivInfoStyle>
    </Card>
  )
}

export default CardHouseInfo

CardHouseInfo.propTypes = {
  houseImage: PropTypes.string.isRequired,
  houseInfo: PropTypes.string.isRequired,
  housePrice: PropTypes.string.isRequired,
}
