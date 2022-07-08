<<<<<<< HEAD
const mongoose = require('mongoose');


const db = require('../config/connection');


db.once('open', async () => {


    db.dropDatabase();


    db.collection('products').insertMany([
        
        {
            name: 'Eggs - Cargo Free, 18 Each',
            price: 5.00,
            image: "https://www.pexels.com/photo/2-brown-eggs-on-brown-nest-4911724/"

        },
        {
            name: 'Milk - Fat free, 0.5 Gallon',
            price: 5.00,
            image: "https://www.pexels.com/photo/crop-person-pouring-milk-into-glass-on-table-5946720/"

        },
        {
            name: 'Fresh Blueberries',
            price: 3.00,
            image: "https://www.pexels.com/photo/selective-focus-photography-of-bunch-of-blueberries-583837/"

        },
        {
            name:'Organic Bananas',
            price:1.29,

            image: "https://www.pexels.com/photo/banana-fruit-on-wood-crate-2238309/"
        },
        {
            name:'Fresh Mango, 1 Each',
            price:0.90,
            image: "https://www.pexels.com/photo/person-holding-yellow-round-fruit-7788416/"
            

        },
        {
            name:'Fresh Mango, 1 Each',
            price:0.9,
            image:"https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1600"   

        },
        {
            name:'Fresh Kiwifruit, 1 Each',
            price:1.29,

            image: "https://www.pexels.com/photo/woman-cutting-ripe-kiwi-on-chopping-board-in-sunshine-5945704/"
        },
        {
            name:'Large Pineaple, 1 Each',
            price:2.49,
            image: "https://www.pexels.com/photo/halved-tasty-tropical-pineapple-on-yellow-background-6157056/"

        
        },
        {
            name:'Tomatoes',
            price:1.99,
            image: "https://www.pexels.com/photo/two-tomatoes-373019/"
        },
        {
            name:'Potatoes',
            price:1.99,
            image: "https://www.pexels.com/photo/close-up-of-potatoes-4110464/"
        },
        {
            name:'Organic Ginger',
            price:1.49,
            image: "https://www.pexels.com/photo/fresh-ginger-10112135/"
        },
        {
            name:'Organic Scallions, 1 Each',
            price:1.49,
            image: "https://www.pexels.com/photo/sliced-onion-leeks-on-wooden-chopping-board-7225488/"
        },
        {
            name:'Yogurt',
            price:1.49,
            image: "https://www.pexels.com/photo/jar-with-delicious-plain-yogurt-and-wooden-spoon-on-saucer-4428349/" 
        },
        {
            name:'Bakery Bread, 20 Ounce',
            price:2.49,
            image: "https://www.pexels.com/photo/close-up-photo-of-three-baguettes-on-brown-wooden-surface-with-white-powder-1387070/"
            
        },
        {
            name:'Butter Croissants, 4ct',
            price:5.99,
            image: "https://www.pexels.com/photo/food-france-morning-breakfast-2135/"
        },
        {
            name:'Butter',
            price:3.99,
            image: "https://www.pexels.com/photo/person-slicing-butter-with-a-knife-7965898/"
        },
        {
            name:'Fresh Salmon, 1 Pound',
            price:13.99,
            image: "https://www.pexels.com/photo/brown-bread-on-black-plate-3296414/"
        },
        {
            name:'Tiger Shrimp',
            price:8.99,
            image: "https://www.pexels.com/photo/tempura-and-knife-3295856/"
        },
        {
            name:'Chicken Breasts, 5 Pound',
            price:13.99,
            image: "https://www.pexels.com/photo/close-up-shot-of-raw-chicken-breasts-6107729/"
        },
        {
            name:'Chicken Wings, 2.3 Pound',
            price:8.59,
            image: "https://www.pexels.com/photo/cutting-board-with-friend-chicken-5652264/"
        },
        {
            name:'New York Strip Steak, 1.4 Pound',
            price:20.99,
            image: "https://www.pexels.com/photo/red-meat-with-chili-pepper-and-green-spies-65175/"
        },
        
        
    ], console.log('Products seeded!'));


    db.collection('users').insertMany([
        {
            username: 'Test Testerson',
            email: "test@test.com",
            password: "12345"
        },
        {
            username: 'Cody Coder',
            email: "test2@test.com",
            password: "12345"
        },
        {
            username: 'Polly Programmer',
            email: "test3@test.com",
            password: "12345"
        }
    ], console.log('Users seeded!'));



    
    
=======
const mongoose = require("mongoose");

const db = require("../config/connection");

db.once("open", async () => {
  db.dropDatabase();

  db.collection("products").insertMany(
    [
      {
        name: "Eggs - Cargo Free, 18 Each",
        price: 5.0,
      },
      {
        name: "Milk - Fat free, 0.5 Gallon",
        price: 5.0,
      },
      {
        name: "Fresh Blueberries",
        price: 3.0,
        image:
          "https://images.pexels.com/photos/11294856/pexels-photo-11294856.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
      {
        name: "Organic Bananas",
        price: 1.29,
      },
      {
        name: "Fresh Mango, 1 Each",
        price: 0.9,
      },
      {
        name: "Fresh Kiwifruit, 1 Each",
        price: 1.29,
      },
      {
        name: "Large Pineaple, 1 Each",
        price: 2.49,
      },
      {
        name: "Tomatoes",
        price: 1.99,
      },
      {
        name: "Potatoes",
        price: 1.99,
      },
      {
        name: "Organic Ginger",
        price: 1.49,
      },
      {
        name: "Organic Scallions, 1 Each",
        price: 1.49,
      },
      {
        name: "Yogurt",
        price: 1.49,
      },
      {
        name: "Bakery Bread, 20 Ounce",
        price: 2.49,
      },
      {
        name: "Butter Croissants, 4ct",
        price: 5.99,
      },
      {
        name: "Fresh Salmon, 1 Pound",
        price: 13.99,
      },
      {
        name: "Tiger Shrimp",
        price: 8.99,
      },
      {
        name: "Chicken Breasts, 5 Pound",
        price: 13.99,
      },
      {
        name: "Chicken Wings, 2.3 Pound",
        price: 8.59,
      },
      {
        name: "New York Strip Steak, 1.4 Pound",
        price: 20.99,
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
>>>>>>> 564db97 (Fixed images)
});
