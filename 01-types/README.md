### :brain: 1. Variables Basics
Variables... see them as containers for storing data values. In JavaScript,
variables can hold different types of data (strings, numbers, booleans, etc.)
and their values can change over time.

#### Key Points:
- Use `let` for variables that will change
- Use `const` for constants (values that won't change)
- Variables names should be descriptive and follow camelCase convention
- Avoid using reserved keywords (like `let`, `const`, `var`) as variable names

#### Example Usage:
```javascript
// Basic variable declaration
let greeting = "Hello World";  // string type
const PI = 3.14;               // number type
let isLoggedIn = false;        // boolean type

// You can also declare variables without initialization
let firstName;
firstName = "John";
```

#### Try it! :construction_worker:
Open `./01-types/01-variables.js` and:

1. Modify the greeting message
2. Experiment with different variable names (try invalid ones to see errors)
3. Add new variables and see how hey behave

Feel free to break things, them fix hem! :wrench:

### :microscope: 2. Primitive Data Types
Primitive data types are the basic building blocks in JavaScript. They represent simple values and cannot be broken down into smaller components.

#### Key Points:
- JavaScript has 7 primitive data types:
  - `string`: Represents textual data.
  - `number`: Represents numerical data (integers, floats).
  - `boolean`: Represents true/false values.
  - `null`: Represents the absence of a value.
  - `undefined`: Represents variables that haven't been assigned a value yet.
  - `symbol`: Represents unique and immutable values (not covered here).
  - `bigint`: Represents large integers (not covered here).

#### Example Usage:
```javascript
let number = 1;           // Number type
let text = "Hello";       // String type
let boolTrue = true;      // Boolean type
let boolfalse = false;    // Boolean type
let noDef;                // Undefined type (variable not initialized)
let undef = undefined;     // Explicitly set to undefined
let nul = null;           // Null type
```
#### Try it! :construction_worker:

Open `./01-types/02-primitives.js` and:

1. Modify the values of the variables
2. Experiment with different primitive types (e.g., add a symbol or bigint)
3. Observe how JavaScript handles different data types

Feel free to explore and experiment! :electric_plug:

### :lock: 3. Constants (Immutable Variables)

Constants are variables that cannot be reassigned once declared. They are
defined using the `const` keyword and provide immutability which is useful for
values that should not change throughout the program.

#### Key Points:
- Use `const` when you want to declare a value that shouldn't change.
- Once assigned, constants cannot be reassigned.
- Constants can only be declared once per scope.

#### Example Usage:
```javascript
// Mutable variable with `let`
let text = "Hello";
text = "World"; // Reassignment is allowed
console.log(text); // Output: "World"

// Immutable constant declaration
const constExample = "Immutable Value";
constExample = "New Value"; // This will throw an error
```
#### Try it! :construction_worker:

Open `./01-types/03-constants.js` and:

1. Run the code to see how mutable (let) and immutable (const) variables behave.
2. Try modifying both types of variables in your editor.
3. Observe the results and understand why constants are useful for certain
scenarios.

Remember, use const when you want to enforce immutability and avoid accidental
modifications! :evergreen_tree:

### :computer: 4. Dynamic Typing and the `typeof` Operator

JavaScript's dynamic typing allows variables to change their data type during
runtime. This offers flexibility but requires careful consideration to avoid
unexpected behavior. The `typeof` operator is a valuable tool for inspecting
variable types.

#### Key Points:

- **Dynamic Typing:** Variables can hold values of different types throughout
the program's execution. This contrasts with statically-typed languages where
the type is fixed at compile time.
- **`typeof` Operator:**  Returns a string indicating the type of a variable.
Examples include "number", "string", "boolean", "undefined".
- **`typeof` Quirks with `null`:** A historical quirk in JavaScript causes
`typeof null` to return "object". This is due to a design decision made early
in JavaScript's development to maintain backward compatibility.
**Crucially,always use `=== null` for reliable null checks.**
- **Primitive vs. Structural Types:** JavaScript primarily deals with primitive
types (number, string, boolean, null, undefined, symbol, bigint).  "Structural
typing" (checking based on structure, not declared type) is implicitly used due
to dynamic typing.

#### Example Usage:

```javascript
let number = 31;         // Number type
let text = "Hello";      // String type
let tooTrue = true;      // Boolean type (true)
let tooFalse = false;    // Boolean type (false)
let undef;               // Undefined type (implicit)
let nll = null;         // Null (special case)

console.log(typeof number);  // Output: "number"
console.log(typeof text);    // Output: "string"
console.log(typeof tooTrue); // Output: "boolean"
console.log(typeof tooFalse); // Output: "boolean"
console.log(typeof undef);   // Output: "undefined"
console.log(typeof nll);    // Output: "object" (historical bug - use === null for null checks)

// Demonstrating dynamic typing:
// Uncommenting 'text = 42;' would change 'text' from a string to a number.
```

#### Try it! :construction_worker:
Open `./01-types/04-dynamic-typing.js` and:

1. Uncomment the line //text = 42; and observe the type of text using typeof.
2. Experiment with assigning different data types to variables and check their
types with typeof.
3. Understand and practice using === null instead of typeof nll === 'object'
for reliable null checks.

### :speech_balloon: 5. Comments: Best Practices

Comments play a crucial role in making code more understandable and 
maintainable. In JavaScript, there are two primary types of comments that serve
different purposes.

#### Key Points:

- **Block Comments (/** ... */):** 
  - Used for documentation and descriptive purposes.
  - Ideal for:
    - File or module-level documentation.
    - Function descriptions and JSDoc annotations.
    - Public API documentation.
  - Follow JSDoc standards to provide clear type definitions, parameters, and
  return values.

- **Line Comments (// ...):**
  - Used for brief in-line notes and temporary code exclusion.
  - Best for:
    - Debugging hints or explanations.
    - Temporary comments during development.
    - Short notes about specific implementation details.

#### Example Usage:

```javascript
/**
 * BLOCK COMMENT EXAMPLE (JSDoc Style)
 * @summary Calculates the sum of two numbers
 * @param {number} a First number to add
 * @param {number} b Second number to add 
 * @returns {number} The sum of `a` and `b`
 */
function sum(a, b) {
  return a + b; // LINE COMMENT: Temporary debug during development
}

// Example of best practice for line comments:
const PI = Math.PI; // Represents the mathematical constant π (pi)
```

#### Best Practices:
- Use JSDoc for Public Interfaces:
Document functions, classes, and modules with clear type annotations.
- Keep Line Comments Concise:
Limit to a maximum of 72 characters for readability.
- Avoid Obvious Comments:
No need to write i++ // increment i—the code is self-explanatory.
Focus on "Why" Not "What":
Comment on the reasoning behind decisions, not just what the code does.
Remove Debugging Comments:
Delete temporary comments before committing production code.

#### Try it! :construction_worker:
Open `./01-types/05-comments.js` and:

1. Add JSDoc comments to a function
2. Practice writing meaningful line comments
3. Follow the best practices guidelines for commenting
4. Remember, good comments make your code more understandable and maintainable
now and in the future! :white_check_mark:

#### :package: 6. Objects: Structure and Operations
Objects in JavaScript provide a structured way to store and manage collections
of related data. They encapsulate properties and methods, making code more
organized and maintainable.

Key Points:
- Object Literals:

  - Used to create objects directly using {} syntax.
  - Ideal for grouping related data (e.g., character information).

- Property Definition:

  - Properties consist of keys (strings) and values (any type).
  - Can be defined at creation or added later.

- Accessing Properties:

  - Dot Notation: object.property — Used for static property names.
  - Bracket Notation: object["property"] — Useful for dynamic property names
  based on variables or expressions.

- Updating Properties:

  - Direct assignment using dot notation is straightforward and preferred for
  readability when the property name is known at write-time.

- Deleting Properties:

  - Use the delete operator to remove properties from an object. This affects
  the object's structure and can impact code relying on the presence of that property.

- Best Practices:

  - Encapsulation: Group related data into objects to improve readability and
  maintainability.
  - Trailing Commas: Use trailing commas in object literals for easier
  reorganization and addition/removal of properties without causing syntax
  errors.
  - Immutability: Consider using const for objects where no changes are
  expected after creation. If modifications are necessary, create new objects
  instead of mutating the existing one to avoid unintended side effects.

#### Example Usage:
```javascript
// Creating an object with initial properties
const character = {
    name: "Ichigo",
    anime: "Bleach",
    age: 27
};

// Accessing properties using dot notation
console.log(character.name); // Output: Ichigo

// Updating a property using dot notation
character.age = 15;

// Accessing the same property using bracket notation (dynamic)
const prop = 'age';
console.log(character[prop]); // Output: 15

// Deleting a property
delete character.age; // Removes the age property from the object
```
#### Try it! :construction_worker:
Open `./01-types/06-objects.js`, `07-objects-2.js`, `08-objects-3.js` and:

1. Create an object representing a real-world entity (e.g., car, animal).
2. Practice accessing, updating, and deleting properties using both dot and
bracket notations.
3. Experiment with object methods by adding functions to your objects.

Remember, well-structured objects make code more readable and maintainable
especially in larger applications! :white_check_mark:

#### :package: 9. Arrays: Structure and Operations
Arrays in JavaScript are a fundamental data structure used to store collections
of related items. They provide dynamic resizing capabilities and efficient
access to elements based on their indices.

Key Points:
- Array Declaration:
  - Arrays can be declared using [] syntax for literals or the Array constructor.
  - Literal syntax is preferred for its simplicity and readability.

- Basic Operations:
  - Access elements using index notation ([]).
  - Add/remove elements using methods like push(), pop(), unshift(), and splice().

- Dynamic Resizing:
  - Arrays automatically resize when new elements are added beyond their current length.
  - Be cautious of sparse arrays (empty slots), which can lead to unexpected behavior in loops.

- Best Practices:
  - Use array methods (push(), map(), etc.) for safe modifications.
  - Avoid creating sparse arrays; use push() for appending elements.

#### Try It! :construction_worker:
Open `./01-types/09-arrays.js` and:

1. Declare an empty array and add elements using both direct assignment and push().
2. Practice accessing, updating, and deleting elements.
3. Experiment with dynamic resizing by assigning values to higher indices.
4. Use Array.isArray() to validate if variables are arrays.
5. Explore array methods like map(), filter(), and reduce().

Remember, effective use of arrays enhances code efficiency and readability
especially in data manipulation tasks! :white_check_mark:
