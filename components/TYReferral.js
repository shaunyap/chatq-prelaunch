import React, {Component} from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ReferralCell from './ReferralCell';

class TYReferral extends Component {
  render() {
    return (
      <section className="referral">
        <Grid centered columns={2}>
          <Grid.Column className="mobile__fullWidth">
            <h4 className="text-center">Refer ChatQ to a friend who is..</h4>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid className="referral--grid" centered columns={3}>
            <ReferralCell className="ty--referralCell__img" img="./static/img/referAFriend-01.png" header="" copy="Interested in investing but doesn't know how to start" />
            <ReferralCell className="ty--referralCell__img" img="./static/img/referAFriend-02.png" header="" copy="A casual investor who wants to improve their trades" />
            <ReferralCell className="ty--referralCell__img" img="./static/img/referAFriend-03.png" header="" copy="A trader who benefits from aggregated market sentiment" />
          </Grid>
        </Container>
      </section>
    )
  }
}

export default TYReferral;
