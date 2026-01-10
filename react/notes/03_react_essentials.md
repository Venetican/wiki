## React Essentials – What This Section Is About

In this **React Essentials** section, we will build a **complete demo web application from scratch** using React.

During this process, you will learn the **core React concepts** that are required for *any* React application, regardless of its size or complexity.

### What you will learn
- **Components** – the fundamental building blocks of React
- **JSX** – writing UI with HTML-like syntax inside JavaScript
- **Props** – passing data between components
- **Rendering data** in the UI
- **Handling user events** (e.g. button clicks)
- **State** – managing dynamic, interactive data

### Outcome
By the end of this section, you will:
- Understand all **fundamental React concepts**
- Be able to build **static and dynamic React applications**
- Know how to turn static UIs into **interactive web apps**

### Prerequisites
- No prior React knowledge required
- Basic **JavaScript knowledge** is sufficient

## React Core Concept: Components

If you had to identify **one single core concept** that every React application relies on, it would be **Components**.

### What are Components?
Components are **reusable building blocks** of a user interface.  
A React application is built by **combining many small components** into a complete UI.

Each component typically:
- wraps **HTML (via JSX)**
- may include **CSS**
- contains **JavaScript logic**
- controls **one specific part of the UI**

### Thinking in Components
User interfaces can naturally be broken down into components.

For example, in a typical app you might identify:
- a **Header**
- a **Content section**
- a **Tabs / Navigation section**
- repeated **UI items** (cards, list entries, buttons)

How large or small a component should be is a **developer decision**.  
There is no single “correct” size.

### Why Components Matter

#### 1. Reusability
The same component can be reused multiple times with different data.

- Same structure
- Same styling
- Same logic
- Different configuration (data)

This reduces duplication and errors.

#### 2. Maintainability
Without components:
- HTML becomes large and hard to navigate
- Changes must be repeated in multiple places

With components:
- Code is defined once
- Changes are made in a single location

#### 3. Related Code Stays Together
Instead of separating:
- HTML in one file
- JavaScript in another

Components keep:
- markup
- logic
- styling

**closely coupled**, making changes safer and easier.

#### 4. Separation of Concerns
Each component has a **clear responsibility**.

Example:
- Some components display data
- Others handle user input
- Others manage navigation or state

This becomes increasingly important as applications grow and as **multiple developers** work on the same project.

### Not Just React
The component-based approach is widely used:
- Angular
- Vue
- Svelte
- Mobile frameworks like Flutter

This makes component thinking a **fundamental UI development skill**, not just a React concept.

---

## Getting Started with the React Project

Now that the **idea behind components** is clear, it’s time to switch from theory to practice and start working **inside a real React project**.

### Project Setup Options
You can follow along in **two equivalent ways**:

### Option 1: CodeSandbox (Browser-based)
- Use the **CodeSandbox link** attached to this lecture  
- No local setup required  
- No commands to run  
- Everything is preconfigured and runs automatically  

This is the fastest way to get started.

### Option 2: Local Development
If you prefer working locally:

1. Download the **ZIP file** attached to this lecture  
2. Extract it on your system  
3. Open the extracted folder in a code editor (e.g. **Visual Studio Code**)  

### Running the Project Locally

From the project root directory:

1. **Install dependencies** (run once):

```
npm install
```

This installs:
- React libraries  
- Build tools  
- Development server tooling  

2. **Start the development server**:

```
npm run dev
```

This:
- Starts a local dev server  
- Outputs a local URL  
- Watches your files and reloads the app on changes  

3. Open the displayed URL in your browser to see the app.

### Development Workflow
- Keep the dev server running while coding  
- Stop it with **Ctrl + C** when you’re done  
- Restart anytime with `npm run dev`  

### Important Notes
- React code **does not run directly in the browser**  
- The build process transforms React/JSX into browser-compatible JavaScript  
- CodeSandbox handles all of this automatically for you  

Regardless of whether you use CodeSandbox or a local setup, **the starting project and demo app are identical**.

---

Next, we will dive directly into the project and start creating **our first React component**.

## Understanding the Starting React Project Structure

With the starting project up and running, let’s take a closer look at **how a React app is structured** and **where the UI you see on the screen actually comes from**.

---

## index.html – Why It Looks Almost Empty

Inside the project folder, you’ll find an `index.html` file.

When you open it, you’ll notice:
- It contains only **minimal HTML markup**
- It does **not** include the image, title, or visible page content

This is **intentional**.

