import fs from 'fs';

let obj = {
  firstName: 'Rogerio',
  lastName: 'Santos',
  score: 100
};

let jsonData = JSON.stringify(obj);
fs.writeFile('./jsonData.json', jsonData, function(err) {
  console.log(err);
})
