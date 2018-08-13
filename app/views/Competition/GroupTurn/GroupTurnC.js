import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import GroupTurnV from './GroupTurnV'

const GroupTurnC = connect(createStructuredSelector({

}), dispatch => bindActionCreators({

}, dispatch))(GroupTurnV)

GroupTurnC.title = 'GroupTurn'

export default GroupTurnC
