let text = prompt('Enter a text: ');
let str  = prompt('Enter a string: ');
text = text.split(str);
let newText = "";

for(let i = 0 ; i < text.length; i++){
    newText += text[i];
}
if(text.length === 1){
    console.log(newText);
}else{
    console.log(newText + ' ' + str);
}
