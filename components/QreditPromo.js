import React, { Component } from 'react';
import { Image, Grid, Container } from 'semantic-ui-react';

class QreditPromo extends Component {
  render (){
    return (
      <Container>
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <div className="qredit-promo">
            <h3>Get <span className="bold">500</span> Qredits with your beta invite</h3>
            <h3> and 1000 more with every friend you refer!</h3>
            <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image src="http://via.placeholder.com/450x350" />
              </Grid.Column>
              <Grid.Column>
              <h3>What are Qredits?</h3>
                <ul>
                  <li>Users gain Qredits for their activity on the ChatQ platform</li>
                  <li>Qredits give access to premium features like entry into closed groups and expert discussions</li>
                  <li>Start earning Qredits even before the launch with First in the Q, our exclusive referral program for traders in beta.</li>
                </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
  )}
}

export default QreditPromo;
