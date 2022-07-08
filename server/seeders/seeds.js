
const mongoose = require('mongoose');


const db = require('../config/connection');


db.once('open', async () => {


    db.dropDatabase();


    db.collection('products').insertMany([
        
        {
            name: 'Eggs - Cargo Free, 18 Each',
            price: 5.00,
            image: "https://images.pexels.com/photos/4911724/pexels-photo-4911724.jpeg"

        },
        {
            name: 'Milk - Fat free, 0.5 Gallon',
            price: 5.00,
            image: "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: 'Fresh Blueberries',
            price: 3.00,
            image: "https://images.pexels.com/photos/583837/pexels-photo-583837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name:'Organic Bananas',
            price:1.29,

            image: "https://images.pexels.com/photos/2238309/pexels-photo-2238309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Fresh Mango, 1 Each',
            price:0.90,
            image: "https://images.pexels.com/photos/7788416/pexels-photo-7788416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            

        },

        {
            name:'Fresh Kiwifruit, 1 Each',
            price:1.29,

            image: "https://images.pexels.com/photos/5945704/pexels-photo-5945704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Large Pineaple, 1 Each',
            price:2.49,
            image: "https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        
        },
        {
            name:'Tomatoes',
            price:1.99,
            image: "https://images.pexels.com/photos/373019/pexels-photo-373019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Potatoes',
            price:1.99,
            image: "https://images.pexels.com/photos/4110464/pexels-photo-4110464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Organic Ginger',
            price:1.49,
            image: "https://images.pexels.com/photos/10112135/pexels-photo-10112135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Organic Scallions, 1 Each',
            price:1.49,
            image: "https://images.pexels.com/photos/7225488/pexels-photo-7225488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Yogurt',
            price:1.49,
            image: "https://images.pexels.com/photos/4428349/pexels-photo-4428349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        {
            name:'Bakery Bread, 20 Ounce',
            price:2.49,
            image: "https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        },
        {
            name:'Butter Croissants, 4ct',
            price:5.99,
            image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Butter',
            price:3.99,
            image: "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Fresh Salmon, 1 Pound',
            price:13.99,
            image: "https://images.pexels.com/photos/3296414/pexels-photo-3296414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Tiger Shrimp',
            price:8.99,
            image: "https://images.pexels.com/photos/3295856/pexels-photo-3295856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Chicken Breasts, 5 Pound',
            price:13.99,
            image: "https://images.pexels.com/photos/6107729/pexels-photo-6107729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'Chicken Wings, 2.3 Pound',
            price:8.59,
            image: "https://images.pexels.com/photos/5652264/pexels-photo-5652264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:'New York Strip Steak, 1.4 Pound',
            price:20.99,
            image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

