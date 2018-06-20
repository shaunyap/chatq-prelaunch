import React from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react'

export default() => {
  return (
    <section className="benefits">
    <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <div>
          <h2 className="text-center">Why <span className="text-primary">ChatQ?</span></h2>
          <Grid stackable centered columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div className="flex-center">
              <img src="https://gradientjoy.com/350x500" />
              </div>
            </Grid.Column>
            <Grid.Column>
            <div className="flex-middle">
              <div className="text-lr-margin">
                  <h5>Set custom alerts for market movements you care about</h5>
                  <p>Choose from 10 smart, customizable bots. Receive personalized alerts based on market signals</p>
                </div>
              </div>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <div className="flex-middle">
                <div className="text-lr-margin">
                    <h5>Connect with your trading heroes</h5>
                    <p>Use direct chats to reach out to key market influencers and build your tribe</p>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                <img src="https://gradientjoy.com/350x500" />
                </div>
              </Grid.Column>
              </Grid.Row>
          </Grid>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
  </section>


  )
}
