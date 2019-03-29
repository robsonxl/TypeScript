interface Pessoa{
    idade: number
    sexo?: string
}
function printAge(pessoa: Pessoa){
    console.log(pessoa.idade)
}
let paul = {nome:'Paul', idade:22}
printAge(paul)