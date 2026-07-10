/**
 * chair wood need =3 cft
 * table eood need =10 cft
 * bed wood need =50 cft
 */
function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableQuantity=10;
    const perBedWood=50;

    const totalWoodForChair=chairQuantity*perChairWood;
    const totalWoodForTable=tableQuantity* perTableQuantity;
    const totalWoodForBed=bedQuantity*perBedWood;

    const totalWoodNeed=totalWoodForChair+totalWoodForTable+totalWoodForBed;
    return totalWoodNeed;



}

const wood=woodQuantity(0,0,2);
console.log(wood);