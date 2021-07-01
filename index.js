import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from './ethereum/factory';
import Layout from './components/Layout';
import { Link } from './routes';
import { render } from 'react-dom';

class MarketplaceIndex extends Component {
    static async getInitialProps() {
        const marketplaces = await factory.methods.getDeployedMarketplaces().call();

        return { marketplaces };
    }

renderMarketplaces() {
    const items = this.props.marketplaces.map(address => {
      console.log(address);
      return {
          header: address, 
          description: (
              <Link route={`/marketplace/${address}`}>
                  <a>View Marketplace</a>
              </Link>
          ),
          fluid: true
        };
    });
    return <Card.Group items={items} />;
}

render() {
    return (
      <Layout>
        <div>
          <h3>Open Marketplaces</h3>

          <Link route="/artwork/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderMarketplaces()}
        </div>
      </Layout>
    );
  }
}

export default MarketplaceIndex;