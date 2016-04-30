export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message
  };
}

export function addMessage() {
  return {
    type: ADD_MESSAGE
  };
}
