//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
  var x = 0;
  x = num * 2;
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):

(function() {
  var x = 5;

  console.log(double(6));
  console.log('The value of x is:', x, 'It should be 5.');

  function double (num) {
    var x = 0;
    x = num * 2;
    return x;
  }
})();

//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  var i = 0;
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

console.log(i); // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above

  /*
  The reason the x variable inside the function does not modify
  the global var x is because variables declared inside a function
  are local to that function. This means that even if x = x + 2 inside
  the addTwo() function returns 6 if addTwo(4), x is still 5 when
  called outside of the function addTwo(
  */
)
