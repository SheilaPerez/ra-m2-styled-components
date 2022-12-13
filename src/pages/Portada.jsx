import Houses from '../components/organisms/Houses'
import Grid from '../components/atoms/Grid'
import Map from '../components/atoms/Map'

function Portada() {
  return (
    <Grid rows="1fr, 1fr" columns="repeat(2, 1fr)">
      <Grid rows="repeat(3, 1fr)" columns="repeat(3, 1fr)">
        <Houses />
      </Grid>
      <Map />
    </Grid>
  )
}

export default Portada
