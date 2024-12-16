// Keells Super

const store = {
  noOfFruits: 5,
  noOfPharmacyItems: 10,
  // fruits: ["Apple", "Orange", "Bananna"],
  // PharmacyItems: ["P1", "P2", "P3"],
};

// Reducer function for fruits
function fruitReducer(action) {
  switch (action) {
    case "BUY_FRUIT":
      // Ensure that noOfFruits doesn't go below 0
      if (store.noOfFruits > 0) {
        store.noOfFruits -= 1;
      } else {
        console.log("No fruits left to buy");
      }
      break;
    case "REPLACE_FRUIT":
      // Example replacement logic, replace with some action if needed
      store.noOfFruits = 5; // Refill fruits to the initial number
      break;
    default:
      console.log("Invalid action");
      break;
  }
}

// Initial state
console.log("Initial Store:", store);

// Performing actions
fruitReducer("BUY_FRUIT");
console.log("After Buying One Fruit:", store);

fruitReducer("BUY_FRUIT");
console.log("After Buying Another Fruit:", store);

fruitReducer("REPLACE_FRUIT");
console.log("After Replacing Fruits:", store);

fruitReducer("BUY_FRUIT");
console.log("After Buying Another Fruit:", store);

fruitReducer("BUY_FRUIT");
console.log("After Buying Another Fruit:", store);

fruitReducer("BUY_FRUIT");
console.log("After Buying Another Fruit:", store);
