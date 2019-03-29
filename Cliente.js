"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(name, age) {
        this.age = age;
        this.name = name;
    }
    Cliente.prototype.show = function () {
        console.log("Hello my name is " + this.name + " and I'm " + this.age + " years old.");
    };
    Cliente.prototype.showWithReturn = function () {
        return "Hello my name is " + this.name + " and I'm " + this.age + " years old.";
    };
    return Cliente;
}());
var cliente = new Cliente("Robson Xavier de Lima", 29);
var returnShow = cliente.showWithReturn();
cliente.show();
console.log(returnShow);
