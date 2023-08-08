function woodCalculator(chairQuantity, tableQuantity, bedQuantity ){
    // Wood Quantity per furniture
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood  = 50;
    // total required wood calculation per furniture
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    // Total required wood calculation
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

} 
const totalWood = woodCalculator(6, 1, 2);
console.log('total  wood required', totalWood);
