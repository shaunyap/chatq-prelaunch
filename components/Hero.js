import React, { Component } from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';
import BetaForm from './BetaForm';
import BetaFeatures from './BetaFeatures';
import AnnouncementBar from './AnnouncementBar';

class Hero extends Component {
  render (){
    return (
    <section className="hero">
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column>
            <h1 className="text-center">The <span className="text-primary">social chat</span> app for retail investors</h1>
            <h4 className="text-center">Powered by smart bots and market sentiment</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <section className="hero--grid">
      <Container>
          <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2>Be The First In The Q</h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <BetaFeatures />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Card className="card--elevate3">
                <Card.Content>
                  <h4 className="text-center">Request an invite now</h4>
                  <BetaForm config={this.props.config}/>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </section>
    </section>
  )}
}

export default Hero;
