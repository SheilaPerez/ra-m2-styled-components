import PropTypes from 'prop-types'
import Search from './Icons/Search'

// eslint-disable-next-line no-unused-vars
function Icon({ type }) {
  switch (type) {
    case 'search':
      return <Search />
    default:
      return null
  }
}

export default Icon

Icon.propTypes = {
  type: PropTypes.string,
}
