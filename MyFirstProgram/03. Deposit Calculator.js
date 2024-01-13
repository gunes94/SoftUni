function depositCalculator(input){
    let depsum = Number(input[0]);
    let term = Number(input[1]);
    let percent = Number(input[2]);
    let sum = depsum + term * ((depsum*percent/100)/12);

    console.log(sum);

}
depositCalculator(["200","3","5.7"]);