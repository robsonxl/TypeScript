class funcionario{
    nome: string
    salario: number

    constructor(nome: string, salario: number){
        this.nome = nome
        this.salario = salario
   }
   pagarImposto(taxa: number = 7.5){
        console.log(`${this.nome} etá Pagando ${this.salario * taxa /100 } de imposto`)
   }
}
class secretario  extends funcionario{
    pagarImposto(taxa: number =50){
        console.log('Secretario pagando imposto')
        super.pagarImposto(taxa)
    }
}
class executivo extends funcionario{
       pagarImposto(taxa: number = 3000){
           console.log('Executivo Pagando imposto')
            super.pagarImposto(taxa)
       }     
}

let sarah = new secretario('Sarah',2000)
sarah.pagarImposto()
let robson = new executivo('Robson', 30000)
robson.pagarImposto()