const wordCheck = ['test', 'jump', 'run'];
const wordlist = [
  'test',
  'jump',
  'run',
  'fun',
  'test',
  'run',
  'space',
  'moon',
  'test',
];

const countWords = function (words, compare) {
  return words.map(word => {
    return compare.reduce(
      (acc, val) => {
        if (word.toLowerCase() === val.toLowerCase()) {
          acc[word] = (acc[word])++;
          return acc;
        }
      },
      { [word]: 0 },
    );
  });
};

console.log(countWords(wordCheck, wordlist));
