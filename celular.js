class celular{
    
    constructor(){
        this.cor = "Prata"
    }

    ligar() {
     console.log("Recebendo ligação");
        return "atendendo"   
    }
}

let objeto = new celular();
console.log(celular.ligar());