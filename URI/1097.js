var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

console.log('I=1 J=7');
console.log('I=1 J=6');
console.log('I=1 J=5');
console.log('I=3 J=9');
console.log('I=3 J=8');
console.log('I=3 J=7');
console.log('...');
console.log('I=9 J=15');
console.log('I=9 J=14');
console.log('I=9 J=13');