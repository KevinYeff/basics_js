/**
 * COMMENT TYPES IN JAVASCRIPT DEMONSTRATION
 * 
 * Shows the two primary comment styles in JavaScript with professional use cases.
 * 
 * @summary Documentation of JS comment syntax and best practices
 * @description
 * JavaScript supports:
 * 1. Block comments (documentation)
 * 2. Line comments (implementation notes)
 */

/**
 * BLOCK COMMENT (DOCUMENTATION)
 * 
 * Preferred for:
 * - File/function/module-level documentation
 * - JSDoc annotations (types, params, returns)
 * - Public API documentation
 * 
 * Format: /** ... *\/
 * 
 * @example
 * /** 
 *  * Calculates sum
 *  * @param {number} a - First value
 *  * @param {number} b - Second value
 *  * @returns {number} Sum result
 *  *\/
 * function sum(a, b) { return a + b; }
 */

// LINE COMMENT (IMPLEMENTATION)
// 
// Used for:
// - Code explanations inline
// - Temporary code exclusion
// - Short notes (72 chars max recommended)
// 
// Format: // ...

let number = 31; // Initialize primitive number value

console.log(number); // Debug current value (avoid in production)

/**
 * BEST PRACTICES:
 * 1. Use JSDoc for all public interfaces
 * 2. Keep line comments brief and relevant
 * 3. Avoid obvious comments ("i++ // increment i")
 * 4. Use comments for "why" not "what"
 * 5. Remove debug comments before committing
 */
