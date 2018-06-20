import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class BetaFeatures extends Component {
  render (){
    return (
      <div>
        <p>Join our beta waitlist. 1,000 users only. <br /> Apple iOS only.</p>
        <p className="bold">Request a beta invite and get:</p>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <img src="https://gradientjoy.com/60x60" />
            </Grid.Column>
            <Grid.Column width={9}>
            <div className="flex-middle">
              <p>1 free month of premium access to the ChatQ app</p>
            </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <img src="https://gradientjoy.com/60x60" />
            </Grid.Column>
            <Grid.Column width={9}>
            <div className="flex-middle">
              <p>First In The Q Profile Badge</p>
            </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <img src="https://gradientjoy.com/60x60" />
            </Grid.Column>
            <Grid.Column width={9}>
            <div className="flex-middle">
              <p>1 more free month for every successful referral</p>
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  )}
}

export default BetaFeatures;
