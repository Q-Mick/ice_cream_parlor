// const Items = [{
//   type: iceCream,
//   flavors: ["vanilla", "strawberry"],
//   price: 3.99
//   },{
//     cones = [
//       {
//         name: "Waffle Cone",
//         price: "1",
//         quantity: 0,
//       },
//       {
//         name: "Waffle Bowl",
//         price: "2",
//         quantity: 0,
//       },
//   }

// ];

const iceCream = [
  {
    name: "Vanilla",
    price: 1,
    quantity: 0,
  },
  {
    name: "Strawberry",
    price: 2,
    quantity: 0,
  },
];

const cones = [
  {
    name: "Waffle Cone",
    price: "1",
    quantity: 0,
  },
  {
    name: "Waffle Bowl",
    price: "2",
    quantity: 0,
  },
];

const toppings = [
  {
    name: "Sprinkles",
    price: "1",
    quantity: 0,
  },
  {
    name: "Chocolate Chips",
    price: "2",
    quantity: 0,
  },
];

// let currentCartTemplate = "";
// let vanillaCount = 0;
// let strawberryCount = 0;
// let waffleConeCount = 0;
// let waffleBowlCount = 0;
// let sprinkleCount = 0;
// let chocolateCount = 0;
// these variables keep track of the current amount of each item in the cart

// function addRemoveVanilla(addremove) {
//   switch (addremove) {
//     case "add":
//       console.log("adding a vanilla");
//       vanillaCount++;
//       // drawCart()
//       return;
//     case "remove":
//       if (vanillaCount == 0) {
//         console.log("no vanilla to remove");
//         return;
//       } else {
//         console.log("removing vanilla");
//         vanillaCount--;
//         // drawCart()
//       }
//       return;
//   }
// }

// // SECTION my current working add and remove function
// function addRemoveStrawberry(addremove, item) {
//   console.log(item);
//   if (item == "iceCream") {
//     // start case for ice cream
//     switch (addremove) {
//       case "add":
//         console.log("adding a strawberry");
//         let Strawberryup = iceCream.find(
//           (Strawberry) => Strawberry.name == "Strawberry"
//         );
//         Strawberryup.quantity++;
//         console.log(Strawberryup.quantity);
//         drawCart();
//         return;
//       case "remove":
//         if (item[1].quantity == 0) {
//           console.log("no strawberry to remove");
//           return;
//         } else {
//           console.log("removing strawberry");
//           let Strawberrydown = iceCream.find(
//             (Strawberry) => Strawberry.name == "Strawberry"
//           );
//           Strawberrydown.quantity--;
//           drawCart();
//         }
//         return;
//     }
//     // end case for ice cream
//   }

//   function addRemoveWaffleCone(addremove) {
//     switch (addremove) {
//       case "add":
//         console.log("adding a waffleCone");
//         waffleConeCount++;
//         // drawCart()
//         return;
//       case "remove":
//         if (waffleConeCount == 0) {
//           console.log("no waffleCone to remove");
//           return;
//         } else {
//           console.log("removing waffle cone");
//           waffleConeCount--;
//           // drawCart()
//         }
//         return;
//     }
//   }

//   function addRemoveWaffleBowl(addremove) {
//     switch (addremove) {
//       case "add":
//         console.log("adding a waffleBowl");
//         waffleBowlCount++;
//         // drawCart()
//         return;
//       case "remove":
//         if (waffleBowlCount == 0) {
//           console.log("no waffleBowl to remove");
//           return;
//         } else {
//           console.log("removing waffle bowl");
//           waffleBowlCount--;
//           // drawCart()
//         }
//         return;
//     }
//   }

//   function addRemoveChocolate(addremove) {
//     switch (addremove) {
//       case "add":
//         console.log("adding a chocolate");
//         chocolateCount++;
//         // drawCart()
//         return;
//       case "remove":
//         if (chocolateCount == 0) {
//           console.log("no chocolate to remove");
//           return;
//         } else {
//           console.log("removing a chocolate");
//           chocolateCount--;
//           // drawCart()
//         }
//         return;
//     }
//   }

