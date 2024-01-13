function VacationBooksList(input){
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    
    let hoursNeeded = totalPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / days;

    console.log(hoursPerDay);

}
VacationBooksList(["212 ","20 ","2 "]);