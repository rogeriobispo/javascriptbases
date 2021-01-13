'use strict'
const getPrivateObj = function(){
  let privateObj = {
    scretNum: 3141,
    passPhrase: 'monkey jump core life time  east dawn bird ramp couse crate give'
  }
  return function(){
    return {...privateObj}
  }
}()
