// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър


function Repainting(input){
    let nylonQty = Number(input[0]);
    let paintQty  = Number(input[1])
    let thinnerQty  = Number(input[2])
    let workHours  = Number(input[3])

    let extraPaintQty = 0.1 * paintQty;

    let totalPaintQty = paintQty + extraPaintQty;

    let totalNylonQty = nylonQty + 2;

    let materialsPrice = totalPaintQty * 14.50 + totalNylonQty * 1.50 + thinnerQty * 5.00 + 0.40;
    let workersPayPerHour = 0.3 * materialsPrice;
    let totalWorkersPay = workHours * workersPayPerHour;

    console.log(totalWorkersPay + materialsPrice);
}
Repainting(["10 ","11 ","4 ","8 "]);