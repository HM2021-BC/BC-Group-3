const routes = require('next-routes')();

routes 
    //.add('/artwork/new', '/artwork/new')
    .add('/marketplaces/:address', '/marketplace/show');

module.exports = routes;