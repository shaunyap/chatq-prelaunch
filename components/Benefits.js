import React from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react'

export default() => {
  return (
    <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <div>
          <h1>Why ChatQ?</h1>

          <Grid stackable columns={4}>
          <Grid.Row>
            <Grid.Column>
              <div className="flex-center">
                <Image src="/static/icon_code_2.svg" />
              </div>
              <h5 className="text-center">Find inspiration for trades with our expert opinions and analyses</h5>
            </Grid.Column>

            <Grid.Column>
              <div className="flex-center">
                <Image src="/static/icon_code_2.svg" />
              </div>
              <h5 className="text-center">Harness the community&apos;s intelligence with aggregated market sentiment</h5>
            </Grid.Column>

            <Grid.Column>
              <div className="flex-center">
                <Image src="/static/icon_code_2.svg" />
              </div>
              <h5 className="text-center">Boost your investing skills with tools like bots and tournaments</h5>
            </Grid.Column>

            <Grid.Column>
              <div className="flex-center">
                <Image src="/static/icon_code_2.svg" />
              </div>
              <h5 className="text-center">Get linked to your prefered broker when you&apos;re ready to take action</h5>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>


  )
}
