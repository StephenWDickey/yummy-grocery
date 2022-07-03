const mongoose = require('mongoose');


const Product = require ('../models');


const db = require('../config/connection');


db.once('open', async () => {




    await db.collection('Product').insertMany([
        {
            name: 'Eggs',
            price: 5.00
        },
        {
            name: 'Milk',
            price: 5.00
        },
        {
            name: 'Blueberries',
            price: 3.00
        }
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




