// function createElement(tag, attributes, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;
//   for (const key in attributes) {
//     if (key === "style") {
//       Object.assign(element.style, attributes.style);
//     } else {
//       element[key] = attributes[key];
//     }
//   }

//   return element;
// }

// custom react

// const React = {
//   createElement: function (tag, attributes, children) {
//     const element = document.createElement(tag);
//     element.textContent = children;
//     for (const key in attributes) {
//       if (key === "style") {
//         Object.assign(element.style, attributes.style);
//       } else {
//         element[key] = attributes[key];
//       }
//     }

//     return element;
//   },
// };

// const ReactDOM = {
//   render: function (child, parent) {
//     parent.append(child);
//   },
// };

// attributes={
// className:"element",
// id:"first",
// style : {fontSize:"30px", backgroundColor: "pink", color: "white"}
// }

// element={
// tag:"h1",
// textContent:"Hello Coder Army",
// className:"element",
// id:"first",
// style:{
// fontSize:"30px",
// backgroundColor:"pink",
// color:"white"
// }

// }

const element1 = React.createElement(
  "h1",
  {
    className: "element",
    id: "first",
    style: { fontSize: "40px", backgroundColor: "pink", color: "white" },
  },
  "Hello Coder Army!!",
);

const element2 = React.createElement(
  "h2",
  {
    className: "element",
    id: "second",
    style: { fontSize: "30px", backgroundColor: "Orange", color: "white" },
  },
  "Strike is Launched",
);

// create a h1 element using js

// const element1 = document.createElement("h1");
// element1.textContent = "Hello Coder Army!!";
// element1.className = "element";
// element1.id = "first";
// element1.style.fontSize="40px";
// element1.style.backgroundColor = "orange";
// element1.style.color="white";

// document.getElementById("root").append(element1);

// const element2 = document.createElement("h2");
// element2.textContent = "Strike is coming!!";
// element2.className = "element";
// element2.id = "second";
// element2.style.fontSize="43px";
// element2.style.backgroundColor = "pink";
// element2.style.color="white";

// document.getElementById("root").append(element2);

// const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);
// ReactDOM.render(element1, root);
// ReactDOM.render(element2, root);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element1);

// In JavaScript, Object.assign() is used to copy properties from one or more source objects into a target object.

// It is commonly used to merge objects or copy object properties.

// Syntax

// javascript
// Object.assign(target, source1, source2, ...);
// target: The object that receives the properties.

// source: The object(s) whose properties are copied.

// Example 1: Copy properties

// javascript
// const obj1 = { name: "John", age: 25 };

// const obj2 = {};

// Object.assign(obj2, obj1);

// console.log(obj2);
// Output:

// javascript
// { name: "John", age: 25 }
// Example 2: Merge two objects

// javascript
// const obj1 = { name: "John" };
// const obj2 = { age: 25 };

// const result = Object.assign({}, obj1, obj2);

// console.log(result);
// Output:

// javascript
// { name: "John", age: 25 }
// Example 3: When properties have the same name

// javascript
// const obj1 = { name: "John" };
// const obj2 = { name: "David" };

// const result = Object.assign({}, obj1, obj2);

// console.log(result);
// Output:

// javascript
// { name: "David" }
