function projectsCreation(input){
let nameArchitect = input[0];
let numberProjects = Number(input[1]);
let hoursAllProjects = numberProjects * 3;

console.log(`The architect ${nameArchitect} will need ${hoursAllProjects} hours to complete ${numberProjects} project/s.`);
}
projectsCreation(["George","4"])