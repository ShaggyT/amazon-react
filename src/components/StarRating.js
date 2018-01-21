import React from 'react';
import {Star} from './Star';

function StarRating(props = {}) {
  const { max = 5, rating = 0 } = props;
  return (
    <div class="StarRating">
      {Array.from({ length: max }).map((v, i) => (
        <Star
          key={i}
          style={{
            height: '1.2em',
            color: i < rating ? 'pink' : 'lightgrey'
          }}
        />
      ))}
    </div>
  );
}

export {StarRating};


// Array.from("max").map((v, i) => "xxxx")
// (3) ["xxxx", "xxxx", "xxxx"]

// Array.from({length: 5}, (v, i) => i);
// (5) [0, 1, 2, 3, 4]
//
// Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array (or subclass object) that is being created. More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array. This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.
