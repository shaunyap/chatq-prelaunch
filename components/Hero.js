import React, { Component } from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';
import BetaForm from './BetaForm';
import HeroGrid from './HeroGrid';
import BetaFeatures from './BetaFeatures';
import AnnouncementBar from './AnnouncementBar';

class Hero extends Component {
  render (){
    return (
    <section className="hero">
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column>
            <h1 className="text-center no-margin">The <span className="text-primary">social chat</span> app for retail investors</h1>
            <h4 className="text-center text-copy">Powered by smart bots and market sentiment</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <HeroGrid/>
    </section>
  )}
}

export default Hero;
