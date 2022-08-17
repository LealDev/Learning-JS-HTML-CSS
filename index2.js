
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