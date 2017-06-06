
module.exports = exports = function () {
  var configFile = require('./config.json')
  // var modal = require('./imageProcessor.js')
  var node_env = process.env.NODE_ENV || 'production'
  var config = configFile[node_env]
  config.env = node_env
  return config
}
