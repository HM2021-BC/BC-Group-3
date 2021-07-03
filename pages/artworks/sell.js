import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import Marketplace from '../../ethereum/marketplace';
import Artwork from '../../ethereum/artwork';

class ArtworkSell extends Component {
  static async getInitialProps(props) {
    return { artworkAddress: props.query.address };
  }

  state = {
    artworkPrice: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.requestAccounts();

      await Artwork(this.props.artworkAddress).methods.sellArtwork(this.state.artworkPrice)
      .send({from: accounts[0]});

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Sell a Artwork</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Selling Price</label>
            <Input
              label="Price"
              labelPosition="right"
              value={this.state.artworkPrice}
              onChange={event =>
                this.setState({ artworkPrice: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Offer for Sale!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default ArtworkSell;