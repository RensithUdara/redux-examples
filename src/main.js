// Keels Super

const store = {

  noOfFruits: 5,
  noOfPharmacyItems: 10,

  // fruits : ["Apple" , "Orange" , "Bananna"],
  // PharmacyItems : ["P1" , "P2" , "P3"],
};

function fruitReducer(action) {
switch (action) {
  case "BUY_FRUIT" :
    store.noOfFruits = store.noOfFruits - 1;
    break;
    default:
    break;
}
}

console.log(store);
//console.log("BUY_FRUIT");

store.noOfFruits = store.noOfFruits - 1;
fruitReducer ("BUY_FRUIT");
console.log(store);