const prices = [10,20,30]
const realPrices = prices.map(function(price){
    return `R$ ${price},00`
}) 
const realPriceMoreThan20 = prices.filter(price => price > 20).map(price =>`$$$$$ ${price} 00` )
const realPricesArrowFunction = prices.map(price =>`R$ ${price},00`)
const realPricesArrowFunction2 = prices.map((price)=>{
    return `R$ ${price},00`
})
console.log(realPrices)
console.log(realPricesArrowFunction)
console.log(realPriceMoreThan20)