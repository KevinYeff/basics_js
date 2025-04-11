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

