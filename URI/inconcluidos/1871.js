const { type } = require('os');

var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let d = 'primeiro'

while (d != ''){
    let [a, b] = pegarValores(lines.shift());
    let c = a + b;
    d = c.toString(); 
    for (let i = 0;i< d.length();i++){
        if (d[i] = '0'){
            d[i] = d[i].replace('0', '')
        }    
    }
    console.log(d);
}
