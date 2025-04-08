/**
 * OBJECT LITERAL DEMONSTRATION
 * 
 * Shows the transformation from discrete variables to an organized object structure,
 * following encapsulation principles for character data, including CRUD operations.
 * 
 * @example
 * // Before: Unrelated variables
 * let name = "Ichigo";
 * let anime = "Bleach";
 * 
 * // After: Encapsulated object with full operations
 * const character = {
 *   name: "Ichigo",
 *   anime: "Bleach",
 *   age: 27
 * };
 */

// ======================================
// INITIAL APPROACH: DISCONNECTED VARIABLES
// ======================================
// Problem: No logical relationship between variables
let nombre = "Ichigo";
let anime = "Bleach";
let edad = 27;

// ======================================
// IMPROVED APPROACH: OBJECT LITERAL
// ======================================
/**
 * Character object definition
 * @type {Object}
 * @property {string} nombre - Character name
 * @property {string} anime - Source anime
 * @property {number} edad - Character age
 * 
 * @bestpractice
 * - Always use trailing commas for easier version control
 * - Group related properties logically
 * - Prefer const for object declarations (mutability allowed)
 */
const personaje = {
    nombre: "Ichigo",  // Character name (string)
    anime: "Bleach",   // Source media (string)
    edad: 27,         // Age in years (number)
    // Trailing comma benefits:
    // 1. Clean git diffs (single line changes)
    // 2. Easier property reordering
    // 3. Simpler future additions
};

// ======================================
// OBJECT OPERATIONS DEMONSTRATION
// ======================================
/**
 * PROPERTY UPDATE EXAMPLES:
 * 
 * Two equivalent syntaxes for property updates:
 * 1. Dot notation (preferred for static properties)
 * 2. Bracket notation (required for dynamic properties)
 */
personaje.edad = 15;       // Dot notation (direct access)
personaje['edad'] = 25;    // Bracket notation (dynamic access)

/**
 * PROPERTY DELETION:
 * 
 * Uses the `delete` operator:
 * - Removes property completely from object
 * - Returns boolean indicating success
 * - Affects property existence checks ('edad' in obj)
 * 
 * @warning Changes object structure (may break code expecting the property)
 */
delete personaje.edad;     // Remove property entirely

// Verify object state after operations
console.log(personaje);    // Logs current object state

// ======================================
// OBJECT USAGE BEST PRACTICES
// ======================================
/**
 * COMPLETE CRUD OPERATIONS:
 * 
 * Create: { prop: value } declaration
 * Read: obj.prop or obj['prop']
 * Update: obj.prop = newValue
 * Delete: delete obj.prop
 * 
 * @recommendation For immutable updates, consider:
 * const updated = { ...personaje, edad: 28 } // Spread operator
 */
