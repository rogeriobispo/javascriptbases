const wordCheck = ['test', 'jump', 'run'];
const wordList = ['jump', 'test','run', 'fun', 'test', 'run', 'space', 'moon', 'test']

const countWords = function(words, compare) {
  let finalCount = words.map(function(word) {
    return compare.reduce((acc, val) => {
    if(word.toLowerCase() === val.toLowerCase()){
      acc[word]++ 
      return acc
    }  
    }, {[word]: 0})
  });


  return finalCount
}

console.log(countWords(wordCheck, wordList))
