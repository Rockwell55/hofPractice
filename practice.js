// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var copy = [];

  _.each(fruits, function(item) {
    copy.push(item);
  });

  return copy;
};



// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(item) {
    if (item % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(item) {
    return item === targetFruit;
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(item) {
    return item[0].toUpperCase() === letter.toUpperCase();
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(item) {
    return item.cookie;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(accumulator, item) {
    return accumulator + Number(item.price.substring(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(accumulator, item) {
    // if that type is in the accumulator then add 1
    if (accumulator[item.type]) {
      accumulator[item.type]++;
    } else {
      // if there are none of that type in the accumulator then make it equal to 1
      accumulator[item.type] = 1;
    }
    return accumulator;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(accumulator, item) {
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      accumulator.push(item.title);
    }
    return accumulator;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(accumulator, item) {
    // if (accumulator === true) {
    //   return true;
    // }
    if (item.runtime < timeLimit) {
      accumulator = true;
    }
    return accumulator;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(item) {
    return item.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  // if ingredients contain flour then glutenFree: false
  return _.map(desserts, function(item) {
    if (item.ingredients.includes('flour')) {
      item.glutenFree = false;
    } else {
      item.glutenFree = true;
    }
    return item;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(item) {
    item.salePrice = Number(item.price.substring(1)) * (1 - coupon);
    item.salePrice = '$' + Math.round(item.salePrice * 100) / 100;
    return item;
  });
};

























// // This repo is optional extra practice to use the underscore functions.
// // Here we'll be writing new functions, but these functions will use
// // the underscore functions within them.

// /*
//  *
//  *  _.each
//  *
//  */

// // use _.each to create a copy of the given array.
// var moreFruits = function(fruits) {
//   var results = [];

//   _.each(fruits, function(fruit, index, collection) {
//     results.push(fruit);
//   });

//   return results;
// };

// // use _.each to traverse the number array and determine
// // which are multiples of five.
// var multiplesOfFive = function(numbers) {
//   var count = 0;
//   _.each(numbers, function(number, index, collection) {
//     if (number % 5 === 0) {
//       count++;
//     }
//   });
//   return count;
// };

// /*
//  *
//  *  _.filter
//  *
//  */

// // use _.filter to return the fruits array with only the desired fruit.
// var onlyOneFruit = function(fruits, targetFruit) {
//   var result = _.filter(fruits, function(fruit) {
//     return fruit === targetFruit;
//   });
//   return result;
// };

// // use _.filter to return the fruits array with only fruits
// // starting with the letter 'P'.
// var startsWith = function(fruits, letter) {
//   var result = _.filter(fruits, function(fruit) {
//     return fruit[0] === letter;
//   });
//   return result;
// };

// // return a filtered array containing only cookie-type desserts.
// var cookiesOnly = function(desserts) {
//   var result = _.filter(desserts, function(dessert) {
//     return dessert.type === 'cookie';
//   });
//   return result;
// };

// /*
//  *
//  *  _.reduce
//  *
//  */

// // return the total price of all products.
// var sumTotal = function(products) {
//   var result = _.reduce(products, function(accumulator, product) {
//     return accumulator + Number(product.price.replace('$', ''));
//   }, 0);
//   return result;
// };

// // return an object consisting of dessert types and how many of each.
// // exampleOutput: { dessertType: 3, dessertType2: 1 }
// var dessertCategories = function(desserts) {
//   var result = _.reduce(desserts, function(total, dessert) {
//     // check if there is a count of the type
//     if (!total[dessert.type]) {
//       total[dessert.type] = 0;
//     }
//     // add the count to the total count of all types
//     total[dessert.type] += 1;
//     // return the total count
//     return total;
//   }, {});
//   return result;
// };

// // given an array of movie data objects,return an array containing
// // movies that came out between 1990 and 2000.
// // TIP: use an array as your accumulator - don't push to an external array!
// var ninetiesKid = function(movies) {
//   var result = _.reduce(movies, function(accumulator, movie) {
//     if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
//       accumulator.push(movie.title);
//     }
//     return accumulator;
//   }, []);
//   return result;
// };

// // return an boolean stating if there exists a movie with a shorter
// // runtime than your time limit.
// // timeLimit is an integer representing a number of minutes.
// var movieNight = function(movies, timeLimit) {
//   var result = _.reduce(movies, function(accumulator, movie) {
//     if (accumulator) {
//       return true;
//     }
//     return movie.runtime < timeLimit;
//   }, false);
//   return result;
// };

// /*
//  *
//  *  _.map
//  *
//  */

// // given an array of strings, use _.map to return a new array containing all
// // strings converted to uppercase letters.
// var upperCaseFruits = function(fruits) {
//   var result = _.map(fruits, function(fruit) {
//     return fruit.toUpperCase();
//   });
// };

// // given an array of dessert objects, return a new array of objects
// // that have a new "glutenFree" property, with a boolean value.
// // TIP: Items that contain flour are not gluten-free.
// var glutenFree = function(desserts) {
//   var result = _.map(desserts, function(dessert) {
//     if (dessert.ingredients.includes('flour')) {
//       dessert.glutenFree = false;
//     } else {
//       dessert.glutenFree = true;
//     }
//   });
//   return desserts;
// };

// // use _.map to return an array of items with their sale prices, with a new property
// // containing the sale price. round any decimals to 2 places.
// //
// // having trouble with decimals? check out this article:
// // http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
// //
// /*

//  example output:
//   var salePrices = applyCoupon(groceries, 0.20);
//   [
//     {
//       id: 1,
//       product: 'Olive Oil',
//       price: '$12.1',
//       salePrice: '$9.61'
//     }
//   ];

// */
// var applyCoupon = function(groceries, coupon) {
//   var result = _.map(groceries, function(item) {
//     item.salePrice = '$' + Math.round(Number(item.price.replace('$', '')) * 100 * (1 - coupon)) / 100;
//   });
//   return groceries;
// };



