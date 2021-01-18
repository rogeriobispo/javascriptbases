let num =1;

console.log(num);

let id = setInterval(function(){
  num++;
  if(num> 5){
    clearInterval(id);
  }

  console.log(num);
}, 0)
console.log(num)

while(num< 5) {
  num++;
}
