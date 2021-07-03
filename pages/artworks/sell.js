import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import Artwork from '../../ethereum/artwork';

class ArtworkSell extends Component {
  static async getInitialProps(props) {
    const artworkName = await Artwork(props.query.address).methods.artworkName().call();

    return { artworkAddress: props.query.address, artworkName };
  }

  state = {
    artworkPrice: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.requestAccounts();

      await Artwork(this.props.artworkAddress).methods.sellArtwork(web3.utils.toWei(this.state.artworkPrice, 'ether'))
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
        <h3>Sell this Artwork</h3>
        <h4>{this.props.artworkName}</h4>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Selling Price in Ether</label>
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