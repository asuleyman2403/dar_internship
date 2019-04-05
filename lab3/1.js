let sides = prompt('Enter sides of triangle').split(' ');
for(let i = 0;i < sides.length; i++){
    sides[i] = 1.0 * sides[i];
}
if(sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]){
    console.log('Sorry, impossible triangle sides');
}else{
    let p = 0;
    let s = 1.0;
    for(let i = 0; i < sides.length; i++) p += sides[i];
    p = p/2;
    for(let i = 0; i < sides.length; i++){
        s *= Math.sqrt(p - sides[i]);
    }
    s *= Math.sqrt(p);
    console.log('Perimeter: ' + 2 * p + '.\nArea: ' + s + '.');
}
