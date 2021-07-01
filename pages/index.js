import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class MarketplaceIndex extends Component {
  static async getInitialProps() {
    const marketplaces = await factory.methods.getDeployedMarketplaces().call();
    const counter = marketplaces.length;
    //const marketplace = await factory.methods.getDeployedMarketplace().call();
    //const artworks = await marketplace.methods.artworks().call();

    //const marketplace = Marketplace(address);
    
    return { marketplaces, counter };
  }

  renderArtworks() {
    const items = this.props.marketplaces.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/marketplaces/${address}`}>
            <a>View Artwork</a>
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
          <h3>Registered Artworks</h3>
          <h1>Hello, {this.props.counter}</h1>

          <Link route="/marketplaces/new">
            <a>
              <Button
                floated="right"
                content="Register Artwork"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderArtworks()}
        </div>
      </Layout>
    );
  }
}

export default MarketplaceIndex;