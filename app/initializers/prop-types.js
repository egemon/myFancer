import PropTypes from 'prop-types'

const user = PropTypes.shape({
  name: PropTypes.string.isRequired,
})

export default function extendPropTypes() {
  PropTypes.x = {
    user,
    users: PropTypes.arrayOf(user),

  }
}
