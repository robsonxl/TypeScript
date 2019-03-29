class Cliente{
    name: string
    age:  number
    
    constructor(name: string, age: number){
        this.age = age
        this.name = name
    }
    show(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old.`)
    }
     showWithReturn(): string{
       return `Hello my name is ${this.name} and I'm ${this.age} years old.`
     }
}

    let cliente: Cliente = new Cliente("Robson Xavier de Lima", 29);
    let returnShow: string = cliente.showWithReturn()
    cliente.show();
    console.log(returnShow)