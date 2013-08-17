var Adapter = require('makomi-adapter')
var util = require('util')

module.exports = PostgresAdapter
util.inherits(PostgresAdapter,Adapter)

function PostgresAdapter() {}
PostgresAdapter.prototype.connect = function() {
  // TODO: actually connect, probably need some parameters
}