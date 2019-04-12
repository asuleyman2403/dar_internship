let arr = prompt('Enter elements of array: ').split(' ').map( el => el * 1.0);
let minInArr = arr => arr.reduce((s,el) => Math.min(s, el));
let minInArr2 = arr => arr.reduce((s,el) => s < el ? s: el);

console.log(minInArr(arr));
console.log(minInArr2(arr));
let arr1 = [123, 123 ,123];
let arr2 = [1544, -12332, 12412];
let arr3 = [213423, 432, 321];
console.log(minInArr2([...arr1,...arr2,...arr3]));

