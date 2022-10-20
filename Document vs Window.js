
"Window Objet:"
 
  The window object is the very first object of the DOM hierarchy. It represents a browser window that 
  displays the details of the webpage. Whenever a window appears on the screen to display the contents 
  of the document, the window object is created.

    Syntax: window.property_name;



"Document:"

    Document is nothing but each and every HTML elements used in the window. The document object 
    represent a web page that is loaded in the browser. By using the document object, we can access the 
    element in the HTML page. The document object can be accessed with a window.document or just document.

    Syntax:  document.property_name;


"Difference:"

-------------------------------------------------------------------------------------------------------------------------
                    Document                                    |                      Window Object
-------------------------------------------------------------------------------------------------------------------------
                                                                |
Document loads the data inside the Window which is              |   Where as, Window Object is the first loaded screen 
not visible                                                     |    in the browser which is visible to the user
                                                                | 
We can access the document from a window using the              |   We can access the window from the window only
window.document                                                 |   window.window
                                                                |
It is the object of window property.                            |   It is browser's object
                                                                |
All the HTML elements only will come under documents            |   All the Javascript functions, methods and variable
                                                                |   will fall under the window.
                                                                |
Document is part of a Browser Object model as well as           |   Browser is a part of Browser Object Model Only.
Document Object Model.                                          |
                                                                |
------------------------------------------------------------------------------------------------------------------------                                                                