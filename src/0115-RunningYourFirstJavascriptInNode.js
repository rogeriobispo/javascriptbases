let names = [
  'Smith, James',
  'Peterson, Alyssa',
  'Johnson, Lynette',
  'Lopez, Tony',
];


let newNames  = names.map(name => {
  return name.replace(/(\w+), (\w+)/, '$2, $1'); //parenteses captura o grupo de palavras
})

console.log(newNames)
