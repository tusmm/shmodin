- Creating objects.
- Accessing object properties.
- Being able to use multiple object operators.
- Being able to use some powerful array functions.

### Creating objects
https://javascript.info/object
Objects hold entities with heterogeneous datatypes

Empty object can be defined as such:
```javascript
let user = new Object(); // "object constructor" 
let user = {}
```

Giving it literals and properties can be done as so:
```javascript
let user = {        // the object
	name: "John",   // by key, 'name' store value 'John'
	age: 30         // by key, 'age' store value 30
};
```

`user.name`, `user.age` allows us to access and get the value of the object

We can add to the object with dot notation:
```javascript
user.isAdmin = true;
```

Makes the user object now have the `isAdmin` property assigned to `true`

To remove a property, 
```javascript
delete user.age
```
deletes the user age property

---

Objects can have multi-worded property names but they have to be quoted:
```javascript
let user = {
	name: "JOhn",
	age: 30,
	"likes birds": true
}
// set
user["likes birds"] = true;

// get
user["likes birds"]

// delete
delete user["likes birds"]
```

You can also use assign keys to variables and use the variables 
```javascript
let key = "name"

user[key] = true // sets the user.name = true

user.key // ERROR
```

**Computed Properties**
```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
	[fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"

// can also be more complex
let fruit2 = 'apple';
let bag2 = {
	[fruit + 'Computers']: 5 // bag2.appleComputers = 5
}
```

**Shorthand**
To assign properties while looking cleaner:
```javascript
function makeUser(name, age) {
	return {
		name,  // same as name: name
		age,   // same as age: age
		// ..
	};
}

let user = {
	name,     // same as name: name
	age: 30
};
```
A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

`in` operator is to test if the property exists
```javascript
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists

alert( "blabla" in user ); // false, user.blabla doesn't exist
```

**Looping**
```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```
Object keys are ordered if integers, however, non integer properties are listed in creation order

### Array
https://www.youtube.com/watch?v=HB1ZC7czKRs
https://javascript.info/array-methods

```js
let arr = ["I", "go", "home"];

  

delete arr[1]; // remove "go"

  

alert( arr[1] ); // undefined


// now arr = ["I",  , "home"];
alert( arr.length ); // 3
```
Behavior of deleting an element from an array^

```js
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]
```
[`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) will return a more expected behavior of modifying the array as well