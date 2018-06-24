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
                  <Table.HeaderCell><div className="text-center">Regular</div></Table.HeaderCell>
                  <Table.HeaderCell><div className="text-center">Premium</div></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell><div className="text-center">Access to bots</div></Table.Cell>
                  <Table.Cell><div className="text-center">All</div></Table.Cell>
                  <Table.Cell><div className="text-center">All</div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Access to channels</div></Table.Cell>
                  <Table.Cell><div className="text-center">All</div></Table.Cell>
                  <Table.Cell><div className="text-center">All</div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Access to instruments</div></Table.Cell>
                  <Table.Cell><div className="text-center">All</div></Table.Cell>
                  <Table.Cell><div className="text-center">All</div></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Market data</div></Table.Cell>
                  <Table.Cell><div className="text-center">Default</div></Table.Cell>
                  <Table.Cell>
                    <div className="text-center">
                      <span className="bold">Advanced parameters:</span><br />
                      Alerts frequency<br />
                      Cross-platform notifications<br />
                      Price and percentage settings
                    </div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Filter customization</div></Table.Cell>
                  <Table.Cell><div className="text-center">Default</div></Table.Cell>
                  <Table.Cell><div className="text-center">
                    <span className="bold">Advanced filter options:</span><br />
                    Preferred channels and instruments
                    </div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell><div className="text-center">Bots customization</div></Table.Cell>
                  <Table.Cell><div className="text-center">Delayed 20 mins</div></Table.Cell>
                  <Table.Cell><div className="text-center">Real-time</div></Table.Cell>
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
