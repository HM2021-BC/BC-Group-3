
const routes = require('next-routes')();

routes
  .add('/artwork/new', '/artwork/new')
  .add('/artwork/all', '/artwork/all')
  .add('/artwork/:address', '/artwork/show')

module.exports = routes;