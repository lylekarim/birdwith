import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';

class EmailForm extends Component {

  state = {
    email: {
      to: '',
      from: 'admin@birdwith.com',
      subject: '',
      text: '',
     // html: '',
    }
  }

  sendEmail = () => {
    const { email } = this.state;

    API.sendEmail(email)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="App">
        <div style={{ marginTop: 10 }} >
          <h2> Send Email </h2>
          <label> Recipient </label>
          <br />
          <input value={email.recipient}
            onChange={e => this.setState({ email: { ...email, to: e.target.value } })} />
          <div style={spacer} />
          <label> Sender </label>
          <br />
          <input value={email.sender}
            onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
          <div style={spacer} />
          <label> Subject </label>
          <br />
          <input value={email.subject}
            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={email.text} style={textArea}
            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendEmail}> Send Email </button>
        </div>
      </div>
    );
  }
}

export default EmailForm;