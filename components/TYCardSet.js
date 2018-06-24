import React, {Component} from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';
import ReferralCell from './ReferralCell';

class TYReferral extends Component {
  render() {
    return (
      <section className="referral">
        <Grid centered columns={2}>
          <Grid.Column className="mobile__fullWidth">
            <h4 className="text-center">Total referrals and free months earned</h4>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid className="referral--grid" centered columns={4}>
          <Grid.Column>
            <Card>
               <Card.Content>
                 <Card.Header className="text-center">Friends Referred:</Card.Header>
                 <h1 className="text-center text-primary bold">3</h1>
                 <Card.Meta className="text-center">out of 5 max</Card.Meta>
               </Card.Content>
             </Card>
           </Grid.Column>
           <Grid.Column>
             <Card>
                <Card.Content>
                  <Card.Header className="text-center">Total Free Months:</Card.Header>
                  <h1 className="text-center text-primary bold">4</h1>
                  <Card.Meta className="text-center">&nbsp;</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                 <Card.Content>
                   <Card.Header className="text-center">First in the Q badge</Card.Header>
                   <div className="flex-center card-img">
                    <img src="../static/img/chaQ-lp-V2-03.png" />
                  </div>
                   <Card.Meta className="text-center">&nbsp;</Card.Meta>
                 </Card.Content>
               </Card>
             </Grid.Column>
          </Grid>
        </Container>
      </section>
    )
  }
}

export default TYReferral;
