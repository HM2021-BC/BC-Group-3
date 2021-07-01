import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import web3 from './ethereum/web3';
import factory from './ethereum/factory';
import Layout from './components/Layout';
import web3 from './web3';
import { Link } from './routes';
import Marketplace from './build/contracts/Marketplace.json';

class MarketplaceIndex extends Component {
  static async getInitialProps() {
    const marketplaceAddress = await factory.methods.marketplace().call();

    const marketplace = new web3.eth.Contract(Marketplace.abi, marketplaceAddress);

    var artworks = await marketplace.methods.ownables().call();

    return { artworks };
  }

  renderMarketplaces() {
    const items = this.props.artworks.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/marketplaces/${address}`}>
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

          <Link route="/marketplaces/new">
            <a>
              <Button
                floated="right"
                content="Create Marketplace"
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