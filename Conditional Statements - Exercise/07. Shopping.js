function shopping(input){
let budget = Number(input[0]);
let numberVideocards = Number(input[1]);
let numberProcesors = Number(input[2]);
let numberRamMemory = Number(input[3]);
let sumVideocards = numberVideocards * 250;
let sumProcesors = 0.35 * sumVideocards * numberProcesors;
let sumRamMemory = 0.10 * sumVideocards * numberRamMemory;
let sum = (sumVideocards + sumProcesors + sumRamMemory)
if(numberVideocards > numberProcesors){
    sum = sum - sum * 0.15;    
}
if(budget >= sum){
    console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
}
else console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
}
shopping(["900","2","1","3"]);