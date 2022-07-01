import React from 'react';
import Card from './Card';

const product = {
    name:'Banana',
    price:'$2.99'

}

export default function display(){
    return(
        <div>
            <Card name={product.name} price={procudt.price}/>
        </div>
    )
}