/**
 * ARRAY FUNDAMENTALS DEMONSTRATION
 * 
 * Shows core JavaScript array behaviors including:
 * - Declaration and initialization
 * - Index-based access
 * - Dynamic resizing
 * - Type inspection
 * - Length property
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// ======================================
// 1. ARRAY DECLARATION
// ======================================
/**
 * Array initialization options:
 * @example
 * let empty = []; // Literal (preferred)
 * let constructed = new Array(); // Constructor (avoid)
 * 
 * @bestpractice 
 * - Use literal syntax []
 * - Initialize with data when possible
 */
let pcComponents = ['cpu', 'ram', 'video-card', 'motherboard'];

// ======================================
// 2. BASIC OPERATIONS
// ======================================
// Access first element (zero-indexed)
console.log(pcComponents[0]); // 'cpu'

/**
 * DYNAMIC RESIZING:
 * Arrays automatically grow when assigning to indexes
 * beyond current length, creating "empty slots"
 */
pcComponents[4] = "SSD"; // Valid (index 4)
pcComponents[8] = "Fans"; // Creates empty slots [5-7]

// ======================================
// 3. ARRAY CHARACTERISTICS
// ======================================
/**
 * TYPE INSPECTION:
 * Arrays are special objects (typeof returns 'object')
 * 
 * @propercheck Use Array.isArray() for validation:
 * console.log(Array.isArray(pcComponents)); // true
 */
console.log(typeof pcComponents); // 'object'

/**
 * LENGTH PROPERTY:
 * Always set to highest index + 1
 * (Includes empty slots in sparse arrays)
 */
console.log(pcComponents.length); // 9 (not actual element count)

// ======================================
// 4. WARNINGS AND EDGE CASES
// ======================================
/**
 * EMPTY SLOTS VS UNDEFINED:
 * - Unset indexes return undefined
 * - But are not the same as explicit undefined values
 */
console.log(pcComponents[6]); // undefined (empty slot)
console.log(pcComponents[6] === undefined); // true (but beware!)

/**
 * SPARSE ARRAY DANGERS:
 * - forEach/map skip empty slots
 * - Some methods behave unexpectedly
 * 
 * @recommendation Avoid creating sparse arrays
 * Use push() for safe additions
 */

// ======================================
// 5. BEST PRACTICES
// ======================================
/**
 * MODERN ARRAY HANDLING:
 * 
 * 1. Prefer array methods over manual indexing:
 *    pcComponents.push('SSD') // Safe append
 * 
 * 2. Use spread operator for copying:
 *    const copy = [...pcComponents]
 * 
 * 3. Validate arrays properly:
 *    Array.isArray(value)
 * 
 * 4. Avoid:
 *    - Sparse arrays
 *    - Direct length manipulation
 *    - new Array() constructor
 */

// ======================================
// 6. PERFORMANCE CONSIDERATIONS
// ======================================
/**
 * UNDER THE HOOD:
 * - Modern engines optimize dense arrays
 * - Sparse arrays may degrade performance
 * - Pre-allocate large arrays if size known:
 * 
 * @example
 * const bigArray = new Array(1000).fill(0);
 */

// Safe alternative to demonstrate
const components = ['cpu', 'ram', 'gpu'];
components.push('ssd'); // Safe addition
console.log('Array:', components);
