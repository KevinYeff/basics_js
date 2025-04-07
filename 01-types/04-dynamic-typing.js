/**
 * DYNAMIC TYPING AND TYPE OPERATOR DEMONSTRATION
 * 
 * Shows JavaScript's dynamic typing nature and the behavior of the `typeof` operator
 * with different primitive values and special cases.
 * 
 * Key Concepts:
 * - Dynamic typing (variables can change types)
 * - `typeof` operator quirks
 * - Primitive vs. structural types
 */

// Variable declarations demonstrating different primitive types
let number = 31;          // Number type
let text = "Hello";       // String type
let tooTrue = true;       // Boolean type (true)
let tooFalse = false;     // Boolean type (false)
let undef;                // Undefined type (implicit)
let nll = null;          // Null (special case)

// Dynamic typing demonstration
// text = 42; // Uncomment to see dynamic typing in action
// console.log(text); // Would show 42 (type changed from string to number)

// Type checking using typeof operator
console.log(typeof number);   // "number"
console.log(typeof text);     // "string"
console.log(typeof tooTrue);  // "boolean"
console.log(typeof tooFalse); // "boolean"
console.log(typeof undef);    // "undefined"
console.log(typeof nll);     // "object" (historical bug)

/**
 * WHY NULL RETURNS "OBJECT":
 * 
 * This is a known historical bug in JavaScript that persists for backward compatibility.
 * In the original implementation, values were represented as:
 * - Type tags (1-3 bits) + actual value
 * - Objects: 000
 * - Null: machine code NULL pointer (0x00 in most platforms)
 * 
 * Thus, null was misidentified as an object due to its type tag.
 * 
 * Technical Details:
 * - ECMAScript spec explicitly defines this behavior (typeof null === "object")
 * - Cannot be fixed without breaking existing code
 * - Use `=== null` for proper null checking
 * 
 * @see https://2ality.com/2013/10/typeof-null.html
 */

// Recommended null check:
if (nll === null) {
  console.log("This is the proper way to check for null");
}
