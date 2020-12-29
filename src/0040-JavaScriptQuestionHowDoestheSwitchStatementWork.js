var a = 4,
    b = 10;

switch (a + b) {
  case 9 + 5:
  case 15:
    console.log('first case');
    console.log('15');
    break;
  case 10:
    console.log('second case');
    console.log('10');
    break;
  case 5:
    console.log('third case');
    console.log('5');
  default:
    console.log('Default');
    break;
}
