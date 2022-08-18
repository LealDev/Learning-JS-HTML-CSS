
// função
function calc(a , b, operator) {
    return eval(`${a} ${operator} ${b}`);
}

let resultado = calc(3, 2, "*")

console.log(resultado);

// eventos

window.addEventListener('focus', event => {

    console.log("focus")
})
document.addEventListener('click', event =>{

    console.log("Click!")
})
 
// date
let agora = new Date();
console.log(agora.getFullYear());

console.log(agora.toLocaleDateString("pt-BR"));

// arrays

let carros = ["palio 98", "toro", "uno", 10, true, new Date()];
console.log(carros[5].getFullYear());

carros.forEach(function(value, index){
    console.log(index, value);
})

let biblioteca = ["the beast and the bealty", 10,"the lord of the ring",5,"the thief", 2, calc(10,5,"+")];
biblioteca.forEach(function(value,index){
    console.log(index,value)
})