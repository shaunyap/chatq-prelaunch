import React, { Component } from 'react';
import { Form, Container, Card } from 'semantic-ui-react';
import BetaForm from '../components/BetaForm2';

class FooterForm extends Component {
  render (){
    return (
      <section className="section__bmargin">
      <Container>
      <Card className="card--elevate3">
        <Card.Content>
          <h4 className="text-center">Get your beta invite now!</h4>
          <BetaForm config={this.props.config}/>
        </Card.Content>
      </Card>
      </Container>
      </section>
  )}
}

export default FooterForm;
