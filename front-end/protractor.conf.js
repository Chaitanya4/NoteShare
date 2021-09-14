
require('./env');

var E2E_DIR = '../okta-oidc-tck/e2e-tests/okta-hosted-login/';
var config = require(E2E_DIR + 'conf.js').config;
config.specs = config.specs.map(function (path) {
  return E2E_DIR + path;
});

['CLIENT_ID', 'ISSUER', 'USERNAME', 'PASSWORD'].forEach(function(key) {
  console.log('ENVIRONMENT VAR "' + key + '"', process.env[key]); // TODO: REMOVEME
  if (!process.env[key]) {
    throw new Error('Environment variable "' + key + '" is not set');
  }
});

exports.config = config;
