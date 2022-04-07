var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [a, b, c] = pegarValores(lines.shift());

if (a < b && a < c) {
    console.log(a);
    if (b < c) {
        console.log(b);
        console.log(c);
    } 
    else {
        console.log(c);
        console.log(b);
    }
}

else if (b < c) {
    console.log(b);
    if (a < c) {
        console.log(a);
        console.log(c);
    }
    else {
        console.log(c);
        console.log(a);
    }
}

else {
    console.log(c);
    if (a < b) {
        console.log(a);
        console.log(b);
    }
    else {
        console.log(b);
        console.log(a);
    }
}

console.log('');
console.log(a);
console.log(b);
console.log(c);