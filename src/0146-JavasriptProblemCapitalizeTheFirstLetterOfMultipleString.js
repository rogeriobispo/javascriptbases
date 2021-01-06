let names = ['Steve', 'mckay', 'sarah', 'lynette', 'David', 'jose', 'lana', 'ALFRED', 'samantha' ];


let titleCaseNames = names.map(name => name[0].toUpperCase() + name.slice(1).toLocaleLowerCase())

console.log(titleCaseNames);
