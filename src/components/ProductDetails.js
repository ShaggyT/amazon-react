import React from 'react';
import {Field} from './Field';

function ProductDetails (props = {}) {
  const {author = {}} = props;
  const containerStyle = {
    paddingLeft: "10px"
   };
  return (
    <div className="ProductDetails">
        <h5>{props.id}</h5>
        <h2>{props.title}</h2>
        <div style={containerStyle}>
        <p>{props.description}</p>
          {/* <p>Author: {props.author.full_name}</p> */}
          <Field name="Author" value={props.author.full_name} />
          {/* <p>Author: {author.full_name}</p> */}
          {/* <p><strong>Price:</strong> {props.price}</p> */}
          <Field name="Price" value={props.price} />
          {/* <p><strong>Sale Price:</strong> {props.sale_price}</p> */}
          <Field name="Sale Price" value={props.sale_price} />
          <Field name="Created At" value={props.created_date} />
          <Field name="Updated At" value={props.updated_date} />
        </div>
    </div>
  );
}


export {ProductDetails};
