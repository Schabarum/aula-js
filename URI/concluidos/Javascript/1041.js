var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [coordX, coordY] = pegarValores(lines.shift());

function retCoord (coordenadaX, coordenadaY){
    if ((coordenadaX === 0) && (coordenadaY === 0)){   
        return `Origem`;
    }else if (coordenadaX === 0) {                     
        return `Eixo Y`;
    }else if (coordenadaY === 0) {                     
        return `Eixo X`;
    }else if ((coordenadaX > 0) && (coordenadaY > 0)){ 
        return `Q1`
    }else if ((coordenadaX < 0) && (coordenadaY > 0)){ 
        return `Q2`;
    }else if ((coordenadaX < 0) && (coordenadaY < 0)){  
        return `Q3` ;
    }else if ((coordenadaX > 0) && (coordenadaY < 0)){ 
        return `Q4`;
    }
}
let val = retCoord(coordX, coordY);

console.log(val);