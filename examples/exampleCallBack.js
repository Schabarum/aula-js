function mult (x, y){
    return x * y;
}

function add (x, y){
    return x + y;
}

function calcular(x, y, computar){
    return computar(x,y);
}

let a = calcular(10, 5, add);
console.log(a);
let b = calcular(10, 5, mult);
console.log(b);

// callBack com arrowFunction
console.log(calcular(5,8, (a,b) => a*b));