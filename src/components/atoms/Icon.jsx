import PropTypes from 'prop-types'
import Search from './Icons/Search'

// Esta es una manera muy compleja de hacerlo
// Intentaria utilizar algo como material ui icons font y a partir de ahí crear un componente más reutilizable que no requiera iconos individuales.

// eslint-disable-next-line no-unused-vars
function Icon({ type }, props) {
  switch (type) {
    case 'search':
      return <Search {...props} />
    default:
      return null
  }
}

export default Icon

Icon.propTypes = {
  type: PropTypes.string,
}