### Key Idea
In a React application:
- **React renders the UI**
- The HTML file only provides a **mounting point**

Typically, this file contains:
- Basic `<head>` configuration
- A single `<div>` (often with an `id="root"`)
- A reference to a JavaScript entry file

---

## index.jsx – The Entry Point

The `index.html` file loads a JavaScript file called `index.jsx`.

You’ll find it inside the `src/` folder.

This file:
- Is written in JavaScript
- Acts as the **starting point** of the React application
- Connects React to the HTML page
- Imports the main application component (`App`)

At this stage, you still won’t see any actual UI markup here.

---

## App.jsx – Where the UI Comes From

The **real UI markup** lives in `App.jsx`.

This file:
- Contains what looks like **HTML inside JavaScript**
- Has a `.jsx` extension
- Defines a **React Component**

This can feel confusing at first, but it’s one of the core ideas behind React.

---

## JSX – JavaScript Syntax Extension

The `.jsx` extension indicates that the file uses **JSX**.

### What JSX Is
- JSX stands for **JavaScript Syntax Extension**
- It allows you to write **HTML-like markup inside JavaScript**
- It is **not standard JavaScript**
- Browsers **cannot run JSX directly**

### How JSX Works
- During development, JSX is transformed into plain JavaScript
- This transformation is handled by the **build tool / dev server**
- The browser only ever receives **regular JavaScript**

### Why JSX Is Used
- Writing UI with JSX is more readable
- It keeps UI structure close to the logic that controls it
- It is the standard way to build React interfaces

---

## React Components – The Core Concept

The `App.jsx` file defines a **React Component**.

### What a React Component Is
In React, a component is simply:
- A **JavaScript function**

But to be treated as a component by React, it must follow **two rules**:

1. **The function name must start with an uppercase letter**
2. **The function must return a renderable value**, typically JSX

### Example Structure (Conceptual)
```
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}
```

That’s it.

No special syntax beyond:
- A normal JavaScript function
- A capitalized name
- A JSX return value

---

## Why This Matters

This simple pattern:
- Makes components easy to create
- Allows you to split complex UIs into small, reusable parts
- Is the foundation of **every React application**

Everything else in React builds on this idea.

---

## What’s Next

Now that you understand:
- Where the UI comes from
- What JSX is
- What a React component actually is

We’re ready to **create our first custom React component** and start building the UI ourselves.

## Creating and Using Your First Custom React Component

When building React applications, you are **not limited to a single component** like `App`.

In fact, real-world React apps typically consist of **dozens or even hundreds of components**, each responsible for a specific part of the user interface.

---

## Why Create Custom Components?

Splitting your UI into smaller components allows you to:

- Keep components **lean and readable**
- **Reuse UI logic and markup**
- Improve **maintainability**
- Clearly separate different parts of the UI

For example, in this demo app, the **header section** is a perfect candidate for extraction into its own component.

---

## Step 1: Define a New Component

React components are **just JavaScript functions**.

You can define a new component directly in `App.jsx` (for now) by creating a new function **above** the `App` component.

### Rules for React Components
A function is treated as a React component if:
1. Its name **starts with an uppercase letter**
2. It **returns JSX**

### Example: Header Component
```
function Header() {
  return (
    <header>
      <!-- header markup goes here -->
    </header>
  );
}
```

---

## Step 2: Move JSX into the Component

To extract the header:
- Cut the header-related JSX from the `App` component
- Paste it into the `Header` component’s return statement

### Important JSX Rule
When returning **multi-line JSX**, you must wrap it in **parentheses**:

```
return (
  <div>
    <h1>Title</h1>
    <p>Subtitle</p>
  </div>
);
```

Most editors (VS Code, CodeSandbox) handle this automatically when formatting or saving the file.

---

## Step 3: Use the Component Inside App

Unlike normal JavaScript functions, **you do not call React components manually**.

Instead, you use them **like HTML elements inside JSX**.

