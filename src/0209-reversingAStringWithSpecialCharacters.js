const theStr = 'a,b$cdef*gh,ijk'

const indexOfLettersAndNonLetters = function(str) {
  return [...str].reduce((indexObj, item, index) =>{
    let code = item.charCodeAt()
    let isALetter =  (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >=122)
    isALetter ? indexObj.letters.push(index)  : indexObj.others.push(index)
    return indexObj  
  }, {letters: [], others: []})
}

const reverseOnlyLetters = function(str) {
  let indexObj = indexOfLettersAndNonLetters(str)

  return [...str].reduce((revOrder, item) =>{
    let code = item.charCodeAt()
    let isALetter =  (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
    isALetter ? revOrder[indexObj.letters.pop()] = item : revOrder[indexObj.others.shift()] = item
    return revOrder
  }, []).join('')
}

console.log(reverseOnlyLetters(theStr))