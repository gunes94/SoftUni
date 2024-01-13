function radToDeg(input){
let rad = Number(input[0]);
let deg = rad * 180 / Math.PI;

console.log(deg);
}
radToDeg(["3.1416"]);