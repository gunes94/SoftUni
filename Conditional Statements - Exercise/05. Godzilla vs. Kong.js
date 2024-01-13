function godzillaVsKong(input){
let budgetFilm = Number(input[0]);
let numberStatists = Number(input[1]);
let priceclothing = Number(input[2]);
let decor = 0.10 * budgetFilm
if(numberStatists >= 150){
    priceclothing = 0.90 * priceclothing;
}
let money = budgetFilm - numberStatists * priceclothing - decor;
if(money < 0){
console.log("Not enough money!");
console.log(`Wingard needs ${Math.abs(money.toFixed(2))} leva more.`);
}
else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`);
}
}
godzillaVsKong(["9587.88","222","55.68"]);