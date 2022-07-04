const mongoose = require('mongoose');


const Product = require ('../models');


const db = require('../config/connection');


db.once('open', async () => {




    await db.collection('Product').insertMany([
        {
            name: 'Eggs - Cargo Free, 18 Each',
            price: 5.00/ea
        },
        {
            name: 'Milk - Far free, 0.5 Gallon',
            price: 5.00/ea
        },
        {
            name: 'Fresh Blueberries',
            price: 3.00/lb
        },
        {
            name:"Organic Bananas",
            price:1.29/lb
        },
        {
            name:"Fresh Mango, 1 Each",
            price:0.9/ea,
            was:1.59/ea
        },
        {
            name:"Fresh Kiwifruit, 1 Each",
            price:1.29/ea
        },
        {
            name:"Large Pineaaple, 1 Each",
            price:2.49/ea,
            was:2.99/ea
        },
        {
            name:"Tomatoes",
            price:1.99/lb
        },
        {
            name:"Patatoes",
            price:1.99/lb
        },
        {
            name:"Organic Giner",
            price:1.49/lb
        },
        {
            name:"Organic Scallons, 1 Each",
            price:1.49/ea
        },
        {
            name:"Yourt",
            price:1.49/ea
        },
        {
            name:"Bakey Bread, 20 Ounce",
            price:2.49/ea,
            was:3.99/ea
        },
        {
            name:"Butter Croissants, 4ct",
            price:5.99/ea
        },
        {
            name:"Fresh Salmon, 1 Pound",
            price:13.99/lb
        },
        {
            name:"Tiger Shrimp",
            price:8.99/lb
        },
        {
            name:"Chicken Breasts, 5 Pound",
            price:13.99/ea
        },{
            name:"Chicken Wings, 2.3 Pound",
            price:8.59/ea
        },{
            name:"New York Strip Steak, 1.4 Pound",
            price:20.99/ea
        },
        
        
    ], console.log('Products seeded!'));


    await db.collection('User').insertMany([
        {
            username: 'Test Testerson',
            email: "test@test.com"
        },
        {
            username: 'Cody Coder',
            email: "test2@test.com"
        },
        {
            username: 'Polly Programmer',
            email: "test3@test.com"
        }
    ], console.log('Users seeded!'));


    await db.collection('products').insertMany([
        {
            name: 'Milk',
            price: 5.00,
            quantity: 2
        },
        {
            name: 'Eggs',
            price: 5.00,
            quantity: 3
        }
    ], console.log('Product Orders seeded!'));


    db.close();
    
});




