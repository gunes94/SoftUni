function basketballEquipment(input){
let tax = Number(input[0]);
let sneakers = tax * 0.60;
let outfit = sneakers * 0.80;
let ball = outfit / 4;
let accessories = ball / 5;
let price = tax + sneakers + outfit + ball + accessories;

console.log(price);
}
basketballEquipment(["365"])