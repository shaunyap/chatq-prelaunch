import React, { Component } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import AnnouncementBar from '../components/AnnouncementBar';
import QreditPromo from '../components/QreditPromo';
import BetaInvite from '../components/BetaInvite';
import Explainer from '../components/Explainer';
import Testimonial from '../components/Testimonial';
import { Container, Grid, Form } from 'semantic-ui-react';
import config from '../config';

class Prelaunch extends Component {
  render() {
    return (
      <Layout>
        <Hero config={config}/>
        <AnnouncementBar number="2,037" text="traders are on the beta waitlist!" />
        <Explainer />
        <Testimonial />
        <Benefits />
      </Layout>
    )
  }
}

export default Prelaunch;
