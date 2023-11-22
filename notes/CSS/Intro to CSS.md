![[Pasted image 20231121232005.png]]
`*` is a universal selector

class selector when HTML elements have the `class="alert-text"`
```css
.alert-text {
  color: red;
}
```

ID Selectors, difference between classes and IDs are that IDs must be unique, there can only be one of each for each page
```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

Group selectors: We can use a comma to apply the same properties to the same classes
```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

This is called **chaining selectors**
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

We have two elements with the `subsection` class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has `header` as a second class? Well, we could chain both the class selectors together in our CSS like so:

```css
.subsection.header {
  color: red;
}
```

You can chain classes and ids
```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

You can layer with 
```css
.ancestor .contents {
  /* some declarations */
}
```
This means the class contents within the class ancestor will all be  affected. 
A comma will make these two separate classes. 

Adding the value of `auto` for height will allow it to automatically scale the height based on the width value
```css
img {
  height: auto;
  width: 500px;
}
```

In the header, add an external css link
```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```
Use this if you want Internal css but nah 
```css
<header>
	<style>
		/* css */
	</style>
</header>
```

