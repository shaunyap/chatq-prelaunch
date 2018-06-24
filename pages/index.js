import React, { Component } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import AnnouncementBar from '../components/AnnouncementBar';
import QreditPromo from '../components/QreditPromo';
import BetaInvite from '../components/BetaInvite';
import FooterForm from '../components/FooterForm';
import Explainer from '../components/Explainer';
import Testimonial from '../components/Testimonial';
import Referral from '../components/Referral';
import ProductTable from '../components/ProductTable';
import Remember from '../components/Remember';
import { Container, Grid } from 'semantic-ui-react';
import config from '../config';

class Prelaunch extends Component {
  render() {
    return (
      <Layout>
        <Hero/>
        <AnnouncementBar number="2,037" text="traders are on the beta waitlist!" />
        <Explainer />
        <Testimonial />
        <Benefits />
        <Referral />
        <ProductTable />
        <FooterForm config={config}/>
        <Remember />
      </Layout>
    )
  }
}

export default Prelaunch;
