### Include JS 
You can declare `<script></script>` in the body to have JS.
Or have a separate JS file and include by linking
```html
  <script src="javascript.js"></script>
```

### Variables
`var` There are subtle differences between `let` and `var`
`let`: common keyword for variables
`const` used for constant values
"The main difference is scoping rules. Variables declared by `var` keyword are scoped to the immediate function body (hence the function scope) while `let` variables are scoped to the immediate _enclosing_ block denoted by `{ }` (hence the block scope)." [stackoverflow](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope))
### Strings
https://www.w3schools.com/jsref/jsref_obj_string.asp
String method references

### Comparison
```js
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
```
![[Pasted image 20231123140414.png]]
Relational operators^^^

### Developer tools
inspect, 
create breakpoints,
can go to mobile view to see how it looks on different resolutions

### Functions
Example of function syntax with an argument and return value
```javascript
 function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
 }

 console.log(favoriteAnimal('Goat'))
```
Example of an anonymous function: Where a function expects to receive another function as a parameter. The function parameter is typically passed as an `anonymous function`
```javascript
(function () {
  alert("hello");
});

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```
Arrow functions:
```javascript
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```
if your function contains only one line that's a `return` statement, you can also omit the braces and the `return` keyword, and implicitly return the expression. In the following example we're using the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method of `Array` to double every value in the original array:
```javascript
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

### JS Execution
Two phases: Memory Allocation phase and Code Creation Phase
Variables are first all initialized to `undefined` in memory and functions have all the code copied over.
Ex: 
```javascript
var n = 2;
function square (num) {
	var ans = num * num;
	return ans;
}
var square2 = square(n)
var square4 = square(4)
```
Step 1: Memory allocation and Code Creation phase

| Memory             | Code |
| ------------------ | ---- |
| n: undefined       |      |
| square: { ... }    |      |
| square2: undefined |      |
| square4: undefined |      |

Step 2: Function Invocation and Execution Context Creation
Step 2.1. Initialize the 2 to n, then when we see a function, load the function into memory. When a function is invoked like `square2` in the example above, we are creating an Execution Context in section [phase 1](#####phase 1)

| Memory             | Code |
| ------------------ | ---- |
| n: 2       |   #####phase 1   |
| square: { ... }    |      |
| square2: undefined |      |
| square4: undefined |      |

##### phase 1: 
`var square2 = square(n)`
1. Create an execution table
2. initialize the function variables as undefined

| Memory | Code |
| ------ | ---- |
| num: undefined  |      |
| ans: undefined  |      |

3. Then replace the argument value if there is one, and then move to the next line

| Memory | Code |
| ------ | ---- |
| num: 2  |      |
| ans: undefined  |      |

4. Next, the computation is done in the code block and the undefined value in memory space representing `ans` will be replaced by the computation in the code block

| Memory | Code      |
| ------ | --------- |
| num: 2 | num * num |
| ans: 4 |           |

5. Code block is cleared after use, then a return is hit in the code. Now the whole control is returned back to the execution context where the function was invoked. Then the "sub" execution context in the code block will now be deleted as the function has been returned.

| Memory | Code      |
| ------ | --------- |
| num: 2 |  |
| ans: 4 |    return `ans`      |

| Memory             | Code |
| ------------------ | ---- |
| n: 2               |      |
| square: { ... }    |      |
| square2: 4         |      |
| square4: undefined |      |

6. Same process will happen when the new function invocation occurs.
	1. A brand new execution is created with a memory and code component
	2. Looks into the invoked function and allocates the the necessary memory, and it initializes it to `undefined`. In this case, `num` and `ans` are allocated and initialized to `undefined`.
	3. Any arguments are initialized. In this case, `num` is initialized to `4`.
	4. The code block computes whatever is in the function. In this case, `num * num` which initializes `ans` to `16`.
	5. Once the function hits a return, the sub execution context is destroyed and the `return` initializes the functions return value to the place in memory into the parent execution context. Resulting in:

| Memory          | Code |
| --------------- | ---- |
| n: 2            |      |
| square: { ... } |      |
| square2: 4      |      |
| square4: 16     |      |

### FizzBuzz

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```
