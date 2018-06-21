import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class Testimonial extends Component {
  render (){
    return (
      <section className="testimonial section__bmargin">
      <Grid centered columns={3}>
      <Grid.Column>
        <p className="text-center testimonial--copy">"ChatQ&apos;s tournaments feature has really helped me home my trading instrincts"</p>
        <p className="text-center">- Raymond H.</p>
      </Grid.Column>
      </Grid>
      </section>
  )}
}

export default Testimonial;
