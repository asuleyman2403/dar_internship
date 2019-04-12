
let arr = [25, 45, 67, 234, 234];
//forEach
arr.forEach(function(i, el, a){
  console.log(i, el, a)
});
arr.forEach(el => {console.log(el)});

let newArr = arr.map(el => el * 2);
console.log(newArr);

let evens = arr.filter(el => el % 2 === 0);
console.log(evens);

let sum = arr.reduce((s, el) => s + el);
console.log(sum);
