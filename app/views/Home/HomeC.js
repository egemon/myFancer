import { connect } from 'react-redux'
import Home from './HomeV'

import { editTruckNumber, createCompetitor } from '../../actions'

export default connect(state => ({
  trackNumber: state.trackNumber,
  competitors: state.competitors,
}), {
  editTruckNumber,
  createCompetitor,
})(Home)