//   function addRemoveSprinkle(addremove) {
//     switch (addremove) {
//       case "add":
//         console.log("adding a sprinkle");
//         sprinkleCount++;
//         // drawCart()
//         return;
//       case "remove":
//         if (sprinkleCount == 0) {
//           console.log("no sprinkle to remove");
//           return;
//         } else {
//           console.log("removing a sprinkle");
//           sprinkleCount--;
//           // drawCart()
//         }
//         return;
//     }
//   }

  function drawCart() {
    
    console.log("drawing cart");
    let template = "";
    iceCream.forEach((flavor) => {
      if (flavor.quantity > 0) {
        template += `<div class="d-flex border rounded-1" class="justify-content-around">
      <p class="fs-3 px-4 mx-4">${flavor.name}</p>
      <p class="fs-3 px-4 mx-4">x${flavor.quantity}</p>
      <p class="fs-3 px-4 mx-4">$${flavor.price}</p>
      <p class="fs-3 px-4 mx-4">$${flavor.quantity * flavor.price}</p>
    </div>`;
      }
      console.log(template);
    });
    // document.getElementById("cart").innerHTML = template;
    toppings.forEach((top) => {
      if (top.quantity > 0) {
        template += `<div class="d-flex border rounded-1" class="justify-content-around">
      <p class="fs-3 px-4 mx-4">${top.name}</p>
      <p class="fs-3 px-4 mx-4">x${top.quantity}</p>
      <p class="fs-3 px-4 mx-4">$${top.price}</p>
      <p class="fs-3 px-4 mx-4">$${top.quantity * top.price}</p>
    </div>`;
      }
      console.log(template);
    });
    // document.getElementById("cart").innerHTML = template;
    cones.forEach((con) => {
      if (con.quantity > 0) {
        template += `<div class="d-flex border rounded-1" class="justify-content-around">
      <p class="fs-3 px-4 mx-4">${con.name}</p>
      <p class="fs-3 px-4 mx-4">x${con.quantity}</p>
      <p class="fs-3 px-4 mx-4">$${con.price}</p>
      <p class="fs-3 px-4 mx-4">$${con.quantity * con.price}</p>
    </div>`;
      }
      console.log(template);
    });
    document.getElementById("cart").innerHTML = template;
  }


// SECTION my trial master function
// take in all three datas needed and perform the requested actions
// if the action is remove, then adjust quantity of supplied item and exit
//if its add then adjust quantity of that item and update
// draw the cart after each WIP
function updateItem(itemType, itemName, action) {
  console.log(itemType, itemName, action);

  if (itemType == "iceCream") {
    // start case for ice cream
    switch (action) {
      case "add":
        console.log(`adding a ${itemName}`);
        let Strawberryup = iceCream.find(
          (Strawberry) => Strawberry.name == itemName
        );
        Strawberryup.quantity++;
        console.log(Strawberryup.quantity);
        drawCart();
        return;
      case "remove":
        if (itemType[1].quantity == 0) {
          console.log(`No ${itemType} to remove`);
          return;
        } else {
          console.log(`removing ${itemType}`);
          let Strawberrydown = iceCream.find(
            (Strawberry) => Strawberry.name == itemName
          );
          Strawberrydown.quantity--;
          drawCart();
          return;
        }
        
      }
      
    }

    // start toppings
     if (itemType == "toppings") {
    // start case for ice cream
    switch (action) {
      case "add":
        console.log(`adding a ${itemName}`);
        let Strawberryup = toppings.find(
          (Strawberry) => Strawberry.name == itemName
        );
        Strawberryup.quantity++;
        console.log(Strawberryup.quantity);
        drawCart();
        return;
      case "remove":
        if (itemType[1].quantity == 0) {
          console.log(`No ${itemType} to remove`);
          return;
        } else {
          console.log(`removing ${itemType}`);
          let Strawberrydown = toppings.find(
            (Strawberry) => Strawberry.name == itemName
          );
          Strawberrydown.quantity--;
          drawCart();
          return;
        }
        
      }
      
    }
    // start cones
    if (itemType == "cones") {
      // start case for ice cream
      switch (action) {
        case "add":
          console.log(`adding a ${itemName}`);
          let Strawberryup = cones.find(
            (Strawberry) => Strawberry.name == itemName
          );
          Strawberryup.quantity++;
          console.log(Strawberryup.quantity);
          drawCart();
          return;
        case "remove":
          if (itemType[1].quantity == 0) {
            console.log(`No ${itemType} to remove`);
            return;
          } else {
            console.log(`removing ${itemType}`);
            let Strawberrydown = cones.find(
              (Strawberry) => Strawberry.name == itemName
            );
            Strawberrydown.quantity--;
            drawCart();
            return;
          }
          
        }
        
      }
}