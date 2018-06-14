import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import BetaForm from './BetaForm';

class Hero extends Component {
  render (){
    return (
  <Container className="hero">
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} computer={10}>
          <h1>Be The First In The Q!</h1>
          <h3>ChatQ is opening its beta to its first 10,000 users.</h3>
          <p>Request a beta invite and get:</p>
          <ul>
            <li>1000 Qredits to use in the app</li>
            <li>First In The Q Profile Badge</li>
            <li>1000 more Qredits for every successful friend referral.</li>
          </ul>
          <BetaForm api={this.props.api}/>
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
  )}
}

export default Hero;
