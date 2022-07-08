<<<<<<< HEAD
const mongoose = require('mongoose');


const db = require('../config/connection');


db.once('open', async () => {


    db.dropDatabase();


    db.collection('products').insertMany([
        
        {
            name: 'Eggs - Cargo Free, 18 Each',
            price: 5.00,
            image:"https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            name: 'Milk - Fat free, 0.5 Gallon',
            price: 5.00,
            image:"https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1600"

        },
        {
            name: 'Fresh Blueberries',
            price: 3.00,
            image: "https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            name:'Organic Bananas',
            price:1.29,
            image:"https://images.pexels.com/photos/2875814/pexels-photo-2875814.jpeg?auto=compress&cs=tinysrgb&w=1600"

        },
        {
            name:'Fresh Mango, 1 Each',
            price:0.9,
            image:"https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1600"   
        },
        {
            name:'Fresh Kiwifruit, 1 Each',
            price:1.29,
            image:"https://media.istockphoto.com/photos/whole-kiwi-fruit-and-half-kiwi-fruit-on-white-picture-id834807852?b=1&k=20&m=834807852&s=612x612&w=0&h=bQMRlUIrza9y-VrePiiTu8TiWMeiFI9h3dNxUWHM0GI="
        },
        {
            name:'Large Pineapple, 1 Each',
            price:2.49,
            image:"https://media.istockphoto.com/photos/whole-pineapple-and-pineapple-slice-pineapple-with-leaves-isolate-on-picture-id1156645871?b=1&k=20&m=1156645871&s=612x612&w=0&h=naqUzYIcFf4wYmIFtvt1DZEVxjAG2Mk34vvC8mGLlyo="

        
        },
        {
            name:'Tomatoes',
            price:1.99
        },
        {
            name:'Potatoes',
            price:1.99
        },
        {
            name:'Organic Ginger',
            price:1.49
        },
        {
            name:'Organic Scallions, 1 Each',
            price:1.49
        },
        {
            name:'Yogurt',
            price:1.49
        },
        {
            name:'Bakery Bread, 20 Ounce',
            price:2.49
            
        },
        {
            name:'Butter Croissants, 4ct',
            price:5.99
        },
        {
            name:'Butter',
            price:3.99
        },
        {
            name:'Fresh Salmon, 1 Pound',
            price:13.99
        },
        {
            name:'Tiger Shrimp',
            price:8.99
        },
        {
            name:'Chicken Breasts, 5 Pound',
            price:13.99
        },
        {
            name:'Chicken Wings, 2.3 Pound',
            price:8.59
        },
        {
            name:'New York Strip Steak, 1.4 Pound',
            price:20.99
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
