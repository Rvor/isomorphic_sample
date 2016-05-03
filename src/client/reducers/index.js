import { combineReducers } from 'redux';
import { UPDATE_MESSAGE, ADD_MESSAGE, ADD_RESPONSE, SET_USET_ID } from 'actions/message-actions';

export default function(initialState) {
  function messages(currentMessages=initialState.messages, action) {
    switch(action.type) {
      case ADD_MESSAGE:
      case ADD_RESPONSE:
        let messages = [...currentMessages, action.message];
        console.log(messages);
        return messages;
      default:
        return currentMessages;
    }
  }

  function currentMessage(currentMessage=initialState.currentMessage, action) {
    switch(action.type) {
      case UPDATE_MESSAGE:
        return action.message;
      case ADD_MESSAGE:
        return '';
      default:
        return currentMessage;
    }
  }
  
  function userId(currentUserId=initialState, action) {
    if (action.type === SET_USET_ID) {
      return action.userId;
    }

    return currentUserId;
  }

  return combineReducers({ currentMessage, messages, userId });
}
