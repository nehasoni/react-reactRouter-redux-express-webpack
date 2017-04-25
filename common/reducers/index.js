import { combineReducers } from 'redux'
import repos from '../../app/modules/Repos/Reducer'
import home from '../../app/modules/Home/Reducer'

const rootReducer = combineReducers({
  repos,
  home
})

export default rootReducer
