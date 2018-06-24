import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'
import Carousel from 'nuka-carousel';

class BenefitsImgLeft extends Component {
  render (){
    return (
      <Grid.Row>
        <Grid.Column>
          <div className="flex-center">
          <Carousel
          renderCenterRightControls={() => {return}}
          renderCenterLeftControls={() => {return}}
          >
            <img src={this.props.imga} />
            <img src={this.props.imgb} />
          </Carousel>
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
