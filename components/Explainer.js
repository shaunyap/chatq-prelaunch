import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class Explainer extends Component {
  render (){
    return (
      <section className="explainer">
        <Grid centered columns={3}>
            <Grid.Column>
              <div className="flex-middle text-center">
                <h4>Watch how ChatQ makes trading simpler</h4>
              </div>
            </Grid.Column>
            <Grid.Column>
              <iframe width="640" height="365" src="https://www.youtube.com/embed/20XE6GM7xWo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Grid.Column>
        </Grid>
      </section>
  )}
}

export default Explainer;