### Using a Custom Component
```
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

### Key Notes
- Component names **must start with uppercase letters**
- Components can be written as:
  - `<Header></Header>`
  - `<Header />` (self-closing, most common)

---

## Self-Closing Component Syntax

If a component has **no children**, you can (and usually should) use the self-closing syntax:

```
<Header />
```

⚠️ The forward slash (`/`) is **mandatory**, just like with built-in tags such as `<img />`.

---

## Result

After saving the file:
- The UI looks the same as before
- But now the header is rendered via a **custom component**

This confirms:
- The component was created correctly
- React is executing the component function internally
- JSX is being rendered as expected

---

## Why This Is a Crucial Step

You’ve now learned:
- How to **define your own React components**
- How to **reuse them inside other components**
- How React treats components as **building blocks**

This is the **foundation of all React development**.

From here on:
- You’ll keep extracting components
- Passing data between them
- Making them interactive

This is exactly how real React applications are built.

## How React Components End Up on the Screen

Now that we created our **first custom component**, it’s important to clearly understand **how its content actually appears in the browser**.

This section explains the **full rendering pipeline**, from your React code to visible HTML in the browser.

---

## Inspecting the Page Source: Where Is the UI?

If you inspect the **page source** in the browser, you’ll notice something important:

- You **do not** see:
  - The header
  - The image
  - The titles
  - Any visible UI content
- You only see:
  - Basic metadata
  - A reference to one or more JavaScript files

This is expected behavior in a React application.

### Why?
Because **React renders the UI at runtime**, not via static HTML.

---

## index.html: The Entry Point

The `index.html` file is the file served to the browser.

It contains:
- Minimal HTML
- A single root element (e.g. `<div id="root"></div>`)
- A script import (e.g. `index.jsx`)

This file **does not contain the UI** itself.

---

## index.jsx: Bootstrapping the React App

The JavaScript file loaded by `index.html` (e.g. `index.jsx`) is critical.

This file:
- Imports React and React DOM
- Imports the `App` component
- Starts (boots) the React application

Even though the file extension is `.jsx`, what the browser actually executes is **transformed JavaScript**, not JSX.

---

## App.jsx: Where Your UI Starts

The `index.jsx` file imports the **App component** from `App.jsx`.

That component:
- Is a regular JavaScript function
- Returns JSX
- Represents the **root of your component tree**

This import/export mechanism:
- Uses standard JavaScript `import` / `export`
- Is **not React-specific**

---

## Why JSX Appears Outside a Component (Once)

In `index.jsx`, you’ll notice JSX being used **outside of a component function**.

This is the **only real exception** in a React app.

Why?
Because `index.jsx`:
- Is the **entry point**
- Bootstraps the entire React application
- Passes JSX directly into React’s rendering system

---

## ReactDOM, createRoot, and render

React does not magically render your app.

It uses **React DOM**, a library responsible for connecting React to the browser.

The flow is:

1. Select an existing DOM element from `index.html`
2. Create a React root attached to that element
3. Render the root React component into it

Conceptually:

```
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

Key points:
- The `<div id="root">` already exists in HTML
- React **injects** your app into that element
- Only **one root component** is rendered directly

---

## Component Tree (Component Hierarchy)

The `App` component:
- Is the **root component**
- Can render other components (e.g. `Header`)
- Those components can render more components

This creates a **tree of components**, also called:
- Component hierarchy
- Component tree

React:
- Traverses this tree
- Executes component functions
- Collects all returned JSX
- Converts everything into plain HTML elements

---

## Why You Don’t See Components in the DOM

When you inspect the DOM in DevTools:
- You **do not** see:
  - `<App>`
  - `<Header>`
- You **do** see:
  - `<header>`
  - `<div>`
  - `<img>`

This is because:
- **Custom components do not exist in the DOM**
- They are **functions**, not DOM elements
- React executes them and replaces them with built-in HTML elements

---

## Uppercase vs Lowercase Component Names

This explains a crucial rule in React:

- **Lowercase names** → built-in HTML elements  
  - `div`, `header`, `img`
- **Uppercase names** → custom React components  
  - `App`, `Header`

Why this matters:
- Prevents name collisions
- Tells React whether to:
  - Render a DOM node (lowercase)
  - Execute a component function (uppercase)

Example:
- `<header>` → rendered as HTML
- `<Header />` → function execution

---

## How React Ultimately Renders the UI

In summary:

1. Browser loads `index.html`
2. `index.html` loads `index.jsx`
3. `index.jsx` imports `App`
4. React DOM creates a root
5. React executes `App`
6. React executes nested components (`Header`, etc.)
7. JSX is converted to plain HTML
8. HTML is injected into `<div id="root">`

---

## Why This Architecture Is Powerful

As a developer:
- You work with **small, reusable components**
- You avoid one massive HTML file
- You keep logic and UI closely related
- You scale applications more easily

React handles:
- Execution
- Composition
- Rendering

You handle:
- Structure
- Reuse
- Logic

This is the foundation of how **all React applications work**.

## Outputting Dynamic Content in React Components

