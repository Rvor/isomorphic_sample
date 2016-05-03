export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_RESPONSE = 'ADD_RESPONSE';
export const SET_USET_ID = 'SET_USET_ID';

export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  };
}

export function addResponse(message) {
  return {
    type: ADD_RESPONSE,
    message
  };
}

export function setUserId(userId) {
  return {
    type: SET_USET_ID,
    userId
  };
}
