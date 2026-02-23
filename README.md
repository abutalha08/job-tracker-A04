# JavaScript DOM & Event Handling Notes

This document explains some important JavaScript DOM selection methods and event concepts.

---

## 1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll

- The **getElementById** function selects an element based on a unique id and returns just that element.  
- The **getElementsByClassName** function selects elements based on their class name.  
- The **querySelector** function returns the first element that satisfies a CSS selector.  
- The **querySelectorAll** function returns all elements that match a CSS selector.

---

## 2. How do you create and insert a new element into the DOM?

In order to create and insert a new element, we can:

- Create a new HTML element using a built-in method.  
- Add text, attributes, and class names to the created element.  
- Insert the created element at a particular location using methods such as `append` and `prepend`.

---

## 3. What is Event Bubbling? How does it work?

Event Bubbling is a process where an event starts at an element where it is triggered and then bubbles up through all of its parent elements.  

When an event happens, the element for the event handles it first, then the parent, then the grandparent, and so on, up to the top level of the document tree. This is how most events work by default in JavaScript.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is the practice of attaching one event handler to a parent element instead of attaching many event handlers to its children.  

Event Delegation works because events bubble up the tree from the child to the parent.  

Event Delegation is useful because it makes the code more efficient, saves memory, simplifies the code, and makes it easy to handle newly added elements.

---

## 5. Difference between preventDefault() and stopPropagation()

- **preventDefault()** prevents the browser from performing the default action for the event.  
- **stopPropagation()** prevents the event from bubbling up the tree to the parent element.

---

## Author
Md. Abu Talha Taufique