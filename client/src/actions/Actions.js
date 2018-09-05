import * as actions from './Constants'

export function receiveMe(me) {
  return {
    type: actions.RECEIVE_ME,
    me
  }
}

export function setAllPeople(allPeople) {
  return {
    type: actions.SET_ALL_PEOPLE,
    payload: allPeople
  }
}
