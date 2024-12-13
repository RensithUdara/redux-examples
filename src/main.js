// Keels Super

const store = {

  noOfFruits: 5,
  noOfPharmacyItems: 10,

  // fruits : ["Apple" , "Orange" , "Bananna"],
  // PharmacyItems : ["P1" , "P2" , "P3"],
};

console.log(store);
console.log("BUY_FRUIT");

store.noOfFruits = store.noOfFruits - 1;
console.log(store);