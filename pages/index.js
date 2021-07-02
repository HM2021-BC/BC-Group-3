import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Marketplace from '../ethereum/marketplace';
import Artwork from '../ethereum/artwork';

class MarketplaceIndex extends Component {
  static async getInitialProps() {
    const marketplaceAddress = await factory.methods.marketplace().call();
    const marketplace = Marketplace(marketplaceAddress);
    const artworkAddresses = await marketplace.methods.getArtworks().call();
    const artworks = artworkAddresses.map(address => Artwork(address));
    
    return { marketplace, artworkAddresses, artworks };
  }

  renderArtworks() {
    const items = this.props.artworkAddresses.map(address => {
      return {
        header: address,
        description: (
          <div>
            <p>{ address }</p>
            <Link href={address}>
            <a>URL</a>
            </Link>
            <br/>
            <Link route={`/artworks/${address}`}>
              <a>View Artwork</a>
            </Link>
          </div>
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

          <Link route="/artworks/new">
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