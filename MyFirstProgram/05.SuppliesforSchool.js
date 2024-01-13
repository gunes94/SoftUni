function SuppliesforSchool(input){
    let numPen = Number(input[0]);
    let numMarker = Number(input[1]);
    let literPreparation = Number(input[2]);
    let decreasePercent = Number(input[3]);
    
    let money = numPen * 5.80 + numMarker * 7.20 + literPreparation * 1.20;
    let moneyAll = money - money * decreasePercent / 100;

    console.log(moneyAll);

}
SuppliesforSchool(["2 ","3 ","4 ","25 "]);