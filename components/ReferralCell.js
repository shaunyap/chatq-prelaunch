import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

class ReferralCell extends Component {
  render() {
    return (
        <Grid.Column className="mobile__fullWidth">
          <div className="flex-center">
            <img src={this.props.img} />
          </div>
            <p className="text-center referral--grid--copy">
              <span className="bold">{this.props.header}</span>
              {this.props.header? <br />: '' }
              {this.props.copy}
            </p>
        </Grid.Column>
    )
  }
}

export default ReferralCell;
