/**
 * OBJECT DESTRUCTURING DEMONSTRATION
 * 
 * Shows modern ES6+ techniques for extracting object properties
 * into distinct variables, including:
 * - Basic destructuring
 * - Aliasing variables
 * - Default values
 * - Nested destructuring
 */

// ======================================
// BASE OBJECT DEFINITION
// ======================================
/**
 * Complete anime character object
 * @type {Object}
 * @property {string} nombre - Character name
 * @property {string} anime - Source title
 * @property {number} edad - Character age
 * @property {Object} powers - Abilities mapping
 * @property {string} powers.primary - Main ability
 * @property {string[]} powers.secondary - Additional abilities
 */
const personaje = {
    nombre: "Ichigo Kurosaki",
    anime: "Bleach",
    edad: 27,
    powers: {
        primary: "Getsuga Tenshō",
        secondary: ["Hollow Mask", "Bankai"]
    },
    getDescription() {
        return `${this.nombre} (${this.anime})`;
    }
};

// ======================================
// DESTRUCTURING TECHNIQUES
// ======================================
/**
 * BASIC DESTRUCTURING:
 * Extract top-level properties into variables
 * 
 * @example
 * const { nombre, anime } = personaje;
 * console.log(nombre); // "Ichigo Kurosaki"
 */
const { nombre, anime } = personaje;
console.log('Basic:', nombre, anime);

/**
 * ALIASING VARIABLES:
 * Rename extracted properties
 * 
 * @usecase When variable names conflict
 */
const { nombre: characterName, anime: series } = personaje;
console.log('Aliased:', characterName, series);

/**
 * DEFAULT VALUES:
 * Fallback when property doesn't exist
 * 
 * @safety Protects against undefined values
 */
const { edad = 15, villano = false } = personaje;
console.log('With defaults:', edad, villano);

/**
 * NESTED DESTRUCTURING:
 * Extract values from nested objects and arrays.
 *
 * @note  Combine with aliasing and default values for robust extraction.
 * @note2 Directly access the second element of the 'secondary' array using array destructuring.
 * @note3 Alternative: Extract the entire 'secondary' array and then access the second element by index.
 */

// Example 0: Extract 'primary' with aliasing and a default value.
const { powers: { primary: primary0 = "Unknown Power" } = {} } = personaje;
console.log('Nested (First Element with Default):', primary0);

// Example 1: Extract 'primary' and the first element of 'secondary'.
const { powers: { primary: primary1, secondary: [firstPower] } } = personaje;
console.log('Nested (+ First Element of the secondary powers):', primary1, firstPower);

// Example 2: Extract 'primary' and the second element of 'secondary' directly (ignoring).
const { powers: { primary: primary2, secondary: [, secondPower2] } } = personaje;
console.log('Nested (+ Second Element Direct):', primary2, secondPower2);

// Example 3: Extract 'primary' and the entire 'secondary' array, then access the second element by index.
const { powers: { primary: primary3, secondary: powers } } = personaje;
const secondPower3 = powers[1];
console.log('Nested (+ Second Element Index):', primary3, secondPower3);

// ======================================
// PRACTICAL USE CASES
// ======================================
/**
 * FUNCTION PARAMETER DESTRUCTURING:
 * Clean way to accept object parameters
 * 
 * @param {Object} config - Character settings
 * @param {string} config.nombre - Required name
 * @param {number} [config.edad=18] - Optional age
 */
function printCharacter({ nombre, edad = 18 }) {
    console.log(`${nombre} (${edad} años)`);
}
printCharacter(personaje);

/**
 * REST OPERATOR:
 * Collect remaining properties
 * 
 * @warning Creates shallow copy
 */
const { edad: age, ...characterData } = personaje;
console.log('With rest operator:', age, characterData);

// ======================================
// BEST PRACTICES DOCUMENTATION
// ======================================
/**
 * DESTRUCTURING GUIDELINES:
 * 
 * 1. Use for cleaner property access
 * 2. Prefer over dot notation when:
 *    - Extracting multiple properties
 *    - Needing default values
 *    - Working with function parameters
 * 
 * 3. Avoid:
 *    - Over-nesting (hard to read)
 *    - Excessive aliasing (confusing)
 *    - Using with frequently changing objects
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// ======================================
// PERFORMANCE CONSIDERATIONS
// ======================================
/**
 * Under the hood:
 * - Destructuring creates temporary references
 * - No performance penalty in modern engines
 * - Babel transpilation can increase bundle size
 * 
 * @recommendation Use for readability
 * but avoid in hot code paths
 */
