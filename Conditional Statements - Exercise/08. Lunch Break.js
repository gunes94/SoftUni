function lunchBreak(input){
let nameSerial = input[0];
let timeEpisode = Number(input[1]);
let timePause = Number(input[2]);
let timeLaunch = timePause / 8;
let timeRelaxation = timePause / 4;
let allTime = timePause - timeLaunch - timeRelaxation;
if(allTime >= timeEpisode){
console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(allTime - timeEpisode)} minutes free time.`);
}
else {
    console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(timeEpisode - allTime)} more minutes.`);
}
}
lunchBreak(["Game of Thrones","60","96"]);