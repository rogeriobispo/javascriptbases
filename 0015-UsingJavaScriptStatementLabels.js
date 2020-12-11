// indentifier: statement <- label statmente
// label statements provides a nem for a statement, you can then refer to later using
// break or continue

var scores = [];
scores[0] = 9;
scores[4] = 10;
scores[9] = 5;
scores[7] = 6;
scores[1] = 10;
scores[2] = 5;
scores[3] = 6;
scores[5] = 10;
scores[6] = 5;
scores[8] = 6;

var total = 0;
    allResponses = false;
compute_total: if(scores.length > 0) {
  for(let i = 0; i < scores.length; i++) {
    if(isNaN(scores[i])){
      break compute_total;
    }else{
      total = total + scores[i];
    }
  }
  allResponses = true;
}

if(allResponses)
  console.log('Your combined total is: ' + total)
else
  console.log('Your still need to finish some items')
