import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import Router from 'next/router';
let referralCode;

class BetaForm extends Component {
  state = {
    fname: '',
    email: '',
    loading: false
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({loading: true});

    const vl_header = {headers: { "Content-Type": "application/json" }};
    const vl_user = {
      "params": {
        "event": "registration",
        "user": {
            "firstname": this.state.fname,
            "email": this.state.email,
            "lanuage": "EN"
        },
        "referrer": {
            "referralCode": "",
            "email": ""
        },
        "refSource": ""
    },
    "apiToken": this.props.config.viralLoopAPI
    }


    axios.post(`https://app.viral-loops.com/api/v2/events`, vl_user, vl_header)
    .then(res => {
      referralCode = res.data.referralCode;

    })
    .then(() =>  {
      this.setState({loading: false});
      Router.push({
        pathname: '/ThankYou',
        query: { referralCode: referralCode }
      })
    });
  };

  render (){
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid
            placeholder='First name'
            value={this.state.fname}
            onChange={event => this.setState({fname: event.target.value})}
            />
          <Form.Input fluid
            placeholder='Email'
            value={this.state.email}
            onChange={event => this.setState({email: event.target.value})}
           />
          <Form.Button color='orange' loading={this.state.loading}>Invite me!</Form.Button>
        </Form.Group>
      </Form>
  )}
}

export default BetaForm;
