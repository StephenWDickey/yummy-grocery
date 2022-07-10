const mongoose = require("mongoose");

const db = require("../config/connection");

db.once("open", async () => {
  db.collection("products").insertMany(
    [
      {
        name: "Eggs - Cargo Free, 18 Each",
        price: 5.0,
        image:
          "https://images.pexels.com/photos/7947302/pexels-photo-7947302.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },

      {
        name: "Milk - Fat free, 0.5 Gallon",
        price: 5.0,
        image:
          "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Fresh Blueberries",
        price: 3.0,
        image:
          "https://images.pexels.com/photos/175422/pexels-photo-175422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Organic Bananas",
        price: 1.29,
        image:
          "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        // "https://images.pexels.com/photos/5946102/pexels-photo-5946102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Fresh Mango, 1 Each",
        price: 0.9,
        image:
          "https://images.pexels.com/photos/7788416/pexels-photo-7788416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },

      {
        name: "Fresh Kiwifruit, 1 Each",
        price: 1.29,

        image:
          "https://images.pexels.com/photos/5945704/pexels-photo-5945704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Large Pineapple, 1 Each",
        price: 2.49,
        image:
          "https://images.pexels.com/photos/189268/pexels-photo-189268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Tomatoes",
        price: 1.99,
        image:
          "https://images.pexels.com/photos/2718416/pexels-photo-2718416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Potatoes",
        price: 1.99,
        image:
          "https://images.pexels.com/photos/4110464/pexels-photo-4110464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Organic Ginger",
        price: 1.49,
        image:
          "https://images.pexels.com/photos/7657087/pexels-photo-7657087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Organic Scallions, 1 Each",
        price: 1.49,
        image:
          "https://images.pexels.com/photos/7225488/pexels-photo-7225488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Yogurt",
        price: 1.49,
        image:
          "https://images.pexels.com/photos/373882/pexels-photo-373882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Bakery Bread, 20 Ounce",
        price: 2.49,
        image:
          "https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Butter Croissants, 4ct",
        price: 5.99,
        image:
          "https://images.pexels.com/photos/4828339/pexels-photo-4828339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Butter",
        price: 3.99,
        image:
          "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Fresh Salmon, 1 Pound",
        price: 13.99,
        image:
          "https://images.pexels.com/photos/3296414/pexels-photo-3296414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Tiger Shrimp",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/3295856/pexels-photo-3295856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Chicken Breasts, 5 Pound",
        price: 13.99,
        image:
          "https://images.pexels.com/photos/6107729/pexels-photo-6107729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Chicken Wings, 2.3 Pound",
        price: 8.59,
        image:
          "https://images.pexels.com/photos/5695607/pexels-photo-5695607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // "https://images.pexels.com/photos/10292080/pexels-photo-10292080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "New York Strip Steak, 1.4 Pound",
        price: 20.99,
        image:
          "https://images.pexels.com/photos/9843971/pexels-photo-9843971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    console.log("Products seeded!")
  );

  db.collection("users").insertMany(
    [
      {
        username: "Test Testerson",
        email: "test@test.com",
        password: "12345",
      },
      {
        username: "Cody Coder",
        email: "test2@test.com",
        password: "12345",
      },
      {
        username: "Polly Programmer",
        email: "test3@test.com",
        password: "12345",
      },
    ],
    console.log("Users seeded!")
  );
});
