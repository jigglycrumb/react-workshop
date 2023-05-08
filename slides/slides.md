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
- JavaScript
- React

---

## HTML

- HTML is a static _markup_ language
- It consists of &lt;tags&gt;
  ```html
  <h1>Hello World</h1>
  ```
- Tags can have attributes
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

The website is built by nesting more tags into the `body` tag.  
This structure is called the DOM tree.  
DOM stands for "Document Object Model".

---

## CSS

- CSS is a language used to style HTML

- It provides a set of styling attributes  
  to make your HTML look the way you want

---

## CSS example 1

Inline styles via _style_ attribute

```html
<h1 style="color: tomato; border: 2px solid seagreen; padding: 0.5em;">Styled with CSS</h1>
```

### Result

<h1 style="color: tomato; border: 2px solid seagreen; padding: 0.5em;">Styled with CSS</h1>

---

## CSS example 2

Styles in an external file

`index.html`

```html
<h2 class="flashy-headline">Styled with CSS</h2>
```

`style.css`

```css
.flashy-headline {
  color: hotpink;
  border: 2px solid hotpink;
  padding: 1em;
  text-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.1);
}
```

### Result

<h2 class="flashy-headline">Styled with CSS</h2>

---

## JavaScript

- Javascript is a _programming_ language

- It brings interactivity to the otherwise static web

- It does that by listening to user actions,  
  manipulating the HTML tree and talking to backend servers

---

## Javascript functions

A function is a piece of code which can take parameters as input,  
does something and then returns an output.  
Here is a function that adds two numbers:

```js
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(2, 3); // sum is 5
```

Functions in Javascript can also be written as an arrow function:

```js
const addNumbers = (a, b) => {
  return a + b;
};

const sum = addNumbers(2, 3); // sum is 5
```

---

## JavaScript example

Make a button do something

`index.html`

```html
<button onclick="myFunction()">Try it</button>
<p id="js-demo"></p>
```

`script.js`

```js
function myFunction() {
  document.getElementById("js-demo").innerHTML = "Hello World!";
}
```

### Result
<JSDemo />

---

## JavaScript problems before React

- Having a bunch of functions that handle different things can quickly get messy,  
  causing bugs and unwanted side effects

- Changing the HTML structure can break selectors and cause bugs

- Developers need to know the whole app to not accidentally overwrite function names,  
  class names, ids etc

- There were frameworks around which tried to solve these problems,  
  but they were often opinionated and complex

---

## So, how did React solve these issues?

- _Component-based_  
  A React component can encapsulate everything it needs to work,  
  usually a piece of HTML, styles & some business logic.  
  Components can be composed to form bigger components

- _Minimal API_  
  React is meant for building UI only.  
  It's job is to keep your app state in sync with the UI.  
  You have the freedom to handle all other things the way you want

- _Ease of use_  
  React introduces a special syntax called JSX that is very similar to HTML

---

## JSX

- JSX is an addition to the JavaScript syntax and comes with React

- It is very similar to HTML and eases the transition from design to code

---

## JSX example

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

- The _class_ attribute in HTML is called _className_ in JSX

- CSS must be written in camelCase,  
  e.g. _font-size_ becomes _fontSize_,  
  _border-width_ becomes _borderWidth_ etc

- Attributes are called _props_ in the React world

---

## Components

- React offers built-in components for all HTML tags.  
  These are the basic building blocks for everything else

- Built-in components always start with a small letter, e.g. _&lt;div&gt;_  
  Your own components have to start with a capital letter, e.g. _&lt;User&gt;_

- Components are functions that execute their business logic and return the resulting HTML

- When the state of your app changes, React re-renders the components depending on the changed state

## _Components describe a piece of UI through props_

---

## Component example

Let's create a simple greeting component. We want this HTML as result

```html
<h3 style="color: orange;">Hello, Charles!</h3>
```

The only variable part in this is the user name, _Charles_. So the JSX of our component could look like this

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

Today, we will build:

- A button that counts how often it is clicked
- A simple ToDo list app

---

## What you will need

- A Github account with access to the MOIA org

- A Macbook with [Homebrew](https://brew.sh/) installed

- Node.js - install it with

  ```bash
    brew install node
  ```

- VS Code - install it with
  ```bash
    brew install visual-studio-code
  ```

---

## Let's get started!

First we will bootstrap a fresh react app to see what it contains:

- create a new folder for the workshop projects
- change to that folder
  ```
    cd my-folder
  ```
- bootstrap the playground app
  ```bash
    npx create-react-app playground-app
  ```
- jump into the app folder
  ```bash
    cd playground-app
  ```
- run the app
  ```bash
    npm start
  ```

---

## Playground app

After starting the app, your browser should open at

[http://localhost:3000](http://localhost:3000)

and you should see a spinning React logo.

Start Visual Studio Code now and open the app folder.

Let's start exploring what we got!

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

## Click counter app

Useful links:

- [Template](https://github.com/moia-dev/react-workshop-click-counter-template)

  Your starting point. Install it by downloading the files as .zip file, extract it into your workshop folder and run

  ```bash
    npm install
  ```

- [Solution](https://github.com/moia-dev/react-workshop-click-counter-solution)

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

## ToDo list app

Useful links:

- [Template](https://github.com/moia-dev/react-workshop-todo-list-template)

  Your starting point. Install it by downloading the files as .zip file, extract it into your workshop folder and run

  ```bash
    npm install
  ```

- [Solution](https://github.com/moia-dev/react-workshop-todo-list-solution)

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

I hope you had fun!  
Please let me know what can be improved 😊
