import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import OlympicTurnV from './OlympicTurnV'

const OlympicTurnC = connect(createStructuredSelector({

}), dispatch => bindActionCreators({

}, dispatch))(OlympicTurnV)

OlympicTurnC.title = 'OlympicTurn'

export default OlympicTurnC
