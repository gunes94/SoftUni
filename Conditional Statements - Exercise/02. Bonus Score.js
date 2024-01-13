function bonusScore(input){
let number = Number(input[0]);
let bonuspoint = 0.0;

if(number <= 100){ bonuspoint = 5;}
else if(number > 1000){ bonuspoint += 0.1 * number;}
else if(number > 100){ bonuspoint += 0.2 * number;}


if(number % 2 == 0){ bonuspoint += 1;}
else if(number % 10 == 5){ bonuspoint += 2;}

console.log(bonuspoint);
console.log(number + bonuspoint);
}
bonusScore(["2703"]);