"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payed = true;
// number 
var age = 16;
var value = 16.50;
//String 
var company = "Test company";
//arrays
var values = [0, 1, 2, 3, 4];
// template string
var name = "Paul";
//tuples
var student = ["Paul", 10];
var students = [["Paul", 10], ["Mary", 20]];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
//any
var anyValue = 4;
anyValue = false;
// void
function test() { }
console.log("Hello may name is " + name + ", and I'm " + age + " years old.");
