/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

//Create a function replaceText which accepts two parameters: an element and a string. The function should set the content of the given element to the given string
function replaceText(elem, str) {
    elem.textContent = str;
}

//Create a function addTextTo which gets two parameters: an element and a string. The function should append the given string to the content of the given element
function addTextTo(elem, str) {
    elem.textContent += str;
}

//Create a function `moreBears` that replaces the default image with the image of a bear. Your function should (for the 'animals' element) set its source URL to 'http://placebear.com/400/200', its alternative text to 'A bear.', and its title to 'A BEAR!'. 
function moreBears() {
    let animals = document.getElementById("animals");
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";
}

//Create a function `setId` with two parameters, an element and a string. The function will set the element's ID to the given string. The return value of the function must be the given element
function setId(elem, str) {
    elem.id = str;
    return elem;
}

//Create a function `setClass` with two parameters, an element and a string. The function will set the element's class to the given string. The return value of the function must be the given element
function setClass(elem, str) {
    elem.className = str;
    return elem;
}

//Create a function `addAClass` with two parameters, an element and a string. The function will add the given string's value to the element's classes. The return value of the function must be the given element
function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

//Create a function `removeAClass` with two parameters, an element and a string.The function will remove the given string's value from the element's classes.The return value of the function must be the given element
function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

//Write a function `newElement` which, given one parameter called name, returns a newly created element with that tag name
function newElement(name) {
    return document.createElement(name);
}

//Write a function `findElementById` which, given one parameter called id, returns the element in the document with that id
function findElementById(id) {
    return document.getElementById(id);
}

//Write a function `findElementsByQuery` which, given one parameter called query, returns a list of elements in the document that match the given query
function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

//Create a function `reverseList` that can reverse the content of a list (a UL or OL element). The function should take one parameter, which is a query selector used to find the list whose children should be reversed. Return the selected element
function reverseList(query) {
    let list = document.querySelector(query);
    let children = list.children;
    for (let i = children.length - 1; i >= 0; i--) {
        list.appendChild(children[i]);
    }
    return list;
}

//Create a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the element that it should be appended to
function mover(moveThis, appendToThis) {
    let element = document.querySelector(moveThis);
    let targetElem = document.querySelector(appendToThis);
    targetElem.appendChild(element);
}

//Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of candidate strings that will be turned into list items
function filler(list, candidates) {
    for (let i = 0; i < candidates.length; i++) {
        let item = document.createElement("li");
        item.textContent = candidates[i];
        list.appendChild(item);
    }
}

//Write a function `dupe` that accepts one parameter, a selector. The function should duplicate the element chosen by the selector (and any children of it) and append it to its parent
function dupe(selector) {
    let element = document.querySelector(selector);
    let parent = element.parentElement;
    let clone = element.cloneNode(true);
    parent.appendChild(clone);
}

//Write a function `removeAll` that accepts one parameter, a selector. All nodes that match that selector should be removed
function removeAll(selector) {
    let elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

//Write a function `getUserData` that returns an object with information from the #username, #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: 30, student: true }
function getUserData() {
    let name = document.querySelector("#username").value;
    let speed = Number(document.querySelector("#speed").value);
    let student = document.querySelector("#student").checked;
    return {
        name: name,
        speed: speed,
        student: student
    };
}