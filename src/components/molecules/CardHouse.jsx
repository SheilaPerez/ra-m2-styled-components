import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../atoms/Title'
import Card from '../atoms/Card'

const ImageStyle = styled.div`
  height: 100%;
  border-radius: 10px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`
function CardHouse({ houseImage, houseInfo }) {
  return (
    <Card
      border="1px solid black"
      borderRadius="10px"
      height="193px"
      width="184px"
      position="relative"
    >
      <Title color="white" margin="10px 0 0 10px" position="absolute">
        {houseInfo}
      </Title>
      <ImageStyle image={houseImage} alt="house" />
    </Card>
  )
}

export default CardHouse

CardHouse.propTypes = {
  houseImage: PropTypes.string.isRequired,
  houseInfo: PropTypes.string.isRequired,
}
