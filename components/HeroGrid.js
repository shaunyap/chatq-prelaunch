import React, { Component } from 'react';
import { Grid, Container, Card } from 'semantic-ui-react';
import BetaFeatures from './BetaFeatures';
import BetaForm from './BetaForm';
import days from '../functions/days';
import config from '../config'

class HeroGrid extends Component {
  render (){
    return (
      <section className="hero--grid">
      <Container>
          <Grid>
          <Grid.Row>
          <Grid.Column mobile={16} computer={8}>
            <div className="flex-middle">
              <div>
                <h2>Be The First In The Q</h2>
                <BetaFeatures
                  header="Request a beta invite and get"
                  img_a="./static/img/chaQ-lp-V2-02.png"
                  img_b="./static/img/chaQ-lp-V2-03.png"
                  img_c="./static/img/chaQ-lp-V2-04.png"
                  copy_a="1 free month of premium access to the ChatQ app"
                  copy_b="First In The Q Profile Badge"
                  copy_c="1 more free month for every successful referral"
                />
              </div>
            </div>
            </Grid.Column>

            <Grid.Column mobile={16} computer={6}>
              <Card className="card--elevate3">
                <Card.Content>
                  <h4 className="text-center no-margin">Join our beta waitlist</h4>
                  <p className="text-center">1,000 users, Apple iOS only</p>
                  <BetaForm config={config} referrerCode={this.props.referrerCode}/>
                  <h5 id="countdown" className="text-center">{days} days until launch!</h5>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </section>

  )}
}

export default HeroGrid;
