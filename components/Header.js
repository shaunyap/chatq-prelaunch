import React from 'react';
import { Container, Menu, Image, Button } from 'semantic-ui-react';

export default() => {
  return (
    <Container>
    <Menu secondary>
        <Menu.Item>
          <Image src='http://www.chatq.sg/static/assets/images/chatq-logo-desktop.be8da9905007.svg' size='small' wrapped />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
          <Button content='Request Invite!' color='orange' />
          </Menu.Item>
        </Menu.Menu>
    </Menu>
    </Container>
  )
}
