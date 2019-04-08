let num = 1.0 * prompt('Enter a number');

let fill = num => {
  let arr = [];
  for(let i = 0; i < num; i++) arr.push(Math.round(Math.random() * 1000));
  return arr;
};

let arr = fill(num);

let newArr = arr.filter(el => el % 7 + el % 3 === 0);
console.log(newArr);

