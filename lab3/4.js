let massiv = prompt('Enter some numbers: ').split(' ');
for(let i = 0; i < massiv.length; i++) massiv[i] = 1.0 * massiv[i];
let sumOfEven = 0;
let productOfOdd = 1;
let isPowerOfTwo = (number)  => {
    let product = 1;
    while(product < number){
        product *= 2;
    }
    return number === product;
};
let powersOfTwo = [];
for(let i = 0; i < massiv.length; i++){
    if(massiv[i] % 2 === 0){
        sumOfEven += massiv[i];
    }else{
        productOfOdd *= massiv[i];
    }

    if(isPowerOfTwo(massiv[i])){
        powersOfTwo.push(massiv[i]);
    }
}
console.log(sumOfEven);
console.log(productOfOdd);
if(powersOfTwo.length !== 0){
    console.log(powersOfTwo.toString());
}


