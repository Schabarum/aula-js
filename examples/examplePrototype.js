String.prototype.concatenaTexto = function(){
    return String(this) + ' ' + 'Texto adicionado';
}
// console.log('Qualquer texto string!'.concatenaTexto());

Number.prototype.remove10 = function() {
    return +this - 10
}

//console.log((55).remove10());

Array.prototype.cataFruta = function(callback){
    for(let i = 0;i < this.length; i++){
        callback.call(this, this[i], i);
    }
};

let frutas = ['laranja', 'uva', 'pinha', 'morango'];
// frutas.cataFruta((element, index) => {console.log(`Fruta ${element} sua posição é ${index}`)});

class jogadorFutebol{
    constructor(name) {this.name = name}
    chutar = () => {console.log(this.name + ' Chutou é gol!')}
}
jogadorFutebol.prototype.sofreuFalta = function (){
    console.log(this.name + ' viu que o juiz ta marcando todas, viu a chance se jogou')
}

let Neymar = new jogadorFutebol('Neymar');
Neymar.chutar();
Neymar.sofreuFalta();