import React, {Component} from 'react';
import { Container, Grid, Card, Icon, Label } from 'semantic-ui-react';
import days from '../functions/days';
import BetaFeatures from '../components/BetaFeatures';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"

class TYHeroGrid extends Component {
  state = {
    referralURL: `https://www.chatq.sg/?referralCode=${this.props.code}`,
    copied: false,
    copyContent: 'Copy'
  }
  render() {
    this.props.getReferralCount(this.props.code);

    return (
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <h2 className="text-primary bold">Congrats!</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={16} computer={8}>
          <h4>You&apos;re on the ChatQ beta waitlist.</h4>
            <p>Launching in {days} days. For Apple iOS only.</p>
            <BetaFeatures
              header="Beta user perks:"
              img_a="../static/img/chaQ-lp-V2-02.png"
              img_b="../static/img/chaQ-lp-V2-03.png"
              img_c="../static/img/chaQ-lp-V2-04.png"
              copy_a="1 free month of permium access to the ChatQ app"
              copy_b="A First in the Q profile badge to show you're an early supporter"
              copy_c="1 more free month for every successful referral"
            />
        </Grid.Column>
        <Grid.Column mobile={16} computer={8}>
          <Card className="card--elevate3">
            <Card.Content>
              <p className="text-center">Free months earned:</p>
              <h2 className="text-center text-primary bold">{this.props.freeMonths}</h2>
              <p className="text-center">Get 1 more free month for each friend you refer.</p>
              <div className="flex-center social-labels">
                <Label as='a' id="cardset--facebook-label">
                  <Icon name='facebook' />
                  Share
                </Label>
                <Label as='a' id="cardset--twitter-label">
                  <Icon name='twitter' />
                  Tweet
                </Label>
                <Label as='a' id="cardset--messenger-label">
                  <Icon name='facebook messenger' />
                  Messenger
                </Label>
                <Label as='a'>
                  <Icon name='mail' />
                  Email
                </Label>
              </div>
              <div className="referralLinkContainer">
                <p className="text-center">Share your unique link:</p>
                <div className="flex-center bmargin">
                  <p className="bold">{this.state.referralURL}</p>
                </div>
                <div className="flex-center">
                <CopyToClipboard text={this.state.referralURL}
                  onCopy={() => this.setState({copied: true})}>
                  <Label as ='a' color='orange'>
                    <Icon name='copy' />
                    <Label.Detail className="text-center">
                      {this.state.copied ? 'Copied!' : 'Copy'}
                    </Label.Detail>
                  </Label>
                </CopyToClipboard>
                </div>
              </div>
            </Card.Content>
          </Card>
          <div className="flex-center">
            <div className="testimonialContainer">
              <p className="text-center">"My trading friends and I have migrated from our WhatsApp group to ChatQ."</p>
              <p className="text-center">- Amy S.</p>
            </div>
          </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(TYHeroGrid);
