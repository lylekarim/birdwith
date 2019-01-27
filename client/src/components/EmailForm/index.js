import React, { Component } from 'react';
import API from "../../utils/API";
import { FormBtn, Input, TextArea } from '../Form';
//import './style.css';

class EmailForm extends Component {

    state = {
        birder: {},
        // When this component mounts, grab the birder with the _id of this.props.match.params.id
        // e.g. localhost:3000/birders/599dcb67f0f16317844583fc
        email: {
            to: '',
            from: 'admin@birdwith.com',
            subject: 'A message from BirdWith',
            text: '',
            // html: '',
        }
    }

    componentDidMount() {
        API.getBirder(this.props.match.params.id)
            .then(res => this.setState({ birder: res.data }))

            .catch(err => console.log(err));
    }


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log("name = " + name);
        console.log("value = " + value);
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.sendEmail({
            email: this.state.recipient,
            from: this.state.sender,
            subject: this.state.subject,
            text: this.state.text,
        });
        console.log("state = " + JSON.stringify(this.state));
    };


    sendEmail = () => {
        const { email } = this.state.email;

        API.sendEmail(email)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        const { email } = this.state.email;
        const { recipient } = this.state.birder.email;
        const textArea = {
            borderRadius: 4
        }
        return (
            <div className="comment-respond">
                <h4 className="block-head">Contact this Birder</h4>
                <form method="get" className="comment-form">
                    <div className="form-group">
                        <Input className="form-control" placeholder="To" value={this.recipient}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <Input className="form-control" placeholder="From" value={email.sender}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <Input placeholder="Subject" value={email.subject}
                            onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group">
                        <TextArea placeholder="Message" className="form-control" rows={3} value={email.text} style={textArea}
                            onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group">
                        {/* <button className="btn" onClick={this.sendEmail}> Send Email </button> */}

                        <FormBtn className="btn btn-block" value="SendMessage" onClick={this.handleFormSubmit}>Send Email</FormBtn>


                    </div>
                </form>
            </div>
        );
    }
}

export default EmailForm;

