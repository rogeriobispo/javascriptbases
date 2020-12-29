let data = '2018-5-9';

let reg = /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/,
    arr = reg.exec(data)

console.log(arr)
