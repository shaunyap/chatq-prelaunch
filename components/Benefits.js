import React, {Component} from 'react';
import { Grid, Container } from 'semantic-ui-react';
import BenefitsImgLeft from './BenefitsImgLeft';
import BenefitsImgRight from './BenefitsImgRight';

class Benefits extends Component {
  render() {
  return (
    <section className="benefits">
    <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <div>
          <h2 className="text-center">Why <span className="text-primary">ChatQ?</span></h2>
          <Grid stackable centered columns={3}>
          <BenefitsImgLeft
            imga="../static/img/benefits/1customAlerts_01.png"
            imgb="../static/img/benefits/1customAlerts_02.png"
            header="Set custom alerts for market movements you care about"
            copy="Choose from 10 smart, customizable bots. Receive personalized alerts based on market signals."
          />
          <BenefitsImgRight
            imga="../static/img/benefits/2connect_01.png"
            imgb="../static/img/benefits/2connect_02.png"
            header="Connect with your trading heroes"
            copy="Use direct chats to reach out to key market influencers and build your tribe."
          />
          <BenefitsImgLeft
            imga="../static/img/benefits/3rewarded_01.png"
            imgb="../static/img/benefits/3rewarded_02.png"
            header="Share your opinions and get rewarded"
            copy="Voice your sentiment through polling. Receive Qredits for your expertise, and use them to unlock features in the app."
          />
          </Grid>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
  </section>
  )}
}

export default Benefits;
