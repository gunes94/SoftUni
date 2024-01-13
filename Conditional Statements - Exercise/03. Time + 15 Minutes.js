function time15Minutes(input){
let hour = Number(input[0]);
let minutes = Number(input[1]);
let newminutes = minutes + 15;
if(newminutes > 60){
    hour += 1;
    newminutes -= 60;
}
else if(newminutes == 60){
    newminutes = 0;
    hour += 1;
}
if(hour == 24) hour = 0;
if(newminutes < 10){
    console.log(`${hour}:0${newminutes}`);
}
else console.log(`${hour}:${newminutes}`);
}
time15Minutes(["23", "59"]);