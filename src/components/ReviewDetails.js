import React from 'react';
import {Field} from './Field';
import {StarRating} from './StarRating';

function ReviewDetails (props = {}) {
  return (
    <div className="ReviewDetails">
      <h5>{props.id}</h5>
      <h2>{props.rating}</h2>
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      {/* <p><strong>Love Count:</strong> {props.love_count}</p> */}
      <Field name="Love Count" value={props.love_count} />
      <Field name="Created At" value={props.created_date} />
      <Field name="Updated At" value={props.updated_date} />
      <StarRating max={5} rating={props.rating} />
    </div>
  );
}


export {ReviewDetails};
