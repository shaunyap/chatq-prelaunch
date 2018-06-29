import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Layout from "../../components/Layout";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../../reducers/index";
import * as actionCreators from "../../actions/index";
import {Container, Grid, Card, Input} from 'semantic-ui-react';
import TYHeroGrid from '../../components/TYHeroGrid';
import TYReferral from '../../components/TYReferral';
import TYCardSet from '../../components/TYCardSet';
import Remember from '../../components/Remember';
import { Link, Router } from '../../routes';
import config from '../../config';
import axios from 'axios';

let store = createStore(reducers, applyMiddleware(thunk))

class ThankYou extends Component {
  static async getInitialProps(props) {
    const referralCode = props.query.referralCode;

    return {
      referralCode: referralCode,
      referrals: 3,
      freeMonths: 4
    };
  }
  render() {
    return (
      <Provider store={store}>
      <Layout>
        <Container>
          <TYHeroGrid code={this.props.referralCode} />
          <TYReferral />
          <TYCardSet code={this.props.referralCode}  />
          <Remember />
        </Container>
      </Layout>
      </Provider>
    );
  }
}

export default ThankYou;
