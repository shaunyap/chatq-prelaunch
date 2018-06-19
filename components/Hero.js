import React, { Component } from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';
import BetaForm from './BetaForm';
import AnnouncementBar from './AnnouncementBar';

class Hero extends Component {
  render (){
    return (
  <Container className="hero">
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <h1 className="text-center">The social chat app for retail investors</h1>
          <h3 className="text-center">Powered by smart bots and market sentiment.</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={16} computer={8}>
          <h2>Be The First In The Q!</h2>
          <h3>Join our beta waitlist. 1,000 users only.</h3>
          <p>Request a beta invite and get:</p>
          <ul>
            <li>1 free month of premium access to the ChatQ app</li>
            <li>First In The Q Profile Badge</li>
            <li>1 more free month for every successful referral</li>
          </ul>
        </Grid.Column>
        <Grid.Column mobile={16} computer={8}>
          <Card>
            <Card.Content>
            <h2 className="text-center">Request an invite now</h2>
            <BetaForm config={this.props.config}/>
            <h3 className="text-center">15 days to launch!</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
  )}
}

export default Hero;
