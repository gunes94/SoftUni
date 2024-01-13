function worldSwimmingRecord(input){
let recordSeconds = Number(input[0]);
let distanceMetres = Number(input[1]);
let timeForDistance1metre = Number(input[2]);
let time = timeForDistance1metre * distanceMetres;
let slowingTime = Math.floor((distanceMetres / 15)) * 12.5;

let totalTime = time + slowingTime;
let result = Math.abs(totalTime - recordSeconds);

if(totalTime >= recordSeconds){

console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
}
else {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
}
}
worldSwimmingRecord(["10464","1500","20"]);