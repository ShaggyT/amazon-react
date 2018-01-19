import React from 'react';
import {Field} from './Field';
import products from '../data/products';

function ProductIndexPage (props) {
  return (
  <main
        className="ProductIndexPage"
        style={{padding: '0  20px'}}
      >
        <h2>Products</h2>
        <ul style={{paddingLeft: '10px'}}>
          {
            products.map(product => (
              <li key={product.id}>
                <a href="">{product.title}</a>
                <Field name="Author" value={product.author.full_name} />
              </li>
            ))
          }
        </ul>
      </main>
  );
}



export {ProductIndexPage};
