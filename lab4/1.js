let nums = prompt('Enter any three numbers: ').split(' ').map(el => el * 1.0);
function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
let sum2 = a =>  b => c => a + b + c;
console.log(sum(nums[0])(nums[1])(nums[2]));
console.log(sum2(nums[0])(nums[1])(nums[2]));
