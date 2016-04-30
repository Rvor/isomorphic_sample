import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <ul className='message-list'>
        { this.props.messages.map((message, index) => {
          return (
            <li key={`message-${index}`}>
              { message.text }
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
