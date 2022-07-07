const mongoose = require('mongoose');


const db = require('../config/connection');


db.once('open', async () => {


    db.dropDatabase();


    db.collection('products').insertMany([
        
        {
            name: 'Eggs - Cargo Free, 18 Each',
            price: 5.00,
            image:"egg.webp"
        },
        {
            name: 'Milk - Fat free, 0.5 Gallon',
            price: 5.00,
            image:"Milk.webp"
        },
        {
            name: 'Fresh Blueberries',
            price: 3.00,
            image: "blueberry.jpg"
        },
        {
            name:'Organic Bananas',
            price:1.29,
            image:"Bananas.webp"
        },
        {
            name:'Fresh Mango, 1 Each',
            price:0.9,
            image:"Mango.webp"
            
        },
        {
            name:'Fresh Kiwifruit, 1 Each',
            price:1.29,
            image:"Kiwifruit.jpg"
        },
        {
            name:'Large Pineaple, 1 Each',
            price:2.49,
            image:"Pineaple.jpg"
        
        },
        {
            name:'Tomatoes',
            price:1.99,
            image:"Tomatoes.jpg"
        },
        {
            name:'Potatoes',
            price:1.99,
            image:"Potatoes.jpg"
        },
        {
            name:'Organic Ginger',
            price:1.49,
            image:"Ginger.jpeg"
        },
        {
            name:'Organic Scallions, 1 Each',
            price:1.49,
            image:"Scallions.webp"
        },
        {
            name:'Yogurt',
            price:1.49,
            image:"Yogurt.webp"
        },
        {
            name:'Bakery Bread, 20 Ounce',
            price:2.49,
            image:"Bread.jfif"
            
        },
        {
            name:'Butter Croissants, 4ct',
            price:5.99,
            image:"Butter Croissants.jpeg"
        },
        {
            name:'Fresh Salmon, 1 Pound',
            price:13.99,
            image:"Salmon.jfif"
        },
        {
            name:'Tiger Shrimp',
            price:8.99,
            image:""
        },
        {
            name:'Chicken Breasts, 5 Pound',
            price:13.99,
            image:"Tiger Shrimp.jpg"
        },
        {
            name:'Chicken Wings, 2.3 Pound',
            price:8.59,
            image:"Chicken wings.jpeg"
        },
        {
            name:'New York Strip Steak, 1.4 Pound',
            price:20.99,
            image:"steak.webp"
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




