"use strict";
var prices = [10, 20, 30];
var realPrices = prices.map(function (price) {
    return "R$ " + price + ",00";
});
var realPriceMoreThan20 = prices.filter(function (price) { return price > 20; }).map(function (price) { return "$$$$$ " + price + " 00"; });
var realPricesArrowFunction = prices.map(function (price) { return "R$ " + price + ",00"; });
var realPricesArrowFunction2 = prices.map(function (price) {
    return "R$ " + price + ",00";
});
console.log(realPrices);
console.log(realPricesArrowFunction);
console.log(realPriceMoreThan20);
