import React, { Component } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

class MediaFeatures extends Component {
  render (){
    return (
      <Container className="media-feature">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1 className="text-center">As Featured In</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Grid stackable columns={4}>
                <Grid.Row>
                  <Grid.Column>
                  <div className="flex-center">
                    <Image src="http://via.placeholder.com/150x100" />
                  </div>
                  </Grid.Column>
                  <Grid.Column>
                  <div className="flex-center">
                    <Image src="http://via.placeholder.com/150x100" />
                  </div>
                  </Grid.Column>
                  <Grid.Column>
                  <div className="flex-center">
                    <Image src="http://via.placeholder.com/150x100" />
                  </div>
                  </Grid.Column>
                  <Grid.Column>
                  <div className="flex-center">
                    <Image src="http://via.placeholder.com/150x100" />
                  </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
  )}
}

export default MediaFeatures;
