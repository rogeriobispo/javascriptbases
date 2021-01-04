'use strict'
import Emmiter from 'events'

var emt = new Emmiter();
emt.on('newUser', function () {
  console.log('Set up user')
})

emt.on('newUser', function () {
  console.log('Activating user')
})

emt.addListener('newUser', function () {
  console.log('notify user.')
})

const addNewUser = function() {
  emt.emit('newUser');
}


addNewUser()
