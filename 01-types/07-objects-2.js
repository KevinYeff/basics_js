/**
 * OBJECT LITERAL WITH METHODS DEMONSTRATION
 * 
 * Shows a complete object implementation including:
 * - Properties
 * - Methods (functions as properties)
 * - CRUD operations
 * - Encapsulation best practices
 */

// ======================================
// COMPLETE CHARACTER OBJECT IMPLEMENTATION
// ======================================
/**
 * Anime character object with integrated methods
 * @type {Object}
 * @property {string} nombre - Character name
 * @property {string} anime - Source anime title
 * @property {number} edad - Character age
 * @property {function} getDescription - Returns formatted string
 * @property {function} updateAge - Safe age modifier
 * 
 * @bestpractice
 * - Group related properties and methods
 * - Use method shorthand syntax
 * - Document parameters and return values
 */
const personaje = {
    // Properties
    nombre: "Ichigo Kurosaki",
    anime: "Bleach",
    edad: 27,
    
    /**
     * Generates a formatted character description
     * @method
     * @returns {string} Description in "Name (Anime)" format
     * 
     * @example
     * console.log(personaje.getDescription());
     * // Output: "Ichigo Kurosaki (Bleach)"
     */
    getDescription() {
        return `${this.nombre} (${this.anime})`;
    },
    
    /**
     * Safely updates character age with validation
     * @method
     * @param {number} newAge - Must be positive integer
     * @throws {TypeError} If age is invalid
     * 
     * @example
     * personaje.updateAge(17); // Valid
     * personaje.updateAge(-5); // Throws error
     */
    updateAge(newAge) {
        if (typeof newAge !== 'number' || newAge < 0) {
            throw new TypeError('Age must be positive number');
        }
        this.edad = newAge;
    }
};

// ======================================
// METHOD USAGE DEMONSTRATIONS
// ======================================
/**
 * METHOD CALL EXAMPLES:
 * 
 * 1. Description generator:
 *    - Uses template literals
 *    - Returns formatted string without side effects
 */
console.log(personaje.getDescription()); // "Ichigo Kurosaki (Bleach)"

/**
 * 2. Controlled property update:
 *    - Encapsulates validation logic
 *    - Prevents invalid states
 */
try {
    personaje.updateAge(25); // Success
    // personaje.updateAge(-5); // Would throw
} catch (error) {
    console.error('Update failed:', error.message);
}

// ======================================
// OBJECT OPERATIONS REVIEW
// ======================================
/**
 * COMPLETE INTERACTION GUIDE:
 * 
 * // Property access
 * personaje.nombre;  // "Ichigo Kurosaki"
 * 
 * // Method execution
 * personaje.getDescription(); 
 * 
 * // Type-safe update
 * personaje.updateAge(17);
 * 
 * // Property deletion (avoid with methods)
 * delete personaje.edad; // Not recommended for methods
 */

// ======================================
// ADVANCED BEST PRACTICES
// ======================================
/**
 * METHOD DESIGN PRINCIPLES:
 * 
 * 1. Single Responsibility: Each method does one thing
 * 2. Pure When Possible: Avoid side effects
 * 3. Validation: Protect object integrity
 * 4. Clear Naming: Verb-noun patterns (getX, updateY)
 * 
 * @warning Avoid arrow functions for methods
 * (they don't bind 'this' correctly)
 */
