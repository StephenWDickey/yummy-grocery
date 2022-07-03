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


    db.close();
    
});




