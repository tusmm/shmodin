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

### DOM Manipulation and Events
DOM is the Document Object Model which is a tree like representation of the contents of the webpage. 

### Target nodes with selectors
Using selectors:
```javascript
const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
```
Identifying a certain node based on its relationships to the nodes around it. 

When your HTML code is parsed by a web browser, it is converted to the DOM as was mentioned above. One of the primary differences is that these nodes are objects that have many properties and methods attached to them. These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript.
#### Query selectors

- `element.querySelector(selector)` - returns a reference to the first match of _selector_.
- `element.querySelectorAll(selectors)` - returns a “nodelist” containing references to all of the matches of the _selectors_.
	- It’s important to note that when using querySelectorAll, the return value is **not** an array. It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. The big distinction is that several array methods are missing from nodelists. One solution, if problems arise, is to convert the nodelist into an array. You can do this with `Array.from()` or the [spread operator.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
	

There are others, but these are general good ones. 

#### Element creation

- `document.createElement(tagName, [options])` - creates a new element of tag type tagName. `[options]` in this case means you can add some optional parameters to the function. Don’t worry about these at this point.
```javascript
const div = document.createElement('div');
```
This function does NOT put your new element into the DOM - it simply creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.
#### Append elements
- `parentNode.appendChild(childNode)` - appends _childNode_ as the last child of _parentNode_.
- `parentNode.insertBefore(newNode, referenceNode)` - inserts _newNode_ into _parentNode_ before _referenceNode_.
#### Remove elements
- `parentNode.removeChild(child)` - removes _child_ from _parentNode_ on the DOM and returns a reference to _child_.
#### Altering elements

When you have a reference to an element, you can use that reference to alter the element’s own properties. This allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information and more.
```javascript
const div = document.createElement('div');                     
// creates a new div referenced in the variable 'div'
```
#### Adding inline style
```javascript
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules
```
#### Editing attributes
```javascript
div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute
```

See MDN’s section on [HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) for more info on available attributes.
#### Working with classes
```javascript
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it
```
#### Adding text content
```javascript
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div
```
#### Adding HTML content
```javascript
div.innerHTML = '<span>Hello World!</span>';                   
// renders the HTML inside div
```

You can link the JavaScript file in the `<head>` of your HTML document. Use the `<script>` tag with the `src` attribute containing the path to the JS file, and include the `defer` keyword to load the file _after_ the HTML is parsed, as such:
```html
<head>
  <script src="js-file.js" defer></script>
</head>
```

### Events
You can specify function attributes directly on your HTML elements, you can set properties of form `on[eventType]` (`onclick`, `onmousedown`, etc.) on the DOM nodes in your JavaScript, or you can attach event listeners to the DOM nodes in your JavaScript. Event listeners are definitely the preferred method
```html
<button onclick="alert('Hello World')">Click Me</button>
```
Less ideal because it's in the html

This is a bit more optimal 
```html
<!-- the HTML file -->
<button id="btn">Click Me</button>
```

```javascript
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```

Best practice because there is more flexibility with multiple event listeners:
```html
<!-- the HTML file -->
<button id="btn">Click Me Too</button>
```

```javascript
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

Below is an example of a call back [HERE](https://dev.to/i3uckwheat/understanding-callbacks-2o9e).
```javascript
btn.addEventListener('click', function (e) {
  console.log(e);
});
```
The `e` in that function is an object that references the **event** itself. Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event’s **target** - the DOM node that was clicked.

Below is an example of adding event listeners to multiple elements
```html
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
```

```javascript
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```
