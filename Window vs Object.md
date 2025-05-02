# Difference Between Document and Window Objects

In every browser, there are two main global objects you use a lot: the **window** object and the **document** object. Though they work together, each one has its own role. Here is a simple explanation with examples.


## Window Object

The **window** object is the very first object in the browser’s JavaScript world. It represents the browser window or tab where your page appears. As soon as you open a page, the browser creates this object.

=> Purpose: Control the browser window itself (size, alerts, timers, navigation).  
=> To access: Use `window.propertyName` or `propertyName` since global variables are properties of `window`.

## Document Object

The **Document** object represents the **web page content** (HTML) inside the browser window. It is used to read or change any element on the page.

=> Purpose:Access and modify HTML elements, text, styles, and respond to events.  
=> How to access: Use `document.propertyName` or `window.document.propertyName`.

## Comparison

| Aspect                | document                                              | window                                                   |
|-----------------------|-------------------------------------------------------|----------------------------------------------------------|
| **Represents**        | The web page (HTML elements, text, styles)            | The browser window or tab                                |
| **Access syntax**     | document or window.document                           | window or just global names                              |
| **Main use**          | Read or change page content                           | Manage browser features (dialogs, navigation, timers)    |
| **Belongs to**        | DOM (Document Object Model)                           | BOM (Browser Object Model)                               |
| **Contains**          | HTML elements, nodes, document metadata               | Global variables, functions, timers, location, history   |
| **Examples of usage** | document.getElementById(), document.createElement()   | window.alert(), window.setTimeout(), window.location     |


## When to Use Which

1. **Use `document`** when you want to work with the page’s content:  
   - Change text, style, or structure of HTML.  
   - Attach event listeners to buttons, forms, etc.

2. **Use `window`** when you want to control the browser environment:  
   - Show pop-up alerts or confirmations.  
   - Redirect to another URL.  
   - Set timers or intervals.
