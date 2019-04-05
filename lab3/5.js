let massiv = prompt(' ').split(' ');
for(let i = 0; i < massiv.length; i++) {
     massiv[i] = 1.0 * massiv[i];
     if(massiv[i] % 2 === 0){
         massiv.splice(i,1);
         i--;
     }
}
console.log(massiv.toString());


