'use strict'

let formatName = function(name) {
  return name.replace(/(\w+), (\w+)/, '$2, $1')
}

module.exports = formatName
