## 1) What is the difference between null and undefined?

undefined: The default value of a variable that has been declared but not yet assigned a value. It indicates the absence of a definition.

null: An assignment value that represents the intentional emptyness of any object value.

## 2) What is the use of the map() function in JavaScript? How is it different from forEach()?

map(): Returns a new array containing the results of calling a provided function on every element in the calling array.

forEach(): Executes a provided function once for each array element. It returns undefined and is typically used for side effects (e.g., logging to the console or saving to a database).

## 3) What is the difference between == and ===?

== (Abstract Equality): It attempts to convert the operands to a common type before comparing.

=== (Strict Equality): It returns true only if both the value and the data type are identical.

## 4) What is the significance of async/await in fetching API data?

async/await is a syntactic built on top of Promises, providing a more readable way to handle asynchronous operations like API calls.

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Global Scope: Variables declared outside any function or block. They are accessible from anywhere in the script.

Function Scope: Variables declared within a function (using var, let, or const) are only accessible inside that function.

Block Scope: Variables declared with let or const inside a block, cannot be accessed from outside that block.