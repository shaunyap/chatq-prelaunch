const routes = require('next-routes')();

routes
.add('/ThankYou/:referralCode', '/ThankYou')

module.exports = routes;
