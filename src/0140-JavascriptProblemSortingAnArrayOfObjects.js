let arr = [
  {
    firstName: 'Steven',
    lastName: 'Hancock',
    score: 90
  },
  {
    firstName: 'Lynette',
    lastName: 'Jorgensen',
    score: 100
  },
  {
    firstName: 'Andrew',
    lastName: 'Wilson',
    score: 71
  },
  {
    firstName: 'Annika',
    lastName: 'Turner',
    score: 82
  }
];

let sortedArr = arr.sort(function(a, b){
 let AlastName = a.lastName.toLowerCase();
 let BlastName = b.lastName.toLowerCase();

  if(AlastName < BlastName) { 
    return -1
  } else if(AlastName > BlastName) {
    return 1
  } else {
    return 0
  } 
})


let scoreSort = arr.sort(function(a, b){
  let AScore = a.score
  let BScore = b.score
  return AScore - BScore;
})
console.log(scoreSort)
