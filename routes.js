
const routes = require('next-routes')();

routes
  .add('/marketplaces/new', '/marketplaces/new')
  .add('/marketplaces/:address', '/marketplaces/show')

module.exports = routes;