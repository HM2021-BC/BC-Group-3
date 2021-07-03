import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
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
    const artworkProps = [];
    for (const artworkAddress of artworkAddresses) {
      const artworkName = await Artwork(artworkAddress).methods.artworkName().call();
      const artworkUrl = await Artwork(artworkAddress).methods.artworkUrl().call();
      const artworkHash = await Artwork(artworkAddress).methods.artworkHash().call();
      const artworkPrice = await Artwork(artworkAddress).methods.artworkPrice().call();
      const isArtworkForSale = await Artwork(artworkAddress).methods.isArtworkForSale().call();
      const owner = await Artwork(artworkAddress).methods.owner().call();
      artworkProps.push({
        artworkName,
        artworkUrl,
        artworkHash,
        artworkPrice,
        isArtworkForSale,
        owner
      });
    }

    return { marketplace, artworkAddresses, artworkProps };
  }

  renderArtworks() {
    const items = this.props.artworkAddresses.map((address, index) => {
      let metadata;
      let cardColor;
      let extraContent;
      if (this.props.artworkProps[index].isArtworkForSale) {
        metadata = "Price: " + this.props.artworkProps[index].artworkPrice;
        cardColor = "green";
        extraContent = (
          <div className='ui two buttons'>
            <Link route={`/artworks/${address}/buy`}>
              <a>
                <Button animated='vertical'>
                  <Button.Content hidden>Buy Artwork</Button.Content>
                  <Button.Content visible>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
              </a>
            </Link>
          </div>
        );
      } else {
        metadata = "Not for Sale";
        cardColor = "red";
        extraContent = (
          <div className='ui two buttons'>
            <Link route={`/artworks/${address}/sell`}>
              <a>
                <Button animated='vertical'>
                  <Button.Content hidden>Sell Artwork</Button.Content>
                  <Button.Content visible>
                    <Icon name='money' />
                  </Button.Content>
                </Button>
              </a>
            </Link>
          </div>
        );
      }

      return {
        header: this.props.artworkProps[index].artworkName,
        description: (
          <div>
            <br />
            <div>
              <b>
                Owner Address: {this.props.artworkProps[index].owner}
              </b>
            </div>
            <div>Artwork Address: {address}</div>
            <div>Artwork Hash: {this.props.artworkProps[index].artworkHash}</div>
            <div>
              <a href={this.props.artworkProps[index].artworkUrl}
                target="_blank"
                rel="noopener noreferrer">
                Artwork URL
              </a>
            </div>
          </div>
        ),
        meta: metadata,
        color: cardColor,
        extra: extraContent,
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
          {this.renderArtworks()}
        </div>
      </Layout>
    );
  }
}

export default MarketplaceIndex;