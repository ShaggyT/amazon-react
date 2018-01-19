import React from 'react';
import {ProductDetails} from './ProductDetails';
import {ReviewDetails} from './ReviewDetails';
import {ReviewList} from './ReviewList';
import product from '../data/product';

function ProductShowPage () {
  const {reviews = []} = product;
  return (
    <main className="ProductShowPage"
      style={{
      padding: '0 20px'
      }}
      >
      {/* <ProductDetails
        id = {100}
        title="What is your favourite colour?"
        description="Red, magenta, blue, indigo, purple, etc."
        price={1000}
        sale_price ={800}
        author={{full_name: "Jon Snow"}}
        created_date="2017-01-01"
        updated_date="2017-01-01"
      /> */}
      <ProductDetails {...product} />
      <h4>Reveiws</h4>

      {/* <ReviewDetails
        id = {1}
        body="Red, magenta, blue, indigo, purple, etc."
        created_date="2017-01-01"
        updated_date="2017-01-01"
        rating={1000}
        love_count ={2000}
        author_full_name= "Jon Snow"
      /> */}
      <ReviewList reviews={reviews} />
   </main>
 );
}


export {ProductShowPage};
