"use strict";
//array
var numbers = [1, 1, 2, 3, 4];
// values 
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var value = numbers_1[_i];
    console.log(value);
}
// indexes
for (var index in numbers) {
    console.log(index);
}
