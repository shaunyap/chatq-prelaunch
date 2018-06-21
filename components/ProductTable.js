import React, {Component} from 'react';
import { Container, Table, Icon } from 'semantic-ui-react';

class ProudctTable extends Component {
  render() {
    return (
      <section className="product-table">
        <Container>
          <h3 className="text-center">Premium versus regular ChatQ access</h3>
          <div className="flex-center">
            <Table basic='very' padded='very'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell><div className="text-center">Premium</div></Table.HeaderCell>
                  <Table.HeaderCell><div className="text-center">Regular</div></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell><div className="text-center">Feature 1</div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Feature 2</div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Feature 3</div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" disabled /></div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Feature 4</div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" disabled /></div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Feature 5</div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" disabled /></div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Feature 6</div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" color="green" /></div></Table.Cell>
                  <Table.Cell><div className="text-center"><Icon name="circle" disabled /></div></Table.Cell>
                </Table.Row>

              </Table.Body>
            </Table>
          </div>
        </Container>
        </section>
    )
  }
}

export default ProudctTable;
