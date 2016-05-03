import * as actions from 'actions/message-actions';
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store) {
  return next => action => {
    const result = next(action);

    if(socket && action.type === action.ADD_MESSAGE) {
      let messages = store.getState().messages;
      socket.emit('message', acttion.message);
    }

    return next(action);
  };
}

export default function(store){
  socket = io.connect(`${location.protocol}//${location.host}`);
  socket .on('start', data => {
    store.dispatch(actions.setUserId(data.userId));
  });

  socket.on('message', message => {
    store.dispatch(actions.addResponse(message));
  });
}
