![[Pasted image 20231122180407.png]]
Everything is a box.


- `padding` increases the space between the border of a box and the content of the box.
- `margin` increases the space between the borders of a box and the borders of adjacent boxes.
- `border` adds space (even if it’s only a pixel or two) between the margin and the padding.
- ![[Pasted image 20231122180647.png]]

### Inline
Inline boxes usually shouldn't have their margin or padding modified. And as the name suggests, are boxes in-line with the content
![[Pasted image 20231122182908.png]]

### Flex box
Given the 
`display: flex` property, "divs will ‘flex’. They will fill the available area and will each have equal width."
A flex container is any element that has `display: flex` on it. A flex item is any element that lives directly inside of a flex container.
Flex has three values,  `flex-grow`, `flex-shrink` and `flex-basis`
`flex: 2 1 auto` would make it so that this flex box would grow twice as large
### Axes
Use column property to change the flex direction of a box to be **vertical**
```css
.flex-container {
  flex-direction: column;
}
```

### Alignment
Important note on flex boxes:
`justify-content` aligns items horizontally (because the main axis defaults to horizontal), and `align-items` aligns them vertically