Now that we have built our **first custom React component**, the next crucial step is learning **how to output dynamic content** instead of static text.

This is a **core React concept** that you will use constantly when building real applications.

---

## The Goal

Instead of always displaying the same static text:

> **Fundamental React Concepts**

we want to **randomly switch** between different descriptions, for example:
- Fundamental React Concepts
- Crucial React Concepts
- Core React Concepts

This requires:
- JavaScript logic
- Dynamic rendering in JSX

---

## Preparing Dynamic Data

To achieve this, we first define:
- An array of possible descriptions
- A helper function to generate a random index

Conceptually, the setup looks like this:

```
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
```

This gives us:
- A fixed list of possible values
- A way to randomly select one of them

---

## Rendering Dynamic Values in JSX

JSX allows you to embed **dynamic JavaScript expressions** using **curly braces**:

```
{ /* JavaScript expression */ }
```

### Important Rules
- You can place curly braces:
  - Between JSX tags
  - Inside attribute values
- Inside the braces, **any valid JavaScript expression** can be used
- Statements (if, for, while) are **not allowed**
- Expressions (calculations, function calls, variables) **are allowed**

---

## Simple Example

```
<p>{1 + 1}</p>
```

This would render:
> **2**

Because the expression is evaluated and its result is rendered.

---

## Using Dynamic Data in the Header Component

Inside the `Header` component, we replace the static text with a dynamic expression:

```
<h1>
  {reactDescriptions[genRandomInt(2)]} React Concepts
</h1>
```

What happens here:
- `genRandomInt(2)` generates a random index (0–2)
- That index is used to access the array
- The selected word is rendered dynamically

Each page reload triggers a **new render**, producing a different word.

---

## Improving Readability (Best Practice)

To keep JSX clean and readable, it’s recommended to move complex expressions **outside** of JSX.

Example:

```
const description = reactDescriptions[genRandomInt(2)];

return (
  <h1>{description} React Concepts</h1>
);
```

### Why This Is Better
- JSX stays clean and readable
- Logic is separated from markup
- Easier to debug and extend later

Both approaches work, but this one is generally preferred.

---

## When Does This Code Run?

This logic runs:
- When the `Header` component is rendered
- Which happens when the page loads (or re-renders)

Each render:
- Executes the component function
- Re-evaluates the JavaScript expressions
- Produces a potentially different result

---

## Key Takeaways

- JSX supports **dynamic values via curly braces**
- Any JavaScript **expression** can be rendered
- Components are **executed as functions**
- Dynamic UI is created by combining JSX with JavaScript logic
- Keeping JSX lean is considered **best practice**

This dynamic rendering mechanism is one of the **most important features in React** and forms the basis for interactive and data-driven user interfaces.

## Loading Images Correctly in React with Dynamic Values

Now that we understand how to **output dynamic values using curly braces in JSX**, we can apply the same mechanism to **load images in a better and safer way**.

---

## The Problem with Static Image Paths

You may currently see images loaded like this:

```
<img src="src/assets/react-core-concepts.png" />
```

This works during development, but it has **important drawbacks**:

- The image path is **hard-coded**
- During **production build and deployment**, files are:
  - Optimized
  - Renamed
  - Bundled
- Images referenced like this can be:
  - Ignored
  - Lost
  - Not optimized

As a result, your image may **disappear after deployment**.

---

## The Recommended Approach: Import Images

Instead of referencing images via a static path, you should **import them into your JavaScript file**.

Example:

```
import reactImg from './assets/react-core-concepts.png';
```

### Why This Works
- This is **not standard JavaScript**
- Normally, JavaScript cannot import images
- But React projects use a **build process**
- The build process:
  - Understands these imports
  - Tracks the image
  - Includes it in the final build
  - Applies optimizations (hashing, compression, caching)

The same mechanism also explains why imports like this work:

```
import './index.css';
```

---

## Using the Imported Image in JSX

Once imported, the image becomes a **JavaScript variable** that contains the final resolved image path.

You can now use it dynamically in JSX:

```
<img src={reactImg} />
```

### Important Rules for JSX Attributes
- Use **single curly braces**
- Do **not** wrap the value in quotes
- Curly braces tell JSX:
  - “This is JavaScript, not a string”

❌ Incorrect:
```
<img src="{reactImg}" />
```

✅ Correct:
```
<img src={reactImg} />
```

---

## What Actually Happens Under the Hood

- `reactImg` becomes a variable
- That variable points to the final image URL
- JSX injects that value into the `src` attribute
- The browser loads the optimized image

