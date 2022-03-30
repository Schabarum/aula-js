var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var dias = +lines.shift();

while (dias > 29){
    if (dias >=365){
        console.log(`${Math.floor(dias/365)} ano(s)`);
        dias = dias%365;
    }else{
        console.log(`${Math.floor(dias/365)} ano(s)`);
    }

    if (dias >= 30){
        console.log(`${Math.floor(dias/30)} mes(es)`);
        dias = dias%30;
    }else{
        console.log(`${Math.floor(dias/30)} mes(es)`);
    }
}
console.log(`${dias} dia(s)`);