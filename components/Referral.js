import React, {Component} from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ReferralCell from './ReferralCell';

class Referral extends Component {
  render() {
    return (
      <section className="referral">
        <Grid centered columns={3}>
          <Grid.Column className="mobile__fullWidth">
            <h3 className="text-center">Extend your free premium access with our referral program</h3>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid className="referral--grid" centered columns={4}>
            <ReferralCell img="https://gradientjoy.com/100x100" header="Request beta invite" copy="Get 1 month free premium access" />
            <ReferralCell img="https://gradientjoy.com/100x100" header="Get a referral Link" copy="" />
            <ReferralCell img="https://gradientjoy.com/100x100" header="Start referring" copy="Get 1 month for each referral" />
            <ReferralCell img="https://gradientjoy.com/100x100" header="Explore ChatQ" copy="at launch" />
          </Grid>
        </Container>
      </section>
    )
  }
}

export default Referral;
