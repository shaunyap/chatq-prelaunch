import React, { Component } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import AnnouncementBar from '../components/AnnouncementBar';
import QreditPromo from '../components/QreditPromo';
import BetaInvite from '../components/BetaInvite';
import MediaFeatures from '../components/MediaFeatures';
import { Container, Grid, Form } from 'semantic-ui-react';
import config from '../config';

class Prelaunch extends Component {
  render() {
    return (
      <Layout>
        <Hero config={config}/>
        <AnnouncementBar number="15" text="days until launch!" />
        <MediaFeatures />
        <Benefits />
        <AnnouncementBar number="2,037" text="traders are in the beta!" />
        <QreditPromo />
        <BetaInvite />
      </Layout>
    )
  }
}

export default Prelaunch;
