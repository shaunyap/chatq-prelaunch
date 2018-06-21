import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

class BenefitsImgLeft extends Component {
  render (){
    return (
      <Grid.Row>
        <Grid.Column>
          <div className="flex-center">
          <img src={this.props.img} />
          </div>
        </Grid.Column>
        <Grid.Column>
        <div className="flex-middle">
          <div className="text-lr-margin">
              <h5>{this.props.header}</h5>
              <p>{this.props.copy}</p>
            </div>
          </div>
        </Grid.Column>
        </Grid.Row>
  )}
}

export default BenefitsImgLeft;
