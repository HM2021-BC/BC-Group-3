const routes = require('next-routes')();

routes 
    //.add('/artwork/new', '/artwork/new')
    .add('/marketplace/:address', '/marketplace/all');

module.exports = routes;