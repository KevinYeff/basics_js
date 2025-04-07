/**
 * VARIABLE DECLARATION DEMONSTRATION
 * 
 * Shows the difference between mutable (`let`) and immutable (`const`) bindings
 * in JavaScript ES6+.
 * 
 * @example
 * // Using let (mutable)
 * let variable = 'value';
 * variable = 'newValue'; // Allowed
 * 
 * // Using const (immutable)
 * const constant = 'value';
 * constant = 'newValue'; // TypeError: Assignment to constant variable
 */

// Mutable variable declaration with `let`
let text = "Hello";
text = "World"; // Valid reassignment

// Immutable variable declaration attempt with `const`
// const textConstant = "Hello";
// textConstant = "World"; // Would throw TypeError: Assignment to constant variable

console.log(text); // Output: "World"
