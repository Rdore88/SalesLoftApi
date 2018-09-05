import update from 'immutability-helper';
import { SET_ALL_PEOPLE } from '../actions/Constants'

const initialState = {
  allPeople: [],
}

const allPeople = function(state = initialState, action){
  switch(action.type){
    case SET_ALL_PEOPLE:
      return update(state, {
        allPeople: {
          $set: action.payload
        }
      })
    default:
      return state;
  }
}

export default allPeople;
