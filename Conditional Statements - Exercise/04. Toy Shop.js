function toyShop(input){
let priceExcursion = Number(input[0]);
let puzzels = Number(input[1]);
let doll = Number(input[2]);
let bears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);
let priceAlltoys = puzzels * 2.60 + doll * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
let numbertoys = puzzels + doll + bears + minions + trucks;

if(numbertoys => 50){
     priceAlltoys *= 0.75;
}
priceAlltoys *= 0.90;
let difference = Math.abs(priceAlltoys - priceExcursion);
if(priceAlltoys >= priceExcursion) console.log(`Yes! ${difference.toFixed(2)} lv left.`);
else console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
}
toyShop(["320","8","2","5","5","1"]);