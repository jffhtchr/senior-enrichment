/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import student from './student'
import campus from './campus'

const rootReducer = combineReducers({
  student,
  campus
})

export default rootReducer
