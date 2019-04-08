let arr = prompt('Enter elements of array: ').split(' ').map(el => el * 1.0);
console.log(arr.reduce((s, el) => Math.max(s, el)));
