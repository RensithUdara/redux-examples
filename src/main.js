// Keells Super

const store = {
  noOfFruits: 5,
  noOfPharmacyItems: 10,
  // fruits: ["Apple", "Orange", "Bananna"],
  // PharmacyItems: ["P1", "P2", "P3"],
};

// Reducer function for fruits and pharmacy items
function storeReducer(action) {
  switch (action.type) {
    case "BUY_FRUIT":
      // Ensure no negative fruits
      if (store.noOfFruits > 0) {
        store.noOfFruits -= 1;
        console.log("Bought a fruit. Fruits left:", store.noOfFruits);
      } else {
        console.log("No fruits left to buy");
      }
      break;

    case "RESTOCK_FRUITS":
      store.noOfFruits = action.amount;
      console.log("Restocked fruits to:", store.noOfFruits);
      break;

    case "BUY_PHARMACY_ITEM":
      // Ensure no negative pharmacy items
      if (store.noOfPharmacyItems > 0) {
        store.noOfPharmacyItems -= 1;
        console.log("Bought a pharmacy item. Pharmacy items left:", store.noOfPharmacyItems);
      } else {
        console.log("No pharmacy items left to buy");
      }
      break;

    case "RESTOCK_PHARMACY":
      store.noOfPharmacyItems = action.amount;
      console.log("Restocked pharmacy items to:", store.noOfPharmacyItems);
      break;

    case "REPLACE_FRUIT":
      store.noOfFruits = 5; // Reset fruits to initial state
      console.log("Replaced fruits. Fruits now:", store.noOfFruits);
      break;

    case "REPLACE_PHARMACY":
      store.noOfPharmacyItems = 10; // Reset pharmacy items to initial state
      console.log("Replaced pharmacy items. Pharmacy items now:", store.noOfPharmacyItems);
      break;

    case "DISCOUNT_PHARMACY":
      if (store.noOfPharmacyItems > 0) {
        console.log("Discount applied on pharmacy items!");
      } else {
        console.log("No pharmacy items left to apply discount");
      }
      break;

    case "CHECK_STOCK":
      console.log("Current Stock - Fruits:", store.noOfFruits, "Pharmacy items:", store.noOfPharmacyItems);
      break;

    default:
      console.log("Invalid action");
      break;
  }
}

// Initial state
console.log("Initial Store:", store);

// Perform some actions
storeReducer({ type: "BUY_FRUIT" });
storeReducer({ type: "BUY_FRUIT" });
storeReducer({ type: "BUY_PHARMACY_ITEM" });
storeReducer({ type: "RESTOCK_FRUITS", amount: 10 });
storeReducer({ type: "RESTOCK_PHARMACY", amount: 20 });
storeReducer({ type: "BUY_PHARMACY_ITEM" });
storeReducer({ type: "REPLACE_FRUIT" });
storeReducer({ type: "REPLACE_PHARMACY" });
storeReducer({ type: "DISCOUNT_PHARMACY" });
storeReducer({ type: "CHECK_STOCK" });
