
function rangeNumber(start, end) {
  const range = [start]
  const setRange = (function setRange() {
    if(range[range.length - 1] >= end) {
      return;
    } else {
      const newNumber = range[range.length -1] + 1;  
      range.push(newNumber)
      setRange()
    }
  })();
  return range
}

const sum = function sum(range) {
  return range.reduce((acc, current) => acc + current)
};

const range = rangeNumber(1, 10)
console.log(sum(range))