To React, this is just **dynamic data binding**, the same as rendering text.

---

## Result

After saving and reloading:
- The image still appears on the page
- But now it is:
  - Safely tracked by the build system
  - Included in production builds
  - Optimized automatically

---

## Key Takeaways

- Static image paths are **not safe** for production
- Always import images in React components
- JSX curly braces allow dynamic values everywhere:
  - Text
  - Attributes
  - Image sources
- The build process handles:
  - JSX
  - CSS imports
  - Image imports

This approach ensures your React application is **robust, optimized, and deployment-safe**.

# Reusable Components & Props in React

## Why Component Reusability Matters

One of the core strengths of React is **component reusability**.

- Components can be reused multiple times
- Some components are reused only once (e.g. layout components)
- Other components are designed to be reused many times with **different data**

This mirrors standard JavaScript functions:

```js
function greet(name) {
  return `Hello ${name}`;
}

greet("Alice");
greet("Bob");
```

React components follow the same idea — **define once, reuse with different inputs**.

In React, those inputs are called **props**.

---

## What Are Props?

**Props (properties)** are inputs passed from a parent component to a child component.

Key rules:

- Props flow **one-way** (parent → child)
- Props are **read-only**
- Props control **what a component renders**

Mental model:

Component = function(props) → UI

---

## Creating a Reusable Component

Example: a reusable `CoreConcept` component that displays:

- an image
- a title
- a description

```jsx
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```

Important notes:

- Component name starts with an uppercase letter
- The function returns JSX
- `props` is a single object

---

## Passing Props via JSX

Props are passed as **custom JSX attributes**:

```jsx
<CoreConcept
  title="Components"
  description="The core building block of React UIs"
  image={componentsImage}
/>
```

Key points:

- Attribute names are arbitrary (you define them)
- Values can be strings, numbers, arrays, objects, or functions
- Dynamic values use `{}` instead of quotes

---

## How Props Work Internally

This JSX:

```jsx
<CoreConcept title="Components" image={img} />
```

Is conceptually translated by React into:

```js
CoreConcept({
  title: "Components",
  image: img
});
```

Therefore:

- The component receives **one argument**
- That argument is an object containing all props

---

## Using Props Inside JSX

Props are accessed via dot notation:

```jsx
<h3>{props.title}</h3>
<img src={props.image} alt={props.title} />
<p>{props.description}</p>
```

Important rule:

The prop key used in JSX **must match** the key accessed in the component.

---

## Destructuring Props (Recommended)

Instead of using `props.` everywhere, destructure props:

```jsx
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

Why this is better:

- Cleaner code
- Less repetition
- Easier to read

This is **pure JavaScript destructuring**, not a React feature.

---

## Reusing the Same Component Multiple Times

```jsx
<ul>
  <CoreConcept
    title="Components"
    description="Reusable UI building blocks"
    image={componentsImage}
  />
  <CoreConcept
    title="Props"
    description="Data passed into components"
    image={propsImage}
  />
  <CoreConcept
    title="State"
    description="Data managed inside a component"
    image={stateImage}
  />
</ul>
```

Each component instance:

- Uses the same logic
- Renders different content
- Is fully independent

---

## What Props Are (and Are Not)

Props are:

- Input data
- Configuration
- Read-only

Props are NOT:

- Mutable state
- Internal component memory

Rule of thumb:

If a component **receives** data → props  
If a component **manages** data → state

---

## Key Takeaways

- Components are reusable UI functions
- Props are named inputs passed via JSX
- JSX attributes are bundled into one `props` object
- Components always receive exactly one argument
- Destructuring props is best practice

---

## One-Sentence Summary

Props are named, read-only inputs passed into React components via JSX attributes, bundled into a single object that determines how a component renders its UI.

# Finishing Reusable Components with External Data

## Moving Data Out of Components

To complete the remaining Core Concept items in a clean and scalable way, the data is moved into a **separate file**.

A new file called `data.js` is added next to `App.jsx`.

This file exports an array of objects, where **each object represents one core concept** and contains:

- `image`
- `title`
- `description`

This keeps components focused on **rendering UI**, not storing data.

---

## Example: data.js Structure

Each object represents one concept:

```js
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description: "The core building block of React UIs."
  },
  {
    image: propsImg,
    title: "Props",
    description: "How components receive input data."
  },
  {
    image: stateImg,
    title: "State",
    description: "Data managed inside components."
  },
  {
    image: jsxImg,
    title: "JSX",
    description: "HTML-like syntax inside JavaScript."
  }
];
```

Key point:

- `CORE_CONCEPTS` is a **named export**

---

## Importing Named Exports Correctly

Because `CORE_CONCEPTS` is a named export, it must be imported with curly braces:

```js
import { CORE_CONCEPTS } from "./data.js";
```

Rule reminder:

- `export default` → import without braces
- `export const X` → import with braces `{ X }`

---

## Using Data with Index Access (Basic Approach)

You can manually access each item by index:

```jsx
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image}
/>
```

This works and demonstrates:

- Components are reused
- Data changes based on input (props)

But this approach becomes repetitive.

---

## Cleaner Alternative: Spread Operator for Props

If prop names match object property names, you can use the **spread operator**:

```jsx
<CoreConcept {...CORE_CONCEPTS[0]} />
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} />
```

What happens here:

- `{...CORE_CONCEPTS[0]}` spreads all key–value pairs
- Each key becomes a separate prop
- Equivalent to passing title, image, description manually

Benefits:

- Less code
- Cleaner JSX
- Easier to maintain

---

## Accepting Props in the Component (Basic)

Classic approach:

```jsx
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```

This is perfectly valid and readable.

---

## Cleaner Component Code with Destructuring

You can destructure props directly in the parameter list:

```jsx
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

