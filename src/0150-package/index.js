
let argv = require('yargs').argv;

const capitlalize = function(name) {
  return name[0].toUpperCase() + name.slice(1).toLocaleLowerCase()
}
