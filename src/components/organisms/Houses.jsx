import CardHouse from '../molecules/CardHouse'
import CardHouseInfo from '../molecules/CardHouseInfo'
import Grid from '../atoms/Grid'
import GreyMap from '../atoms/GreyMap'

const cardHouseInfo = new Array(8).fill()

function Houses() {
  return (
    <Grid
      rows="repeat(3, minmax(0px, 193px))"
      columns="repeat(6, 0.2fr);"
      gap="15px"
    >
      <CardHouse
        houseImage="../public/house.jpeg"
        houseInfo="Casa en Barcelona, Zaragoza"
        housePrice="930.000$"
      />
      {cardHouseInfo.map((index) => (
        <CardHouseInfo
          key={index}
          houseImage="../public/house.jpeg"
          houseInfo="Casa en Barcelona, Zaragoza"
          housePrice="930.000$"
        />
      ))}
      <GreyMap />
    </Grid>
  )
}

export default Houses
