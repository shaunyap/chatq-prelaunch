import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Layout from "../../components/Layout";
import {Container, Grid, Card, Input} from 'semantic-ui-react';
import TYHeroGrid from '../../components/TYHeroGrid';
import TYReferral from '../../components/TYReferral';
import TYCardSet from '../../components/TYCardSet';
import Remember from '../../components/Remember';
import { Link, Router } from '../../routes';
import config from '../../config';
import axios from 'axios';

class ThankYou extends Component {
  render() {
    const code = this.props.url.query.referralCode;
    return (
      <Layout>
        <Container>
          <TYHeroGrid code={code}/>
          <TYReferral />
          <TYCardSet />
          <Remember />
        </Container>
      </Layout>
    );
  }
}

export default ThankYou;
