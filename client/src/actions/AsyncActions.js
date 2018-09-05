import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchMe() {
  return dispatch => {
    return fetch('/api/me.json', creds).
      then(response => response.json()).
      then(me => dispatch(actions.receiveMe(me)));
  }
}

export function fetchAllPeople() {
  return dispatch => {
    return fetch('/api/all_people.json', creds)
    .then(response => response.json())
    .then(allPeople => dispatch(actions.setAllPeople(allPeople)));
  }
}
