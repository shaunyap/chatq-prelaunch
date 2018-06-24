import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class BetaFeatures extends Component {
  render (){
    return (
      <div>
        <p>Request a beta invite and get:</p>
        <Grid>
          <Grid.Row className="no-padding">
            <Grid.Column width={3}>
              <img src={this.props.img_a} />
            </Grid.Column>
            <Grid.Column width={7}>
            <div className="flex-middle">
              <p>{this.props.copy_a}</p>
            </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="no-padding">
            <Grid.Column width={3}>
              <img src={this.props.img_b} />
            </Grid.Column>
            <Grid.Column width={7}>
            <div className="flex-middle">
              <p>{this.props.copy_b}</p>
            </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="no-padding">
          <Grid.Column width={3}>
              <img src={this.props.img_c} />
            </Grid.Column>
            <Grid.Column width={7}>
            <div className="flex-middle">
              <p>{this.props.copy_c}</p>
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  )}
}

export default BetaFeatures;
