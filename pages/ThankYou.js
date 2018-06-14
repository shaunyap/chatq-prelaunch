import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Layout from "../components/Layout";
import {Container} from 'semantic-ui-react';

class ThankYou extends Component {
  render() {
    const code = this.props.url.query.referralCode;
    return (
      <Layout>
        <Container>
          <h1>Thank you for signing up!</h1>
          <h3>Your referral code is: {code}</h3>
        </Container>
      </Layout>
    );
  }
}

export default ThankYou;
