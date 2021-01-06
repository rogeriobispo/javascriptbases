'use strict'
const argv = require('yargs').argv

let nome argv.nome;

console.log(argv)
const simple = function() {
  if(nome) {
    console.log(`Hi ${nome}`)
  } else {
    console.log('Hi!')
  }
}


const formal = function() {
  if(nome) {
    console.log(`Hello ${nome} and welcome!`)
  } else {
    console.log('Hello and welcome.');
  }
}
