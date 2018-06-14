import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import BetaForm from '../components/BetaForm';

class BetaInvite extends Component {
  render (){
    return (
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <div className="beta-invite">
            <h2>Get your beta invite now!</h2>
            <BetaForm />
          </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )}
}

export default BetaInvite;