What happens:

- JavaScript extracts `image`, `title`, `description` from `props`
- These become local variables
- Less repetition and cleaner JSX

Important:

- Property names **must match** the props being passed

---

## Compatibility of Both Approaches

Destructuring works with:

- Explicit props
- Spread props

Both of these work identically:

```jsx
<CoreConcept title="X" image={img} description="Y" />
<CoreConcept {...someObject} />
```

---

## Key Takeaways

- Move data into separate files for scalability
- Import named exports with curly braces
- Use the spread operator to reduce repetitive props
- Destructure props in component parameters for cleaner code
- One reusable component + dynamic props = powerful UI composition

---

## One-Sentence Summary

By storing UI data in external arrays, spreading objects into props, and destructuring props inside components, React components stay clean, reusable, and easy to scale.

# Advanced Props Patterns in React

This section extends the previous lecture and shows **additional, practical ways of working with props**. All of these are regular JavaScript patterns that React fully embraces.

---

## 1. Passing a Single Object as One Prop

If your data is already grouped in an object, you **don’t have to split it into multiple props**.

### Instead of splitting props

```jsx
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image}
/>
```

or even:

```jsx
<CoreConcept {...CORE_CONCEPTS[0]} />
```

you can pass **one object as one prop**:

```jsx
<CoreConcept concept={CORE_CONCEPTS[0]} />
```

### Using the object inside the component

```jsx
export default function CoreConcept({ concept }) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}
```

You can also destructure the object inside the component:

```js
const { title, description, image } = concept;
```

### When this approach is useful

- Clear component API (`concept` is one meaningful unit)
- Less prop “pollution”
- Good for domain-oriented components

---

## 2. Grouping Multiple Props into One Object (Rest Props)

React components always receive **one props object**, but you can explicitly group incoming props using the **rest operator**.

### Component usage (multiple props)

```jsx
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image}
/>
```

### Grouping props inside the component

```jsx
export default function CoreConcept({ ...concept }) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}
```

What happens here:

- `{ ...concept }` collects **all props** into one object
- `concept` now contains `title`, `description`, `image`

### Why this can be useful

- Forwarding props to other components
- Building wrapper or layout components
- Keeping component signatures flexible

---

## 3. Default Prop Values

Some props are **optional**. For example, a `Button` component might optionally receive a `type`.

### Component usage

With explicit type:

```jsx
<Button type="submit" caption="My Button" />
```

Without type:

```jsx
<Button caption="My Button" />
```

### Setting default values with destructuring

```jsx
export default function Button({ caption, type = "submit" }) {
  return <button type={type}>{caption}</button>;
}
```

What happens:

- If `type` is passed → it’s used
- If `type` is missing → `"submit"` is used automatically

This is **pure JavaScript**, not a React-specific feature.

---

## Mental Model Summary

- **Props are always one object**
- JSX attributes become key–value pairs inside that object
- You choose how to structure and consume them:
  - individual props
  - one grouped object
  - rest/spread patterns
  - default values

---

## One-Sentence Summary

React props are just JavaScript objects, which means you can pass them as single objects, regroup them with rest syntax, or assign default values using destructuring—choose the pattern that best fits your component’s API.
