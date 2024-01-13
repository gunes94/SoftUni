function fishTank(input){
let lenght = Number(input[0]);
let weight = Number(input[1]);
let height = Number(input[2]);
let percent = Number(input[3]);

let volume = lenght * weight * height;
let volumeLitre = volume / 1000;
let litres = volumeLitre - volumeLitre * percent / 100;

console.log(litres);
}
fishTank(["85","75","47","17"])