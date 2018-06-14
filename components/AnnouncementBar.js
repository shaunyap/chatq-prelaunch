import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class AnnouncementBar extends Component {
  render (){
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <div className="announcement-bar">
              <p className="text-center"><span>{this.props.number}</span> {this.props.text}</p>
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
  )}
}

export default AnnouncementBar;
