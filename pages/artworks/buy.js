import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import Marketplace from '../../ethereum/marketplace';
import Artwork from '../../ethereum/artwork';

class ArtworkBuy extends Component {
  static async getInitialProps(props) {
    const artworkName = await Artwork(props.query.address).methods.artworkName().call();
    const artworkPrice = await Artwork(props.query.address).methods.artworkPrice().call();

    return { artworkAddress: props.query.address, artworkName, artworkPrice };
  }

  state = {};

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const artworkPrice = await Artwork(this.props.artworkAddress).methods.artworkPrice().call();

      const accounts = await web3.eth.requestAccounts();

      await Artwork(this.props.artworkAddress).methods.buyArtwork()
      .send({from: accounts[0], value: artworkPrice});

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Buy this Artwork</h3>
        <h4>{this.props.artworkName}</h4>
        <h4>Price: {this.props.artworkPrice}</h4>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Buy!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default ArtworkBuy;