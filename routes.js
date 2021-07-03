
const routes = require('next-routes')();

routes
  .add('/artworks/new', '/artworks/new')
  .add('/artworks/:address/sell', '/artworks/sell')
  .add('/artworks/:address/buy', '/artworks/buy')

module.exports = routes;