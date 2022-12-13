import styled from 'styled-components'
import CardHouse from './components/molecules/CardHouse'
import CardHouseInfo from './components/molecules/CardHouseInfo'
import { Body } from './components/layout'
import Grid from './components/atoms/Grid'

const DivColor = styled.div`
  background-color: #b2b2b2;
  width: 100%;
  height: 100vh;
`
function App() {
  return (
    <Body>
      <Grid rows="1fr, 1fr" columns="repeat(2, 1fr)">
        <Grid rows="repeat(3, 1fr)" columns="repeat(3, 1fr)">
          <CardHouse
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
          <CardHouseInfo
            houseImage="../public/house.jpeg"
            houseInfo="Casa en Barcelona, Zaragoza"
            housePrice="930.000$"
          />
        </Grid>
        <DivColor />
      </Grid>
    </Body>
  )
}

export default App
