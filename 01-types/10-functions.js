/**
 * FUNCTION FUNDAMENTALS DEMONSTRATION
 * 
 * Shows core JavaScript function behaviors including:
 * - Declaration and initialization
 * - Parameter handling
 * - Return values
 * - Scope and hoisting
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 */

// ====================================== 
// 1. FUNCTION DECLARATION
// ======================================
/**
 * Function declaration syntax:
 * function functionName() { ... }
 */
function greetings() {
    console.log("Hi, this is awesome!");
}

// Invoke the function:
greetings();

// ====================================== 
// 2. BASIC OPERATIONS
// ======================================
/**
 * RETURN VALUES:
 * Functions can return values using the return statement.
 */
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8

// ====================================== 
// 3. PARAMETERS AND ARGUMENTS
// ======================================
/**
 * Parameters are defined inside the function:
 * function functionName(parameters) { ... }
 */
function calculateAge(yearOfBirth, currentYear = 2023) {
    return currentYear - yearOfBirth;
}

console.log(calculateAge(1990)); // Output: 33 (if currentYear is 2023)
console.log(calculateAge(1990, 2024)); // Output: 34

// ====================================== 
// 4. SCOPE AND HOISTING
// ======================================
/**
 * FUNCTION SCOPE:
 * Functions have their own scope, which includes:
 * - Parameters
 * - Variables declared with let, const, or var inside the function
 */
function exampleScope() {
    let x = 5;
    console.log(x); // Output: 5
}

exampleScope();

// Global variables are accessible inside functions:
let globalVar = 10;

function usingGlobal() {
    console.log(globalVar + 5); // Output: 15 (if globalVar is 10)
}

usingGlobal();

// ====================================== 
// 5. BEST PRACTICES
// ======================================
/**
 * MODERN FUNCTION HANDLING:
 * 
 * 1. Use const for function declarations when possible:
 *    const functionName = () => { ... };
 * 
 * 2. Prefer arrow functions for concise syntax:
 *    const add = (a, b) => a + b;
 * 
 * 3. Validate inputs with type checks if needed:
 *    if (typeof parameter !== 'number') return;
 */
const multiply = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a * b;
};

console.log(multiply(5, 3)); // Output: 15

// ====================================== 
// 6. PERFORMANCE CONSIDERATIONS
// ======================================
/**
 * UNDER THE HOOD:
 * - Functions are objects in JavaScript.
 * - Function hoisting can affect the order of execution.
 */
function hoistedFunction() {
    console.log("I am hoisted!");
}

// Hoisting demonstration (use with caution):
hoistedFunction(); // Outputs: "I am hoisted!"

var hoistedFunction;

// ====================================== 
// 7. WARNING AND EDGE CASES
// ======================================
/**
 * DANGER ZONE:
 * - Avoid using function declarations inside loops for performance reasons.
 * - Be cautious with variable hoisting in functions.
 */
function dangerZone() {
    let x = 5;
    if (Math.random() > 0.5) {
        x++;
    }
    return x;
}

console.log(dangerZone()); // Could be 6 or remains 5 based on random

// ====================================== 
// 8. ADVANCED CONCEPTS
// ======================================
/**
 * FUNCTION EXPRESSIONS:
 */
const functionName = function () { /* ... */ };

/**
 * IIFE (Immediately Invoked Function Expression):
 */
(function () {
    console.log("I run immediately!");
})();
