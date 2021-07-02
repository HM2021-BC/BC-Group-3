
const routes = require('next-routes')();

routes
  .add('/artworks/new', '/artworks/new')
  .add('/artworks/:address', '/artworks/show')

module.exports = routes;