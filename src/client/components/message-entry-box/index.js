import React, { Component } from 'react';

class MessageEntryBox extends Component {
  render() {
    return (
      <div className='message-entry-box'>
        <textarea 
          name='message'
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.props.onSubmit();
      event.preventDefault();
    }
  }
}

export default MessageEntryBox;
