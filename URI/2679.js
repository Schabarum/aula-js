var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let par = true;
let nextValue = +lines.shift();

while (par){
    if (nextValue % 2 === 0){
        console.log(nextValue);
        par = false;   
    }else{
        nextValue += 1;
        console.log(nextValue);
        par = false;
    }
}
