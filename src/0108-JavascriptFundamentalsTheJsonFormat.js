// JSON Format
// json is text structured like a javascript object
// Json is used to store and exchange data, You can
// store a javascript object as a text
// we use the JSON object to convert between text and javascript objects
// JSON.parse and JSON.stringify
// JSON.parse converte an strint into json
// JSON.stringify converte a json into string to store somewhere
let obj = {
  fName: 'Rogerio',
  lName: 'Bispo',
  score: 100,
  passed: true,
  modules: ['start', 'cep', 'rem'],
  address: {
    street: 'Doutor nelson de souza campos',
    city: 'Sao Paulo',
    state: 'SP'
  }
};
let str = '{ "fName": "Rogerio", "lName": "Bispo", "score": 100}';

console.log(JSON.parse(str));
console.log(JSON.stringify(obj));
