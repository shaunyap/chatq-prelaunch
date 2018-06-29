import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import {Router} from '../routes'
let referralCode;

class BetaForm extends Component {
  state = {
    fname: '',
    email: '',
    loading: false,
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({loading: true});

    const vl_header = {headers:
      {
        "Access-Control-Allow-Origin": '*',
        "Content-Type": "application/json"
    }};
    const vl_user = {
      "params": {
        "event": "registration",
        "user": {
            "firstname": this.state.fname,
            "email": this.state.email,
            "lanuage": "EN"
        },
        "referrer": {
            "referralCode": this.props.referrerCode,
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
      Router.pushRoute(`/ThankYou/${referralCode}`)
    });
  };

  render (){
    return (
      <div className="flex-center">
      <Form id="hero--form" onSubmit={this.onSubmit}>
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
           <div className="flex-center">
            <Button className="button--primary-gradient" loading={this.state.loading}>Invite me!</Button>
           </div>
      </Form>
      </div>
  )}
}

export default BetaForm;
