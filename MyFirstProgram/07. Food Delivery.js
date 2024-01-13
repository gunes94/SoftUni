function foodDelivery(input){
let chickenMenus = Number(input[0]);
let fishMenus = Number(input[1]);
let vegMenus = Number(input[2]);

let menusPrice = chickenMenus * 10.35 + fishMenus * 12.40 + vegMenus * 8.15;
let dessertPrice = 0.2 * menusPrice;

let totalPrice = menusPrice + dessertPrice + 2.50;
console.log(totalPrice);
}
foodDelivery(["2 ","4 ","3 "]);