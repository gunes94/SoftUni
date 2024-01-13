function areaOfFigures(input){
let figures = input[0];

if(figures == "square"){
let side = Number(input[1]);
let area = side * side;

console.log((area).toFixed(3));
}
else if(figures == "rectangle"){
let side1 = Number(input[1]);
let side2 = Number(input[2]);
let area = side1 * side2;

console.log((area).toFixed(3));
} 
else if(figures == "circle"){
let radius = Number(input[1]);
let area = Math.PI * radius * radius;

console.log((area).toFixed(3));
} 
else if(figures == "triangle"){
let side1 = Number(input[1]);
let height = Number(input[2]);
let area = side1 * height / 2;

console.log((area).toFixed(3));   
}
}
areaOfFigures(["rectangle","7","2.5"]);
