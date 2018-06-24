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
            imga="https://gradientjoy.com/350x500"
            imgb="https://gradientjoy.com/350x500"
            header="Set custom alerts for market movements you care about"
            copy="Choose from 10 smart, customizable bots. Receive personalized alerts based on market signals."
          />
          <BenefitsImgRight
          imga="https://gradientjoy.com/350x500"
          imgb="https://gradientjoy.com/350x500"
            header="Connect with your trading heroes"
            copy="Use direct chats to reach out to key market influencers and build your tribe."
          />
          <BenefitsImgLeft
            imga="https://gradientjoy.com/350x500"
            imgb="https://gradientjoy.com/350x500"
            header="Inspiration and research for your trades"
            copy="Aggregated market sentiment at the swipe of a finger."
          />
          <BenefitsImgRight
            imga="https://gradientjoy.com/350x500"
            imgb="https://gradientjoy.com/350x500"
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
