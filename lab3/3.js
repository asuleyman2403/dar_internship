let number  = 1.0 * prompt('Enter a number: ');
if(number > 0){
    let factorial = number;
    for(let i = number - 1; i > 0; i--){
        factorial *= i;
    }
    console.log(factorial);
}else{
    console.log('Sorry, factorial\'s boundary should be greater than zero');
}
