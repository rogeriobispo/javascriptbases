'use strict'

let formatName = function(name) {
  return name.replace(/(\w+), (\w+)/, '$2, $1')
}

let firstName = function(name) {
  return name.match(/(?:, )(\w+)/)[1]
}


module.exports = {
  formatName,
  firstName
}
