const nums = [8, 9, 8, 6, 4, 3, 2, 1, 9, 1, 8];

const elementsIndex  = function(arr, elem) { 
  return arr.reduce((obj, val, idx) =>{
     if(val === elem) obj[elem] = obj[elem].concat(idx)
     return obj
    },{[elem]: []})
}

const repeatingEntries = function (mainArray) {
  const uniqArray = new Set(mainArray);
  let repeatedElements = []
  if(mainArray.length === uniqArray.length) return 'Array theres no duplicates'

  for(let elem of uniqArray) {
    repeatedElements.push(elementsIndex(mainArray, elem))
  }
  return repeatedElements
}


console.log(repeatingEntries(nums))
