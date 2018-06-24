import React, {Component} from 'react';
import { Container, Grid } from 'semantic-ui-react';

class Remember extends Component {
  render() {
    return (
      <section className="remember section__bmargin">
        <Grid centered columns={3}>
          <Grid.Column className="mobile__fullWidth">
            <h3 className="text-center">Remember that</h3>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid padded='vertically' centered columns={3}>
          <Grid.Column>
          <Grid>
              <Grid.Column width={2}>
                <h2>1</h2>
              </Grid.Column>
              <Grid.Column width={14}>
                <p>You can get up to 6 months of free premium access on ChatQ when you successfully refer a maximum of 5 friends.</p>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column>
          <Grid>
              <Grid.Column width={2}>
                <h2>2</h2>
              </Grid.Column>
              <Grid.Column width={14}>
                <p>Beta users are capped at 1000! So download the app as soon as it launches. Didn&apos;t make the first 1000? We&apos;ll notify you when the full version is out</p>
                </Grid.Column>
              </Grid>
          </Grid.Column>
          <Grid.Column>
            <Grid>
              <Grid.Column width={2}>
                <h2>3</h2>
              </Grid.Column>
              <Grid.Column width={14}>
              <p>Android users can sign up here for updates on ChatQ&apos;s Android OS launch. Our current release goal is 4Q2018.</p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          </Grid>

          <p><a href="#">See full terms and conditions.</a></p>

        </Container>
      </section>
    )
  }
}

export default Remember;
