(HyperText Markup Language) defines the structure and content of webpages

Elements are containers for content. Opening and closing tags tell browser what content the element contains. Some elements don't have closing tags and are known as self-closing tags. [Link to tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### Boilerplate
How to write basic boilerplate for HTML doc?

When naming an HTML file, web servers will default look for an index.html page, so we should always have a file named that.
**DOCTYPE**: The purpose of this is to tell the browser what version of HTML to use for rendering the document. Which is `<!DOCTYPE html>`

After declaring a doctype, we need to add `<html>` element. This is known as the root element meaning t hat every other element in the doc will be a descendant of it. 
So far:
```html
<!DOCTYPE html>
<html lang="en">
</html>
```
`lang` specifies the language of the text content in the particular element.

`<head>` element is for meta-information about the webpage. No need to display anything in the header. 
* The `<meta>` element contains the charset encoding of the webpage. <meta charset="utf-8">. 
* The `<title>` element contains the webpage the tab title. 

The `<body>` element contains the content that will be displayed to the user. 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

### Working with text
- [How to create paragraphs](##### Paragraphs)
- [How to create headings](##### Headings)
- [How to create bold text](##### Strong)
- [How to create italicized text](##### Em elements)
- [The relationships between nested elements](##### Nesting and indentation)
- [How to create HTML comments](##### Comments)

##### Paragraphs
If you want new lines, to define paragraphs, use multiple print statements
```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.</p>
  </body>   
 </html>
```

##### Headings
6 Different levels of headings from `<h1>` to `<h6>`. 1 begin the largest, 6 being the smallest

##### Strong
`<strong>` surrounding text makes it bold. Can be used within other elements such as `<p>`

##### Em element
`<em>` surrounding text makes it italic. Same as strong, used within other elements

##### Nesting and indentation
Depending if it's within tags, elements will be nested in each other. Indentation is typically used to display this. 

##### Comments
```html
<!-- I am a html comment -->
```

### Lists
- [How to create an unordered list](##### Unordered lists)
- [How to create an ordered list](##### Ordered Lists)

##### Unordered lists
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

##### Ordered Lists
```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

### Links and Images

##### Links
Anchor element plus an `href` attribute that opens a link in a new tab. target attribute equaling `_blank` allows it to open in another tab. The `rel` attribute describes the relation between the current page and the linked document. "The `noopener` value prevents the opened link from gaining access to the webpage from which it was opened. The `noreferrer` value prevents the opened link from knowing which webpage or resource has a link (or ‘reference’) to it. It also includes the `noopener` behaviour and thus can be used by itself as well."
```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noopener noreferrer">click me</a>
```

**Reference another file in current directory**
```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```
##### Images
attribute linked to an external image
```html
 <img src="https://www.theodinproject.com/mstile-310x310.png">
```
attribute linked to a local image file
```html
<body>
  <h1>Homepage</h1>
	<a href="https://www.theodinproject.com/about">click me</a>

	<a href="./pages/about.html">About</a>

	<img src="./images/dog.jpg">
</body>
```

Include `alt` for every image so that screen readers can read it
```html
 <img src="https://www.theodinproject.com/mstile-310x310.png" alt="The Odin Project Logo" height="310" width="310">
```
height and width can be defined to give the image defined size
