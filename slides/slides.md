---
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: false
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
layout: intro
title: 'React Workshop'
titleTemplate: '%s'
favicon: '/react.svg'
---
# Welcome

## to the React workshop!

# 😊

---

## Follow along

- You can find this presentation at:  
   [https://jigglycrumb.github.io/react-workshop](https://jigglycrumb.github.io/react-workshop)

- The repository can be found here:  
   [https://github.com/jigglycrumb/react-workshop](https://github.com/jigglycrumb/react-workshop)

- All slides in one document:  
  [https://github.com/jigglycrumb/react-workshop/blob/main/slides/slides.md](https://github.com/jigglycrumb/react-workshop/blob/main/slides/slides.md)

---

## Let's cover some basics before we start coding

- HTML
- CSS
- Javascript
- React

---
preload: false
clicks: 4
---
## HTML

- HTML is a static __markup__ language
- It consists of __&lt;tags&gt;__
  ```html
  <h1>Hello World</h1>
  ```
- Tags can have __attributes__
  ```html
  <a href="http://google.com">Go to Google</a>
  ```
- They can be self-closing …
  ```html
  <img src="example.jpg" />
  ```
- … or nested
  ```html
  <div>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
  ```


<div v-if="$slidev.nav.clicks === 1">
  <Box top=157 left=84 width=34 height=24 />
  <Box top=157 left=194 width=38 height=24 />
</div>

<Box top=239 left=106 width=178 height=24 v-if="$slidev.nav.clicks === 2" />
<Box top=321 left=250 width=24 height=24 v-if="$slidev.nav.clicks === 3" />
<Box top=403 left=84 width=50 height=78 v-if="$slidev.nav.clicks === 4" />

---

## The DOM tree

Every website starts with this structure

```html
<html>
  <head>
    site metadata goes here
  </head>
  <body>
    site content goes here
  </body>
</html>
```

The website is built by nesting more tags into the __body__ tag.  
This structure is called the __DOM tree__.  
DOM stands for "Document Object Model".

---

## CSS

- CSS is a language used to __style__ HTML

- It provides a set of styling attributes  
  to make your HTML look the way you want

---

## CSS example 1

Inline styles via __style__ attribute

```html
<h1 style="color: tomato; border: 2px solid seagreen; padding: 0.5em;">Styled with CSS</h1>
```

### Result

<h1 style="color: tomato; border: 2px solid seagreen; padding: 0.5em;">Styled with CSS</h1>

---

## CSS example 2

Styles in an external file

    style.css

```css
.flashy-headline {
  color: hotpink;
  border: 2px solid hotpink;
  padding: 1em;
  text-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.1);
}
```

    index.html

```html
<h2 class="flashy-headline">Styled with CSS</h2>
```

### Result

<h2 class="flashy-headline">Styled with CSS</h2>

---

## Javascript

- Javascript is a __programming__ language

- It brings __interactivity__ to the otherwise static web

- It does that by listening to user actions,  
  manipulating the DOM tree and talking to backend servers

---

## Javascript variables

In programming, a __variable__ is a container the programmer can use to store and access data.  
Every variable has a name and the data inside is called __value__.

A variable in Javascript is declared by using one of the keywords __const__, __let__, __var__.

__const__ & __let__ - the modern way:

```js
const greetingText = "Hello!";
greetingText = "Goodbye!"; // error, you can't assign a new value to a const

let someNumber = 42;
someNumber = 23; // this is fine
```

__var__ - the classic way:

```js
var someValue = 42;
console.log(someValue); // prints 5

someValue = "Hello!";
console.log(someValue); // prints "Hello!"
```

---
clicks: 4
preload: false
---

## Javascript functions

A function is a container for a piece of code.  
It has a name and can take parameters as input, does something and returns a value.

Here is a function that adds two numbers:

```js
function addNumbers(a, b) {
  return a + b;
}
```

Functions in Javascript can also be written as an arrow function:

```js
const addNumbers = (a, b) => {
  return a + b;
};
```

To use a function, you __call__ it with the parameters you want:
```js
const sum = addNumbers(2, 3); // sum is 5
```

<div v-if="$slidev.nav.clicks === 1">
  <Box top=113 left=115 width=51 height=24 />
  <Box top=196 left=126 width=78 height=24 />
</div>

<div v-if="$slidev.nav.clicks === 2">
  <Box top=113 left=271 width=95 height=24 />
  <Box top=196 left=200 width=46 height=24 />
</div>

<div v-if="$slidev.nav.clicks === 3">
  <Box top=113 left=437 width=132 height=24 />
  <Box top=214 left=124 width=46 height=24 />
</div>

<div v-if="$slidev.nav.clicks === 4">
  <Box top=113 left=603 width=122 height=24 />
  <Box top=214 left=76 width=50 height=24 />
</div>

---

## Javascript example

Make a button do something

    index.html

```html
<button onclick="myFunction()">Try it</button>
<p id="js-demo"></p>
```

    script.js

```js
function myFunction() {
  document.getElementById("js-demo").innerHTML = "Hello World!";
}
```

### Result
<JSDemo />

---

## Javascript problems before React

- Having a loose collection of functions that handle different things can quickly get messy,  
  causing bugs and unwanted side effects

- Changing the HTML structure can break things and cause bugs

- Developers need to know the whole app to not accidentally overwrite function names,  
  class names, ids etc

- There are other frameworks around which try to solve these problems,  
  but they are often opinionated and complex, especially at the time when React came out

---

## So, how did React solve these issues?

- __Component-based__  
  A React component can encapsulate everything it needs to work,  
  usually a piece of HTML, styles & some business logic.  
  Components can be composed to form bigger components

- __Minimal API__  
  React is meant for building UI only.  
  It's job is to keep your app state in sync with the UI.  
  You have the freedom to handle all other things the way you want

- __Ease of use__  
  React introduces a special syntax called JSX that is very similar to HTML

---

## JSX

- JSX is an addition to the Javascript syntax and comes with React

- It is very similar to HTML and eases the transition from design to code

__JSX example__

Here is our headline from the CSS example again

```html
<h1 style="color: tomato; border: 2px solid seagreen;">Styled with CSS</h1>
```

The same headline written in JSX looks like this

```jsx
<h1 style={{ color: "tomato", border: "2px solid seagreen" }}>
  Styled with CSS
</h1>
```

---

## Differences between HTML and JSX

- The __class__ attribute in HTML is called __className__ in JSX

- CSS must be written in camelCase,  
  e.g. __font-size__ becomes __fontSize__,  
  __border-width__ becomes __borderWidth__ etc

- Attributes are called __props__ in the React world

---

## Components

- React offers built-in components for all HTML tags.  
  These are the basic building blocks for everything else

- Built-in components always start with a small letter, e.g. __&lt;div&gt;__  
  Your own components have to start with a capital letter, e.g. __&lt;User&gt;__

- Components are functions that execute their business logic and return the resulting HTML

- When the state of your app changes, React re-renders the components depending on the changed state

## _Components describe a piece of UI through props_

---

## Component example

Let's create a simple greeting component. We want this HTML as result

```html
<h3 style="color: orange;">Hello, Charles!</h3>
```

The only variable part in this is the user name, __Charles__. So the JSX of our component could look like this

```jsx
<Greeting name="Charles" />
```

To achieve this, let's write our component

```jsx
function Greeting({ name }) {
  return <h3 style={{ color: "orange" }}>Hello, {name}!</h3>;
}
```

And that's all! 😎

---

## Caveats when using React

- Components do not know about the "outside world",  
  only about their child components

- Components do not know about time  
  they describe how the UI should look with the current props,  
  but they don't know what happened before or will happen after

---

## What will we do today?

Today, we will:

- Explore the structure of a basic React project
- Build an app with a button that counts how often it is clicked
- Build a simple ToDo list app

---

## What you will need

- A Macbook with [Homebrew](https://brew.sh/) installed

- Node.js - install it with

  ```bash
    brew install node
  ```

- VSCode - install it with
  ```bash
    brew install visual-studio-code
  ```

- Clone or download the [workshop repository](https://github.com/jigglycrumb/react-workshop)  
  It contains these slides and all the workshop exercise files

---

## Let's get started!

First we will bootstrap a fresh React app to see what it contains:

- Open a folder where you want the new app to be created
  ```
    cd my-folder
  ```
- Bootstrap the playground app.  
  This will create a new folder __playground-app__ inside your current folder.
  ```bash
    npx create-react-app playground-app
  ```
- Jump into the new app folder
  ```bash
    cd playground-app
  ```
- Run the app
  ```bash
    npm start
  ```

---

## Playground app

After starting the app, your browser opens

[http://localhost:3000](http://localhost:3000)

and you see a spinning React logo.

Start VSCode now and open the app folder.

Let's start exploring what we got!

---

## Playground App - folder structure

These files have been created for us:

- __node_modules__ This folder contains React and other libraries our project uses
- __public__ Static assets like images and fonts go here
- __src__ Our source code  
  This is the folder you'll use most. You can organize the files in here like you wish.
- __src/App.js__ The main component of the app and entry point for our code
- __package-lock.json__ This file is used by NPM and usually not touched manually
- __package.json__ Contains meta data about your project. You can add scripts like a build script here

---
class: "text-center"
---

## Click counter app

<div class="image-wrapper">
  <img src="/click-counter.png" />
</div>

The left button increases the counter by one, the right button resets it to zero.  
The headline below the buttons shows how often the button was clicked.

---

## Click counter app - setup

- Open the folder __workshop/01-click-counter/project__ in VSCode and your terminal
- In your terminal run
  ```bash
    npm install
  ```
- Then run the app
  ```bash
    npm start
  ```

- Have a look at __workshop/01-click-counter/project/src/App.js__ as your starting point

---
class: "text-center"
---

## ToDo list app

<div class="image-wrapper">
  <img src="/todo-list.png" />
</div>

New items are added with the form on top.  
Items can be removed via a button next to the item.


---

## ToDo list app - setup

- Open the folder __workshop/02-todo-list/project__ in VSCode and your terminal
- In your terminal run
  ```bash
    npm install
  ```
- Then run the app
  ```bash
    npm start
  ```

- Have a look at __workshop/02-todo-list/project/src/App.js__ as your starting point

---

## Wrap up

Today, we had a look at:

- Why React was created and what it is used for
- How to set up a new React app
- How HTML can be converted into React components
- How React components work together to compose an application

---
layout: intro
class: "text-center"
---

# Thank you for joining!

## I hope you had fun!  
## Please let me know what can be improved 😊
