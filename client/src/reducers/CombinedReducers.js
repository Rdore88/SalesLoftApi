import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { me } from './Me'
import allPeople from './AllPeople'

const Reducers = combineReducers({
  router: routerReducer,
  me,
  allPeople
});

export default Reducers
