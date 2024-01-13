function yardGreening(input){
let squareMetersLandscaped = Number(input[0]);
let price = squareMetersLandscaped * 7.61;
let discount = price * 0.18;
let discountedPrice = price - discount;

console.log(`The final price is: ${discountedPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])