const mongoose = require('mongoose');


const db = require('../config/connection');


db.once('open', async () => {


    db.dropDatabase();


    db.collection('products').insertMany([
        
        {
            name: 'Eggs - Cargo Free, 18 Each',
            price: 5.00
        },
        {
            name: 'Milk - Fat free, 0.5 Gallon',
            price: 5.00
        },
        {
            name: 'Fresh Blueberries',
            price: 3.00,
            image: "blueberry.jpg"
        },
        {
            name:'Organic Bananas',
            price:1.29
        },
        {
            name:'Fresh Mango, 1 Each',
            price:0.9
            
        },
        {
            name:'Fresh Kiwifruit, 1 Each',
            price:1.29
        },
        {
            name:'Large Pineaple, 1 Each',
            price:2.49
        
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



    
    
});




