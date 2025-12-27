# Quick Intro to HTML (HyperText Markup Language)

HTML (HyperText Markup Language) is the **standard language used to create web pages**. It describes the **structure and content** of a webpage using **elements (tags)**.

---

## Basic Structure of an HTML Document

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first paragraph.</p>
  </body>
</html>
```

---

## Common HTML Tags

| Tag        | Purpose                             |
|------------|-------------------------------------|
| `<h1>`     | Main heading                        |
| `<p>`      | Paragraph                           |
| `<a href="">` | Hyperlink                      |
| `<img src="">` | Image                         |
| `<ul>`, `<li>` | Unordered list & list items    |
| `<ol>`, `<li>` | Ordered list & list items      |
| `<div>`    | Container for grouping elements     |
| `<span>`   | Inline container                    |
| `<input>`  | Input field (e.g. in forms)         |
| `<form>`   | Form container                      |
| `<button>` | Clickable button                    |
| `<br>`     | Line break (no closing tag)         |

---

## Attributes (add details to tags)

```html
<a href="https://example.com" target="_blank">Visit Example</a>
<img src="logo.png" alt="Site logo" width="200">
```

- `href` → link destination
- `src` → image source
- `alt` → image description
- `target="_blank"` → open in new tab
- `width`, `height` → image size

---

## Nesting Elements

Elements can be **nested** inside each other:

```html
<div>
  <h2>My List</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

---

## Self-Closing Tags

Some tags don't need a closing tag:
- `<br>` (line break)
- `<hr>` (horizontal line)
- `<img>`, `<input>`, etc.

---

## Summary

- HTML builds the **structure** of webpages.
- Use tags like `<p>`, `<a>`, `<img>`, etc.
- Use attributes to control behavior.
- Nest tags properly and close them correctly.
- Combine HTML with CSS and JS for style and interaction.

``` Want to practice? Create a `.html` file and open it in your browser.```

```html
<!-- Save as index.html and open in browser -->
<!DOCTYPE html>
<html>
  <head><title>Test Page</title></head>
  <body><h1>It works!</h1></body>
</html>
```

# HTML Basics – Creating a Simple Web Page (Step-by-step)

---

## 1. Create a Text File

- HTML is **plain text**.
- Start by creating a text file:  
  Right click → New → Text Document  
  Rename it (e.g. `my_website.txt`).

---

## 2. Write Basic Text

Open the file in a text editor (like Notepad) and type:

```text
Hello world
```

Save the file.

---

## 3. Convert to HTML

- **Rename** file extension from `.txt` to `.html`:
  - Right click → Rename → change `my_website.txt` to `my_website.html`
- If you **don’t see extensions**:
  - Open File Explorer → View → Check "File name extensions"

---

## 4. Open in Browser

- Double click the `.html` file
- It will open in your **default browser**
- You should see the text `Hello world` on a blank page

---

## 5. Add More Text and Reload

- Open the `.html` file in your editor again
- Add more text, like:

```text
Welcome to my website
```

- Save (Ctrl+S)
- Refresh browser

---

## 6. Add HTML Elements

Now start using **HTML tags** to format the page.

### Button

```html
<button>Play</button>
```

- `<button>` = opening tag
- `Play` = content
- `</button>` = closing tag

Clicking the button does nothing yet (JavaScript needed for interactivity).

---

### Heading

```html
<h1>This is a heading</h1>
```

- `h1` is the most important heading
- You can also use `h2`, `h3`, ..., `h6` for subheadings
- Only use **one `<h1>`** per page (for SEO)

---

### Paragraphs

```html
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
```

- `<p>` is for regular text
- Each paragraph gets its own line

---

## 7. Putting It All Together

Here is an example HTML file combining everything so far:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to my web page</h1>

    <h2>HTML</h2>
    <p>HTML defines the structure of a web page.</p>
    <button>Learn more</button>

    <h2>CSS</h2>
    <p>CSS defines how a page looks.</p>
    <button>Learn more</button>

    <h2>JavaScript</h2>
    <p>JavaScript makes the page interactive.</p>
    <button>Learn more</button>
  </body>
</html>
```

---

## Summary

- HTML is a text-based markup language
- Websites are just `.html` files interpreted by browsers
- Tags consist of:
  - Opening tag `<tag>`
  - Content
  - Closing tag `</tag>`
- Important tags:
  - `<h1>` to `<h6>`: headings
  - `<p>`: paragraphs
  - `<button>`: buttons

---

## What's Next?

In the next lesson:
- Learn about **HTML attributes**
- Customize your elements using:
  - `class`
  - `id`
  - `style`
  - `href`, `src`, etc.

```💬 Remember: browsers read and render your code. The better you structure it, the clearer your website will be.```

# HTML Tags & Attributes – Self-closing Tags & Modifiers

---

## Recap: HTML Elements

- Standard elements:
  ```html
  <tagname>Content</tagname>
  ```
- Reason: Define where element **starts and ends**.
- Used when element contains content (e.g. text, child elements).

---

## Self-closing Tags

Some tags have **no content** and don’t need a closing tag. These are **self-closing**.

### Syntax:
```html
<tagname />
```

Or (not recommended):
```html
<tagname>
```

> Best practice is to include `/` for clarity and React compatibility.

---

### `<br />` – Line Break

- Inserts a line break in text.
- Can be used multiple times to create more vertical space.

```html
<p>Line one<br />Line two<br /><br />Extra space</p>
```

---

### `<hr />` – Horizontal Rule

- Inserts a horizontal line.
- Used to visually separate sections of content.

```html
<p>Section above</p>
<hr />
<p>Section below</p>
```

---

##  `<input />` – Input Field

- Self-closing element
- Used to collect **user input**
- Supports many **input types** (text, number, checkbox, date, file, etc.)

---

## HTML Attributes

- **Attributes** modify the behavior or appearance of elements.
- Placed inside the **opening tag**, after the element name.
- Syntax:
  ```html
  <element attribute="value" />
  ```

---

### `type` Attribute

Changes the type of `<input />`:

```html
<input type="number" />
```

- Only numeric input allowed.
- Browser adds number increment/decrement arrows.

---

### `placeholder` Attribute

Gives users a hint about what to enter:

```html
<input type="number" placeholder="Enter your age" />
```

- Displays faded text inside input field.
- Text disappears when user starts typing.

---

## Summary

| Tag        | Description                         | Self-closing? | Common Attributes       |
|------------|-------------------------------------|----------------|--------------------------|
| `<br />`   | Line break                          | ✅             | –                        |
| `<hr />`   | Horizontal line                     | ✅             | –                        |
| `<input />`| User input field                    | ✅             | `type`, `placeholder`    |

---

## Best Practices

- **Always close** self-closing tags with `/` (e.g. `<br />`)
- Use attributes to:
  - Modify behavior (e.g. `type="number"`)
  - Improve UX (e.g. `placeholder="..."`)
- All attributes should use **double quotes** around values

---

## Up Next

In the next lesson, you’ll learn how to use **Visual Studio Code (VS Code)** as your main editor.  
It will boost productivity, provide auto-completion, syntax highlighting, and more developer tools.

```💡 Remember: Tags define what appears. Attributes define how it behaves.```

# Basic HTML Structure

---

## Why Structure Matters
- Professional HTML code should always follow a **basic structure**.
- Provides the browser with the **fundamental information** it needs.
- Helps keep code **readable and maintainable**.

---

## The Basic File
- Create a file named **index.html** → default homepage of any website.
- Open in browser via **copy path → paste into address bar**.

---

## The Root: `<html>...</html>`
- Encloses the entire web page.
- Contains two main child elements:
  - `<head>` → settings, metadata, external resources.
  - `<body>` → visible content.

---

## Parent & Child Relationship
- **Nesting**: Elements can be placed inside other elements.
- Example:
  ```html
  <html>
    <head> ... </head>
    <body> ... </body>
  </html>
  ```
- `<html>` = **parent** of `<head>` & `<body>`.
- `<head>` & `<body>` = **children** of `<html>`.

---

## The `<head>` Section
Contains **metadata** & settings:
- `<title>` → name shown in browser tab.
- `<meta charset="UTF-8">` → sets character encoding.
  - Ensures special characters (e.g. ü, é) are displayed correctly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - Adjusts page for mobile screens.
- Links to fonts, icons, CSS, or JS files.

---

## The `<body>` Section
- All **visible content** goes here.
- Example:
  ```html
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my first website!</p>
  </body>
  ```

---

## Tree Structure
- HTML documents form a **hierarchical tree**.
- Root: `<html>`
  - Branches: `<head>` & `<body>`
  - Leaves: nested elements like `<h1>`, `<p>`, `<button>`, etc.

---

## VS Code Shortcut
- Type `!` + **Enter** → auto-generates basic structure:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
    </body>
  </html>
  ```

---

## Summary
- **Basic structure is always required**.
- `<head>` → metadata for browser.
- `<body>` → everything users see.
- Use **indentation (tabs/spaces)** for readability.
- Start every page with `<!DOCTYPE html>` → ensures **HTML5 standard**.

```Tip: Spend 90% of your time inside `<body>`, but never forget the `<head>` gives your page context.```


# How to Add Images in HTML

---

## Step 1: Get an Image

- Use any image file (`.jpg`, `.jpeg`, `.png`, `.gif`, etc.)
- You can find copyright-free images on [pixabay.com](https://pixabay.com)
- Save the image to your project folder, ideally next to your `index.html` file

---

## Step 2: Use the `<img>` Tag

```html
<img src="brandenburger_tor.jpeg" />
```

- `<img>` is a self-closing tag → no `</img>` needed
- The `src` (source) attribute defines the path to the image file

If the image is in the same folder as the HTML file, you can write just the filename  
Don’t forget the correct file extension: `.jpg`, `.jpeg`, `.png`, etc.

---

## Better Structure: Use an `images/` Folder

1. Create a folder named `images` in your project
2. Move your image file into that folder
3. Update the path in the `src` attribute:

```html
<img src="images/brandenburger_tor.jpeg" />
```

---

## Path Matters

- File paths are case-sensitive on most servers
- If you move the file, you must update the path
- Incorrect path → image won’t display

---

## Example: Full HTML Snippet

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Image Demo</title>
  </head>
  <body>
    <h1>Welcome to Berlin!</h1>
    <img src="images/brandenburger_tor.jpeg" />
  </body>
</html>
```

---

## Summary

| Tag      | Purpose                        |
|----------|--------------------------------|
| `<img>`  | Displays an image              |
| `src`    | File path to the image         |

Tip: Organize your project with folders like `images/`, `css/`, `js/`, etc.

---

# Relative Paths in HTML

---

## Why You Need Paths

Websites often include external resources:
- Images
- Icons
- Videos
- Scripts
- Stylesheets

To include these files in your HTML, you need to **reference them using a file path**.

---

## Recap: Basic Image Path

If your HTML file is in the root of your project and the image is in the `images/` folder:

```html
<img src="images/brandenburger_tor.jpg" />
```

---

## Navigating Folders with Relative Paths

### 1. Go **deeper** into a folder (child)

If the image is inside a subfolder, e.g., `images/test/`:

```html
<img src="images/test/brandenburger_tor.jpg" />
```

Each `/` means one level deeper into the folder structure.

---

### 2. Go **up** to a parent folder

Use `../` to move up one folder:

If the HTML file is in `images/test/` and the image is in `images/`:

```html
<img src="../brandenburger_tor.jpg" />
```

If the image is in the **project root** and the HTML file is two levels deeper:

```html
<img src="../../brandenburger_tor.jpg" />
```

Each `../` goes one level up from the current HTML file location.

---

## Summary Table

| Action                        | Path Syntax Example                              |
|------------------------------|--------------------------------------------------|
| Same folder                  | `brandenburger_tor.jpg`                         |
| Inside folder                | `images/brandenburger_tor.jpg`                 |
| One folder deeper            | `images/test/brandenburger_tor.jpg`            |
| One folder up                | `../brandenburger_tor.jpg`                     |
| Two folders up               | `../../brandenburger_tor.jpg`                  |

---

## Best Practices

- Always keep your `index.html` in the **project root** for simplicity
- Use clear folder names like `images/`, `css/`, `js/`
- Use **relative paths** for better portability between environments
- Keep paths consistent to avoid broken links

---

# Image Attributes and Optimization in HTML

---

## 1. `alt` Attribute – Image Description

The `alt` attribute provides a **text description** of the image.

```html
<img src="images/brandenburger_tor.jpg" alt="Brandenburger Tor in Berlin">
```

### Why it's important:
1. **Fallback content**: If the image cannot be loaded (e.g. bad path), the alt text is shown.
2. **Accessibility**: Screen readers use `alt` text for visually impaired users.
3. **SEO**: Keywords in `alt` attributes help improve Google search ranking.

---

## 2. `height` and `width` Attributes

These attributes define the space an image occupies on the page.

```html
<img src="images/brandenburger_tor.jpg" alt="Brandenburger Tor in Berlin" width="400">
```

- If you **only set width**, the height adjusts automatically to preserve aspect ratio.
- If you **only set height**, the width adjusts accordingly.
- If you set **both**, ensure correct aspect ratio to avoid distortion.

### How to check real image dimensions:
1. Right-click the image file on your system.
2. Go to **Properties > Details**.
3. Find actual **width** and **height**.

### Maintaining Aspect Ratio:
If you know the original size and set only one dimension (e.g. width), HTML will auto-scale correctly.

---

## 3. Preventing Cumulative Layout Shift (CLS)

### What is CLS?
CLS = Cumulative Layout Shift  
→ Unexpected movement of page elements as images or fonts load.

### Why it matters:
- Impacts **user experience** and **SEO ranking**
- Caused when images load **without reserved space**

### Solution:
Define `width` and `height` in HTML to **pre-allocate space**.

```html
<img src="images/photo.jpg" alt="Description" width="600" height="400">
```

---

## 4. Image Resolution and Performance

- **High resolution** looks good but increases load time.
- Avoid using **4K resolution** for small icons or thumbnails.
- Never upscale small images – it leads to poor quality.
- **Reducing** image size is okay, but:
  - Too much reduction = blurry image
  - Consider using optimized lower-resolution versions for faster loading

---

## Summary

| Feature          | Purpose                                                        |
|------------------|----------------------------------------------------------------|
| `alt`            | Describes image for fallback, accessibility, SEO              |
| `width`/`height` | Reserves space, prevents layout shifts (CLS)                  |
| Proper resolution| Balances quality and performance                              |

Use:
```html
<img src="..." alt="..." width="..." height="...">
```

To ensure images load predictably, look professional, and support SEO.

# Semantic HTML – Structure with Meaning

---

## What Is Semantic HTML?

Semantic HTML means **using HTML elements according to their meaning**, not their appearance.

- Example:  
  ```html
  <h1>Welcome to My Website</h1>
  ```

  - ✅ It's big – yes, but **that's visual** (can be changed with CSS).
  - ✅ More importantly – it signals this is the **main heading** of the page.

Search engines (e.g. Google) and screen readers (used by blind users) rely on these semantic cues.

---

## Why Is Semantic HTML Important?

| Benefit                          | Explanation                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| ✅ SEO (Search Engine Optimization) | Keywords in elements like `<h1>`, `<article>` help Google understand content |
| ✅ Accessibility                 | Screen readers interpret semantic elements more meaningfully                |
| ✅ Developer clarity             | Easier to maintain, read and collaborate on the code                        |

---

## Semantic vs Non-Semantic Elements

| Semantic Elements       | Purpose                                | Visible Effect |
|-------------------------|----------------------------------------|----------------|
| `<header>`              | Top of a page or section               | Minimal        |
| `<nav>`                 | Navigation links container             | None           |
| `<main>`                | Main content of the page               | None           |
| `<section>`             | Thematic grouping of content           | None           |
| `<article>`             | Self-contained content (e.g., blog)    | None           |
| `<aside>`               | Side content (e.g., sidebar, notes)    | None           |
| `<footer>`              | Footer of the page or section          | Minimal        |
| `<h1>–<h6>`             | Headings with decreasing importance    | Yes (default styles) |
| `<p>`, `<ul>`, `<li>`   | Paragraphs and lists                   | Yes            |

---

## Non-Semantic Elements

These elements **have no inherent meaning** and are mostly used for styling/layout.

### `<div>` – Block Container

```html
<div class="card">
  <h2>Article Title</h2>
  <p>Some content inside a styled box.</p>
</div>
```

- **Block-level**
- Often used for layout and structure in CSS
- No semantic meaning

### `<span>` – Inline Container

```html
<p>This is a <span class="highlight">highlighted</span> word.</p>
```

- **Inline**
- Used to apply styles to parts of text
- No semantic meaning

---

## Example: Semantic vs Non-Semantic

### ✅ Semantic

```html
<article>
  <h2>Latest News</h2>
  <p>Today something great happened...</p>
</article>
```

### ❌ Non-Semantic

```html
<div class="article">
  <div class="title">Latest News</div>
  <div class="text">Today something great happened...</div>
</div>
```

- Visually similar, but lacks meaning for search engines and screen readers

---

## Best Practices

- Use semantic elements **when they make sense**
- Use `<div>` and `<span>` **only** when no semantic alternative fits
- Semantic HTML improves:
  - SEO
  - Accessibility
  - Code readability
  - Long-term maintainability

---

## Summary

- Semantic HTML = structure based on **meaning**, not looks.
- Elements like `<nav>`, `<header>`, `<article>`, `<section>` add clarity.
- Non-semantic: `<div>` (block), `<span>` (inline) – for styling only.
- HTML5 brought semantic HTML to the forefront of web development.

Always choose semantic elements to build accessible, well-structured, and SEO-friendly websites.

# Text Formatting in HTML

---

## Overview

In HTML, you can modify text to:

- Emphasize importance
- Indicate changes
- Style certain parts of content

This is done using semantic HTML tags, which may also affect how the text appears.

---

## Bold Text

### `<strong>` – Important Text (Semantic)

```html
<p>This is <strong>important</strong> text.</p>
```

- Renders as **bold**
- Indicates that the content has **semantic importance**
- Recognized by screen readers and search engines

### `<b>` – Bold Text (Styling Only)

```html
<p>This is <b>bold</b> text.</p>
```

- Also renders as **bold**
- Has **no semantic meaning**
- Use only when visual boldness is needed without implying importance

---

## Italic Text

### `<em>` – Emphasized Text (Semantic)

```html
<p>This is <em>emphasized</em> text.</p>
```

- Renders as *italic*
- Adds **meaningful emphasis**
- Preferred when the text should stand out semantically

### `<i>` – Italic Text (Styling Only)

```html
<p>This is <i>italic</i> text.</p>
```

- Renders as *italic*
- No semantic value

---

## Highlighted Text

### `<mark>` – Highlighted or Relevant Text

```html
<p>This is <mark>highlighted</mark> text.</p>
```

- Typically rendered with a yellow background
- Used to draw attention to parts of text with **special relevance**

---

## Deleted Text

### `<del>` – Deleted or Invalid Text

```html
<p>Old price: <del>$99.99</del></p>
```

- Renders with a **strikethrough**
- Indicates text that has been **removed or deprecated**

---

## Inserted Text

### `<ins>` – Newly Added Text

```html
<p>New price: <ins>$79.99</ins></p>
```

- Renders with an **underline**
- Represents content that has been **inserted or added**

---

## Summary

| Tag      | Purpose                          | Styling Effect     | Semantic Meaning |
|----------|----------------------------------|--------------------|------------------|
| `<strong>` | Important text                  | Bold               | Yes              |
| `<b>`     | Bold styling                     | Bold               | No               |
| `<em>`    | Emphasized importance            | Italic             | Yes              |
| `<i>`     | Italic styling                   | Italic             | No               |
| `<mark>`  | Highlight relevance              | Highlighted (bg)   | Yes              |
| `<del>`   | Indicate removed text            | Strikethrough      | Yes              |
| `<ins>`   | Indicate inserted text           | Underline          | Yes              |

---

## Final Note

While these tags **do affect styling**, their **primary role is semantic**.  
For more flexible and consistent visual design, it's better to use **CSS**.

However, understanding and using these tags appropriately helps build accessible and meaningful HTML structures.

# Anchor Tag in HTML (`<a>`)

---

## Purpose

The `<a>` tag (anchor) is used to create **hyperlinks** in HTML. It allows users to:

- Navigate to external websites
- Jump between internal subpages
- Move within a single page (anchors)

---

## Syntax

```html
<a href="https://www.youtube.com">This is a link to YouTube</a>
```

- `href`: **Hyperlink reference**, specifies the destination URL.
- The text between `<a>` and `</a>` is the **clickable content**.

---

## External Link Example

```html
<a href="https://www.youtube.com">Go to YouTube</a>
```

- Opens YouTube in the **same tab** by default.

---

## Internal Page Linking

Assume the following project structure:

```
project-folder/
├── index.html
└── about-us.html
```

### Link from `index.html` to `about-us.html`:

```html
<a href="about-us.html">About Us</a>
```

### Link from `about-us.html` back to `index.html`:

```html
<a href="index.html">Back to Home Page</a>
```

- Works because both files are in the **same directory**
- If files are nested in folders, use **relative paths**

---

## Opening Links in New Tab

### `target="_blank"` attribute

The `target` attribute in the `<a>` tag specifies **where to open the linked document**.  
Here are the most common values:

---

## ✅ Overview of `target` attribute values

| Value            | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `_self`          | (default) Opens the link in the **same tab/window**                         |
| `_blank`         | Opens the link in a **new tab or window**                                   |
| `_parent`        | Opens the link in the **parent frame** (used with nested framesets)         |
| `_top`           | Opens the link in the **full body of the window**, removing all frames      |
| `framename`      | Opens the link in a **named frame or iframe** with the specified name       |

---

## 🔎 Examples

### Open in the same tab (default)

```html
<a href="page.html" target="_self">Open in same tab</a>
```

### Open in a new tab

```html
<a href="https://example.com" target="_blank">Open in new tab</a>
```

### Open in parent frame (useful with frames)

```html
<a href="parent.html" target="_parent">Open in parent frame</a>
```

### Break out of a frame

```html
<a href="main.html" target="_top">Open in top window</a>
```

### Open in named iframe

```html
<iframe name="myframe"></iframe>

<a href="video.html" target="myframe">Load video in iframe</a>
```

---

## 💡 Notes

- **Security tip:** When using `target="_blank"`, consider also adding `rel="noopener noreferrer"` to prevent [tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing).
  
  Example:

  ```html
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Open safely in new tab
  </a>
  ```

- Frames and iframes are rarely used for entire layouts today but may still be relevant in special cases.

---

## Summary

| Attribute | Description                                 | Example                        |
|-----------|---------------------------------------------|--------------------------------|
| `href`    | Specifies the URL or path to link to        | `href="about-us.html"`         |
| `target`  | Specifies how the link opens                | `target="_blank"`              |

- Use `<a>` to link between external and internal resources
- Maintain correct relative paths
- Use `target="_blank"` for better UX when needed

# Creating Anchor Links to Elements on the Same Page

In this lesson, you’ll learn how to create **internal page links**—links that scroll to a specific element on the same HTML page. This is often used in documentation pages (like Wikipedia) for quick navigation.

---

## Example Scenario

Let's say we have a long article. Somewhere deep in the page, there’s a heading:

```html
<h2 id="myExampleHeading">Hello World!</h2>
```

We want to scroll to this heading when the user clicks a link.

---

## Step-by-Step Guide

### 1. Assign an `id` to the target element

The `id` attribute is used to uniquely identify the element you want to scroll to:

```html
<h2 id="myExampleHeading">Hello World!</h2>
```

- The `id` must be **unique** in the page.
- No **spaces** allowed — use **dashes**, **underscores**, or **camelCase**.

### 2. Create a link to that `id`

Use the `<a>` tag and set the `href` to `#` followed by the element's ID:

```html
<a href="#myExampleHeading">Go to Hello World</a>
```

- The `#` symbol tells the browser to look for an element **with a matching `id`**.

---

## Full Working Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal Link Example</title>
</head>
<body>

  <!-- Navigation bar with internal link -->
  <nav>
    <a href="#myExampleHeading">Jump to Section</a>
  </nav>

  <!-- Simulated long content -->
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <!-- Add more paragraphs as needed -->

  <!-- Target element with ID -->
  <h2 id="myExampleHeading">Hello World!</h2>

</body>
</html>
```

---

## Use Cases

- Table of contents for long documents
- "Back to top" buttons
- Footnotes and citations
- Navigation for single-page websites

---

## Notes

- The scroll may **jump** or **smooth-scroll**, depending on the browser or CSS.
- You can enable smooth scrolling via CSS:

```css
html {
  scroll-behavior: smooth;
}
```

# HTML Lists – `ul`, `ol`, and Nested Lists

In HTML, **lists** are used to organize items in a structured way. There are three main types of lists:

---

## 1. Unordered List (`<ul>`)

- Represents a **bulleted list**.
- Order **doesn't matter**.
- Commonly used for navigation menus, features, or generic item groups.

**Syntax:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Rendered output:**
- Item 1  
- Item 2  
- Item 3

---

## 2. Ordered List (`<ol>`)

- Represents a **numbered list**.
- Order **matters** (e.g. steps, rankings, instructions).

**Syntax:**
```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

**Rendered output:**
1. First step  
2. Second step  
3. Third step

You can also change the numbering style with the `type` attribute:
```html
<ol type="A"> <!-- Uppercase letters -->
<ol type="a"> <!-- Lowercase letters -->
<ol type="I"> <!-- Roman numerals -->
<ol type="i"> <!-- Lowercase roman -->
```

---

## 3. Nested Lists

- You can nest one list inside another by placing a new `<ul>` or `<ol>` inside an `<li>` element.
- Useful for subcategories or grouped information.

**Example:**
```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

**Rendered output:**
- Fruits  
  - Apple  
  - Banana  
- Vegetables  
  - Carrot  
  - Broccoli  

---

## 4. List Attributes and Styling (Optional)

- `start`: Define the starting number for an ordered list
  ```html
  <ol start="5">
    <li>Item A</li>
    <li>Item B</li>
  </ol>
  ```

- `reversed`: Count numbers in reverse
  ```html
  <ol reversed>
    <li>Last</li>
    <li>Second</li>
    <li>First</li>
  </ol>
  ```

- CSS can be used to customize bullet styles or numbering.

---

## Notes

- Lists are **semantic HTML elements**.
- `<li>` stands for "list item" and must be inside a `<ul>` or `<ol>`.
- Avoid using `<br>` between `<li>` items — structure should stay clean.

---

## Use Cases

- Site navigation menus
- Feature highlights
- Step-by-step instructions
- FAQs with nested answers
- Shopping lists, rankings, grouped content

---

# HTML Comments

HTML comments are used to **explain code**, **leave notes**, or **temporarily disable parts of the code** without deleting them. Comments are ignored by the browser and do not affect the output of the page.

---

## Syntax

```html
<!-- This is a comment -->
```

- Starts with `<!--`
- Ends with `-->`
- Everything inside is ignored by the browser

---

## Example

```html
<!-- TODO: Add login form -->
<p>Welcome to the homepage</p>
<!-- <p>This paragraph is currently commented out</p> -->
```

---

## Use Cases

### 1. **Documentation for Yourself or Other Developers**

You can describe parts of your code, especially useful in large projects:

```html
<!-- Main navigation menu -->
<nav>
  <a href="index.html">Home</a>
</nav>
```

---

### 2. **Temporarily Disabling Code**

Instead of deleting code you're not sure about, you can comment it out:

```html
<!--
<section>
  <h2>Deprecated Feature</h2>
  <p>This feature is no longer needed.</p>
</section>
-->
```

This way you can restore it later if needed.

---

### 3. **TODO and Notes**

You can leave reminders or collaborative notes:

```html
<!-- TODO: Add responsive navbar -->
<!-- NOTE: This section needs redesign -->
```

---

## Developer Tools

### Comment Shortcut in VS Code

- **Single line:** Place your cursor on the line and press `Ctrl + /`
- **Multiple lines:** Highlight the section and press `Ctrl + /`

This shortcut toggles comments in HTML.

---

## Notes

- **HTML comments are not displayed** on the website.
- Avoid putting sensitive information inside comments — it's still visible in the page source.
- In HTML, comments are less critical than in programming languages like JavaScript, but still helpful for:
  - Documentation
  - Debugging
  - Collaboration

---

## Comments in Other Languages

- **CSS:**
  ```css
  /* This is a comment */
  ```
- **JavaScript:**
  ```js
  // Single-line comment
  /* Multi-line comment */
  ```

---

**Summary:**  
Use HTML comments to keep your code organized, test changes without deletion, and communicate intentions within your project.

# Simple HTML Project: "About Me" Page

This example demonstrates a complete, beginner-friendly HTML page using all the fundamental elements you've learned so far. Below is a breakdown of the structure and its purpose.

---

## Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
```

- `<!DOCTYPE html>` – Declares the document as HTML5.
- `<html lang="en">` – Root of the HTML document, with the language set to English.
- `<head>` – Contains meta-information (not visible to users).
- `<title>` – Title displayed in the browser tab.

---

## Page Content in `<body>`

### Main Heading

```html
<h1>Welcome to My Page</h1>
```

- Uses the `h1` tag to define the main title of the page.

---

### Introduction Paragraph

```html
<p>This is a short paragraph about me and what you can learn from this website.</p>
```

- The `<p>` tag is used for paragraph text.

---

### Section 1: Favorite Foods

```html
<h2>My Top 3 Favorite Foods</h2>
<hr>
<ol>
  <li>Pizza</li>
  <li>Sushi</li>
  <li>Tacos</li>
</ol>
```

- `<h2>` – Subheading for this section.
- `<hr>` – Horizontal line separator.
- `<ol>` – Ordered list (numbered).
- `<li>` – List items.

---

### Section 2: Hobbies

```html
<h2>Things I Like to Do in My Free Time</h2>
<hr>
<ul>
  <li>Reading books</li>
  <li>Going for walks</li>
  <li>Learning to code</li>
</ul>
```

- `<ul>` – Unordered list (bullet points).

---

### Section 3: Learning About My City

```html
<h2>Learn More About My City</h2>
<hr>
<ul>
  <li>History of the city</li>
  <li>Famous landmarks</li>
  <li>Events and festivals</li>
</ul>
```

---

## Navigation Section

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

- `<nav>` – Semantic tag indicating this block is for navigation.
- `<a href="...">` – Anchor tag creating clickable links.
- The links lead to other HTML pages within the project.

---

## Image with Attributes

```html
<img 
  src="images/brandenburg-gate.jpg" 
  alt="Brandenburger Tor in Berlin" 
  width="500"
/>
```

- `<img>` – Embeds an image.
- `src` – Path to the image file.
- `alt` – Descriptive text for accessibility and SEO.
- `width` – Controls display size and helps prevent layout shifts (CLS).

---

## Closing Tags

```html
</body>
</html>
```

---

## Summary

This project brings together:
- Headings (`h1`, `h2`)
- Paragraphs (`p`)
- Lists (`ol`, `ul`, `li`)
- Navigation (`nav`, `a`)
- Images (`img`)
- Semantic structure and best practices

It’s a complete and valid HTML document. If yours looks similar – you're on the right path. Now you're ready to move on to advanced HTML elements.

# HTML Forms: Inputs, Attributes & Advanced Options

HTML forms are essential for collecting user data. They consist of various **input fields**, each with specific purposes. With attributes like `type`, `placeholder`, `value`, and `id`, you can guide users to provide the right kind of input.

---

## `<form>` Element

Defines the form container. Optionally includes:

```html
<form action="/submit" method="post">
  <!-- form inputs -->
</form>
```

### Common attributes:
| Attribute | Description |
|----------|-------------|
| `action` | URL where the form data is sent |
| `method` | HTTP method: `get` or `post` |
| `autocomplete` | Enable/disable browser autocomplete (`on` / `off`) |
| `novalidate` | Prevents browser's default validation |

---

## `<input>` Element

The `<input>` tag is self-closing and handles various **types of input**.

### Syntax:
```html
<input type="text" id="name" name="name" placeholder="Enter your name" required />
```

### Common attributes:
| Attribute | Description |
|----------|-------------|
| `type` | Specifies the type of input field |
| `placeholder` | Hint shown inside the input |
| `value` | Predefined value |
| `required` | Makes the field mandatory |
| `readonly` | Prevents editing |
| `disabled` | Disables the input |
| `maxlength` / `minlength` | Limits input length |
| `min` / `max` | Minimum and maximum values (for number, date, etc.) |
| `step` | Specifies increment for numeric/date inputs |
| `pattern` | Regex for input validation |

---

### Common `type` values:

| Type | Purpose |
|------|---------|
| `text` | Single-line text input |
| `number` | Numeric input (with arrows) |
| `email` | Validates email address |
| `password` | Masks input text |
| `tel` | Telephone number |
| `url` | URL input |
| `search` | Search field styling |
| `checkbox` | Toggle true/false |
| `radio` | Select one from a group |
| `file` | Upload files |
| `date` | Date picker |
| `time` | Time input |
| `datetime-local` | Date and time |
| `month` | Select month |
| `range` | Slider (numeric range) |
| `color` | Color picker |
| `hidden` | Hidden field (not shown on page) |
| `submit` | Submit the form |
| `reset` | Reset all form values |

---

## `<label>` Element

Improves accessibility and UX:

```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" />
```

- `for` must match the input's `id` to link the two.

---

## Dropdowns: `<select>` & `<option>`

Create a dropdown menu:

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="cz" selected>Czech Republic</option>
  <option value="de">Germany</option>
  <option value="sk">Slovakia</option>
</select>
```

### Attributes:
- `value`: The data submitted for this option
- `selected`: Sets default selected option
- `disabled`: Disables an option
- `multiple`: Allows selecting multiple values

---

## Text Areas: `<textarea>`

Multiline text input:

```html
<label for="bio">About you:</label>
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Write something..."></textarea>
```

---

## Submit and Reset Buttons

```html
<input type="submit" value="Submit" />
<input type="reset" value="Clear Form" />
<button type="submit">Send</button>
<button type="button">Click me</button> <!-- No default behavior -->
```

---

## Grouping Inputs: `<fieldset>` and `<legend>`

```html
<fieldset>
  <legend>Login Info</legend>
  <label for="user">Username:</label>
  <input type="text" id="user" name="user" />
</fieldset>
```

Used for visual and semantic grouping of form fields.

---

## Example Form:

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required minlength="6" />

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="0" max="120" />

  <label for="color">Favorite Color:</label>
  <input type="color" id="color" name="color" />

  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="cz">Czech Republic</option>
    <option value="de">Germany</option>
    <option value="sk">Slovakia</option>
  </select>

  <input type="submit" value="Register" />
</form>
```

---

## Summary

| Tag | Description |
|-----|-------------|
| `<form>` | Main container for input fields |
| `<input>` | Various field types based on `type` |
| `<label>` | Describes inputs, improves accessibility |
| `<select>` / `<option>` | Dropdown menu |
| `<textarea>` | Multi-line text input |
| `<fieldset>` / `<legend>` | Group and describe inputs |
| `<button>` | Customizable action buttons |

In the next lesson, you will learn how to **style forms using CSS** and handle user input with **JavaScript**.

# HTML Input Types — Overview and Use Cases

HTML provides a wide range of input types to handle different kinds of user input in web forms. Below is an overview of the most commonly used types along with examples and descriptions.

---

## 🔹 Syntax Overview

```html
<form>
  <input type="text" />
</form>
```

The `<input>` element is self-closing and the behavior is determined by the `type` attribute.

---

## Text Input

```html
<input type="text" name="username" placeholder="Enter your name" />
```

- Default input type.
- Used for short single-line text input.

---

## Number Input

```html
<input type="number" name="age" min="0" max="120" step="1" />
```

- Accepts numeric input only.
- Attributes like `min`, `max`, and `step` control the valid range.

---

## Email Input

```html
<input type="email" name="user_email" placeholder="Enter your email" />
```

- Requires valid email format.
- Offers built-in validation.

---

## Password Input

```html
<input type="password" name="password" />
```

- Masks the input characters for privacy.

---

## Checkbox Input

```html
<label>
  <input type="checkbox" name="subscribe" /> Subscribe to newsletter
</label>
```

- Allows multiple selections.

---

## Radio Input

```html
<label><input type="radio" name="gender" value="male" /> Male</label>
<label><input type="radio" name="gender" value="female" /> Female</label>
```

- Allows a single selection from a group.
- All radio inputs in a group must share the same `name`.

---

## Submit Button

```html
<input type="submit" value="Submit Form" />
```

- Submits the form.

---

## Reset Button

```html
<input type="reset" value="Clear Form" />
```

- Resets all fields in the form.

---

## Date Picker

```html
<input type="date" name="birthdate" />
```

- Allows selecting a date from a calendar UI.

---

## Time Picker

```html
<input type="time" name="appointment" />
```

- Allows selecting a specific time.

---

## Color Picker

```html
<input type="color" name="favcolor" />
```

- Opens a color selector.

---

## File Upload

```html
<input type="file" name="profile_picture" />
```

- Allows users to upload one or multiple files.

---

## Search Input

```html
<input type="search" name="search_query" placeholder="Search..." />
```

- Similar to text input but may include a clear (X) button.

---

## Range Input

```html
<input type="range" name="volume" min="0" max="100" />
```

- Renders a slider for numeric input within a range.

---

## Tel Input

```html
<input type="tel" name="phone" placeholder="123-456-7890" />
```

- Intended for phone numbers (no automatic validation).

---

## Hidden Input

```html
<input type="hidden" name="user_id" value="12345" />
```

- Used to store data that should not be visible or editable by the user.

---

## Labels and Accessibility

Each input can be paired with a `<label>` using the `for` attribute:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

This improves accessibility and user experience.

---

## Select Dropdown Example

```html
<label for="country">Choose your country:</label>
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="de">Germany</option>
  <option value="cz">Czech Republic</option>
</select>
```

- `<select>` renders a dropdown list.
- Use the `selected` attribute to set a default.

---

## Best Practices

- Use semantic input types to help browsers and accessibility tools.
- Combine with proper labels for clarity.
- Use placeholder text for guidance.
- Use `required`, `pattern`, and `maxlength` for validation when needed.

---

## Resources

- [MDN Web Docs – Input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [W3Schools – HTML Input Types](https://www.w3schools.com/html/html_form_input_types.asp)

# Web Inspector — Developer Tool Overview

The **Web Inspector** (also known as Developer Tools or DevTools) is an essential tool included in every modern browser. It helps developers inspect, debug, and optimize websites by analyzing the actual HTML, CSS, and JavaScript **as rendered by the browser**.

---

## Purpose of the Web Inspector

- Inspect the **rendered structure** of a web page.
- Understand how the browser interprets your HTML, CSS, and JavaScript.
- Modify and test code **in real-time**.
- Debug layout, style, and functionality issues.
- Learn from other websites by analyzing their implementation.

---

## How to Open the Web Inspector

### In Google Chrome
- **Right-click** on any element and select **Inspect**
- OR use the shortcut:
  ```
  Ctrl + Shift + I
  ```

### In Firefox
- Right-click > Inspect
- OR use:
  ```
  Ctrl + Shift + I
  ```

---

## Interface Overview

By default, the Web Inspector consists of multiple panels, including:

- **Elements**: Displays the DOM (HTML) structure.
- **Styles**: Shows CSS rules for selected elements.
- **Console**: Displays JavaScript errors, logs, and can run JS code.
- **Network**: Monitors HTTP requests and resource loading.
- **Sources**: Shows JavaScript files and allows debugging with breakpoints.
- **Performance**, **Memory**, **Application**, etc.

For now, we focus on the **Elements** panel.

---

## Elements Panel

- View the complete **HTML DOM structure**.
- Expand/collapse elements using arrows to reveal nested tags.
- Inspect **attributes**, **IDs**, **classes**, and **text content**.
- When you **hover** over elements in the DOM, the browser **highlights** them on the page with:
  - Box dimensions
  - Margins and paddings
  - Layout spacing

---

## Editing HTML and CSS

You can directly **edit content** in the Elements panel:

### Example: Modify Text
1. Locate an element (e.g., `<h1>`).
2. **Double-click** its content.
3. Edit the text (e.g., change to `Hello World`).
4. Press **Enter** to apply changes.

> Changes are only temporary and **affect your local browser session**.  
> They will be **reverted** on page refresh.

---

## Select Tool

- Click the **Select Element** icon (usually top-left in DevTools).
- Then click on any element on the page.
- The Elements panel will **scroll to and highlight** the selected element in the DOM.

---

## Use Cases

- **Debugging layout problems** (e.g., element overlapping or hidden).
- **Modifying styles** without editing source files.
- **Testing different content** or UI variations.
- **Learning from others** — explore how a feature was implemented.
- Quickly jumping to source of error or unexpected behavior.

---

## Important Notes

- Web Inspector only shows **client-side rendered code**.
- It **does not** give access to server-side logic, databases, or source files.
- All changes are **non-persistent** — use them for testing and debugging only.

---

## Next Steps

- Explore other DevTools tabs like **Console**, **Network**, and **Sources**.
- Learn how to use the **CSS panel** to test new styles live.
- Understand browser rendering and optimization workflows.

---

## Additional Resources

- [Chrome DevTools Docs](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [MDN – Inspecting Network Activity](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor)

# HTML Tables

In this lesson, we explore how to create and structure **tables in HTML**, including semantic elements like headers and body.

---

## Basic Table Structure

To define a table in HTML, use the `<table>` tag.  
Tables are structured in **rows** (`<tr>`) and **cells** (`<td>` for data and `<th>` for headers).

### Example:
```html
<table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Year of Birth</th>
  </tr>
  <tr>
    <td>Albert</td>
    <td>Einstein</td>
    <td>Male</td>
    <td>1879</td>
  </tr>
  <tr>
    <td>Stephen</td>
    <td>Hawking</td>
    <td>Male</td>
    <td>1942</td>
  </tr>
</table>
```

---

## Explanation of Table Tags

| Tag         | Meaning                    | Purpose                                      |
|-------------|----------------------------|----------------------------------------------|
| `<table>`   | Table                      | Wraps the entire table structure             |
| `<tr>`      | Table Row                  | Defines a single row of cells                |
| `<th>`      | Table Header               | Creates header cells (usually bold and centered by default) |
| `<td>`      | Table Data                 | Creates standard data cells                  |

---

## Semantically Structuring Tables

HTML provides additional tags to **group** table rows into logical sections:

### `<thead>`
- Groups **header rows**
- Usually contains `<th>` cells
- Useful for styling and accessibility

### `<tbody>`
- Groups the **main data rows**
- Usually contains multiple `<tr>` with `<td>` cells

### Example:
```html
<table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Year of Birth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Albert</td>
      <td>Einstein</td>
      <td>Male</td>
      <td>1879</td>
    </tr>
    <tr>
      <td>Stephen</td>
      <td>Hawking</td>
      <td>Male</td>
      <td>1942</td>
    </tr>
  </tbody>
</table>
```

---

## Benefits of Using `<thead>` and `<tbody>`

- Improves **semantic clarity** of your HTML
- Enables **targeted CSS styling**
  ```css
  thead {
    background-color: #f0f0f0;
  }
  tbody tr:hover {
    background-color: #e0e0e0;
  }
  ```
- Enhances **accessibility** for screen readers
- Required for some JavaScript table manipulation libraries (e.g., DataTables)

---

## Additional Tags (Optional)

| Tag         | Meaning            | Description                                    |
|-------------|--------------------|------------------------------------------------|
| `<tfoot>`   | Table Footer        | Defines a footer section (e.g., totals, summary) |
| `colspan`   | Column Span         | Makes a cell span multiple columns             |
| `rowspan`   | Row Span            | Makes a cell span multiple rows                |
| `<caption>` | Table Caption       | Provides a title for the table                 |

---

## Summary

- Use `<table>`, `<tr>`, `<th>`, and `<td>` for basic tables.
- Wrap header rows in `<thead>`, and data rows in `<tbody>`.
- These tags help with styling, accessibility, and structure.

---

# Using HTML Tables for Layout (Legacy Method)

In this lesson, we explore how to use **HTML tables** to build simple page layouts. While modern layouts should be done using **CSS** (e.g., with Flexbox or Grid), tables can still be useful for **very basic side-by-side positioning**.

---

## Why Use Tables for Layout?

- HTML block elements (e.g., `<div>`, `<h1>`, `<p>`) are rendered **vertically by default**.
- Tables can force elements to be displayed **side by side** without needing CSS.
- Useful for quick mockups or email templates, but **not recommended for modern websites**.

---

## Example Layout: Image + Text Side by Side

We want to display:

- On the **left**: an image (Brandenburger Tor)
- On the **right**: a heading, address, and a Google Maps link

### HTML Before Layout
```html
<img src="brandenburg.jpg" height="200" width="300" alt="Brandenburger Tor">
<h1>Brandenburger Tor</h1>
<p>Pariser Platz, 10117 Berlin, Germany</p>
<a href="https://maps.google.com">View on Google Maps</a>
```

### Problem:
These elements will be rendered **one below the other**.

---

## HTML Using Table for Layout
We wrap the content in a `<table>` with one `<tr>` (table row) and two `<td>` (table data cells).

```html
<table cellspacing="20">
  <tr>
    <td>
      <img src="brandenburg.jpg" height="200" width="300" alt="Brandenburger Tor">
    </td>
    <td>
      <h1>Brandenburger Tor</h1>
      <p>Pariser Platz, 10117 Berlin, Germany</p>
      <a href="https://maps.google.com">View on Google Maps</a>
    </td>
  </tr>
</table>
```

---

## Explanation of Key Parts

| Tag/Attribute      | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `<table>`          | Wraps the entire layout                                                     |
| `<tr>`             | One row in the table                                                        |
| `<td>`             | Two cells: one for the image, one for the text                              |
| `cellspacing="20"` | Adds space (in pixels) between the two cells (not supported in HTML5 via attribute, better done via CSS) |
| `height`, `width`  | Define image size                                                           |

---

## Output in Browser

- The image appears on the **left**
- The heading, paragraph, and link appear **on the right**, aligned horizontally with the image
- A **20-pixel gap** appears between the columns

---

## Note on Modern Practice

- Tables were historically used for layout before CSS was widely supported.
- Today, use **CSS Flexbox** or **CSS Grid** for layout instead.
- Example (CSS alternative):
  ```html
  <div style="display: flex; gap: 20px;">
    <img src="brandenburg.jpg" height="200" width="300" alt="Brandenburger Tor">
    <div>
      <h1>Brandenburger Tor</h1>
      <p>Pariser Platz, 10117 Berlin, Germany</p>
      <a href="https://maps.google.com">View on Google Maps</a>
    </div>
  </div>
  ```

---

## Summary

- ✅ Tables can be used to place content **side by side** using rows and columns
- ⚠️ Use **CSS layout** for all production-level websites
- Use `<td>`, `<tr>`, and `cellspacing` for simple layout control

# Embedding Videos in HTML

In this lesson, you will learn how to display and control videos directly in your HTML web page using the `<video>` tag.

---

## 1. Basic Structure

To embed a video, use the `<video>` tag with the `src` attribute:

```html
<video src="videos/airport.mp4" width="640" height="360"></video>
```

- `src`: Path to the video file
- `width` and `height`: Control the video’s dimensions
- Ensure aspect ratio is maintained to avoid distortion (video won’t stretch)

---

## 2. Common Video File Formats

HTML5 video supports several formats:
- `.mp4` (most widely supported)
- `.webm`
- `.ogg`

For maximum compatibility, you can use multiple `<source>` tags:

```html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

---

## 3. Attributes for Controlling Behavior

| Attribute   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `controls`  | Displays default browser video controls (play, pause, fullscreen, etc.)    |
| `autoplay`  | Starts video automatically when the page loads (often blocked by browsers) |
| `muted`     | Mutes audio; required for autoplay to work in most browsers                |
| `loop`      | Repeats the video continuously                                              |
| `poster`    | Image to show before the video plays                                        |
| `preload`   | Hints how much video data to preload: `auto`, `metadata`, `none`           |

### Example: Autoplaying, Muted, Looping Video

```html
<video src="videos/airport.mp4" width="640" height="360" autoplay muted loop></video>
```

> Note: Without `muted`, `autoplay` may not work due to browser restrictions.

---

## 4. Video as Decorative Element

If you want a background-style or decorative video:
- Use `autoplay muted loop`
- **Do not use** `controls`

```html
<video src="videos/airport.mp4" width="640" height="360" autoplay muted loop></video>
```

---

## 5. Optional: Poster Image

To show a placeholder image before the video starts:

```html
<video src="videos/airport.mp4" width="640" height="360" poster="poster.jpg" controls></video>
```

---

## Summary

- Use the `<video>` tag to embed local video files.
- Add `controls`, `autoplay`, `muted`, and `loop` attributes as needed.
- Maintain proper aspect ratios to avoid layout issues.
- Use `poster` to display a fallback image before the video loads.

In the next lesson, you will learn how to embed **YouTube videos** using the `<iframe>` tag.

# HTML Tooltips with the `title` Attribute

In this lesson, you will learn how to create a **tooltip**—a small pop-up text box that appears when a user hovers over an HTML element.

---

## What is a Tooltip?

- A tooltip provides **additional information or a hint** when a user hovers over an element.
- Useful for:
  - Buttons with icons instead of text
  - Explaining functionality of elements
  - Improving accessibility and user experience
  - Enhancing search engine optimization (SEO) with additional keywords

---

## How to Create a Tooltip in HTML

Use the `title` attribute on any HTML element:

```html
<button title="Download the file">⬇️</button>
```

- When the user hovers over the button, the browser shows:  
  `"Download the file"` as a tooltip.

### Example with a Link

```html
<a href="https://example.com" title="Go to example site">Visit</a>
```

### Example with an Image

```html
<img src="icon.png" alt="Settings" title="Open settings panel">
```

---

## Why Use Tooltips?

- **Improves clarity**: Explains icons or non-obvious elements.
- **Boosts accessibility**: Helps users understand the purpose of UI elements.
- **SEO benefits**: Adds more descriptive text to your HTML.
- **Visual cue**: Suggests the element is interactive or clickable.

---

## Best Practices

- Keep tooltip text **short and clear**.
- Use for:
  - Icons
  - Buttons
  - Links
  - Images
- Avoid overusing tooltips where the purpose is already obvious.

---

## Summary

- Use the `title` attribute to add tooltips.
- Tooltips are shown on hover in most browsers.
- They improve usability, accessibility, and SEO.
- Ideal for icons, buttons, and unclear UI elements.

Example:

```html
<button title="Save your changes">💾</button>
```

In the next lesson, you will learn how to embed YouTube videos using the `<iframe>` element.

# Introduction to CSS

## What is CSS?

- **CSS** stands for **Cascading Style Sheets**.
- It is used to **describe the appearance** and **visual presentation** of a web page.
- While HTML provides structure and content, **CSS defines how that content looks**.

---

## Why CSS is Important

- **HTML alone looks plain and unstyled**.
- CSS allows you to transform a basic HTML page into a **modern, beautiful, and user-friendly interface**.
- It provides control over:
  - Colors
  - Layouts
  - Fonts and typography
  - Spacing and sizing
  - Animations
  - Responsive behavior

---

## What You Can Do with CSS

### 1. **Styling**
- Define **color palettes** (e.g., background, text, buttons)
- Customize **fonts**: `font-family`, `font-size`, `font-weight`, etc.
- Modify **borders**, **shadows**, and **gradients**

### 2. **Layout**
- Control the **positioning and spacing** of elements
- Set **width** and **height**
- Use powerful layout systems:
  - **Flexbox** – one-dimensional layout
  - **Grid** – two-dimensional layout

### 3. **Animations & Transitions**
- Add **interactivity** and **motion** with:
  - `@keyframes`
  - `transition` properties
- Animations can enhance user experience and engagement

### 4. **Responsive Design**
- Adapt the layout to **different screen sizes** (desktop, tablet, mobile)
- Use:
  - **Media queries**
  - **Flexible layouts**
  - **Viewport-relative units**

---

## Summary

- CSS controls the **look and feel** of a website.
- It enables you to build **modern, responsive, and animated** web pages.
- You will gradually learn how to:
  - Style elements
  - Organize layouts
  - Make your site work well across all devices

Let’s now begin with the **fundamentals of CSS**.

# CSS Syntax and Selectors

## 1. CSS Rule Structure

A **CSS rule** defines how HTML elements should appear.

Each rule consists of:

- **Selector**: Targets specific HTML elements (e.g., `button`, `h1`, `p`)
- **Declaration block**: A list of CSS declarations enclosed in curly braces `{}`

### Example:

```css
button {
  color: white;
  background-color: blue;
}
```

---

## 2. CSS Declaration

A **CSS declaration** is a line that defines a style.

### It consists of:

- **Property** (e.g., `color`)
- **Value** (e.g., `white`)
- Separated by a colon `:`
- Ends with a semicolon `;`

```css
color: white;
```

You can write multiple declarations inside one declaration block, separated by semicolons.

---

## 3. Common CSS Properties

Some frequently used properties include:

- `color`
- `background-color`
- `padding`
- `font-size`
- `border`
- `border-radius`
- `margin`
- `text-align`
- `width`, `height`

You don't need to memorize all CSS properties. You'll learn them gradually through use.

---

## 4. CSS Selectors

### 4.1 Type Selector
- Selects all HTML elements of a given type
- Example: `h1`, `button`, `p`

```css
h1 {
  font-size: 32px;
}
```

### 4.2 Advanced Selectors (preview only)

Selectors can be combined and made more specific using:

- **Combinators**: `>`, `+`, `~`, whitespace
- **Pseudo-classes**: `:hover`, `:nth-child()`, `:first-child`

#### Complex Example (not required to understand yet):

```css
header > div > h1 + button:hover {
  background-color: yellow;
}
```

This means:
- Select a `button` that comes immediately after an `h1`
- Only if the `h1` is inside a `div` inside a `header`
- Only when the mouse is hovering over the `button`

---

## 5. Summary

- CSS rules are made up of **selectors** and **declarations**
- Each declaration includes a **property** and a **value**
- CSS uses **simple English terms** and is generally intuitive
- Selectors can be:
  - Simple: like `p`, `button`, `h1`
  - Complex: involving hierarchy and conditions
- Most of CSS logic lies in **selectors** and how you apply rules conditionally

---

# How to Add CSS to HTML

Before you can style a web page using CSS, you need to **attach CSS to your HTML file**.  
There are **three methods** to apply CSS:

---

## 1. Inline CSS

- CSS is added **directly inside an HTML element** using the `style` attribute.
- Good for **quick, small changes**, but **not recommended** for larger projects due to readability and maintainability.

### Example:

```html
<h2 style="color: blue; background-color: yellow;">Hello World</h2>
```

- Each declaration is separated by a semicolon `;`.

---

## 2. Internal CSS

- CSS is placed **within the same HTML file**, inside a `<style>` tag located in the `<head>` section.
- Useful for **small projects** or when styling a **single page**.

### Example:

```html
<head>
  <style>
    h2 {
      color: green;
      background-color: black;
    }
  </style>
</head>
```

- Targets **all elements** matching the selector (`h2` in this case).
- Can be **overridden by inline styles** due to higher **specificity**.

---

## 3. External CSS

- CSS is written in a **separate `.css` file**, typically named something like `style.css`.
- This is the **recommended method** for **larger projects**.

### Step-by-step:

1. Create a `style.css` file:
```css
body {
  background-color: yellow;
}
```

2. Link the CSS file in your HTML `<head>`:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

- `rel="stylesheet"` defines the **relationship** to the HTML file.
- `href` points to the **path of the CSS file**.

> If the styles don't appear, check:
> - Whether the CSS file is **correctly referenced**.
> - If the **path or filename** is correct.
> - That the file has the **`.css` extension**.

---

## Summary Table

| Method         | Where to Write CSS        | Use Case                       |
|----------------|---------------------------|--------------------------------|
| Inline CSS     | Inside `style` attribute  | Quick fixes, testing only      |
| Internal CSS   | In `<style>` in `<head>`  | Single-page projects           |
| External CSS   | In `.css` file + `<link>` | Preferred for all real projects |

---

## Notes on Specificity

- Inline CSS **overrides** internal and external CSS.
- Later lessons will cover **specificity** and **cascading behavior** in more detail.

---

Next, we’ll start writing real CSS code using the external stylesheet method.

# Colors in CSS

Understanding and applying colors is essential in CSS and web development in general.  
Colors affect readability, design aesthetics, branding, and user experience.

---

## 1. Basic Color Properties in CSS

| Property           | Description                         |
|--------------------|-------------------------------------|
| `color`            | Sets the **text color**             |
| `background-color` | Sets the **background color**       |

### Example:

```css
body {
  color: white;
  background-color: black;
}
```

---

## 2. Using Named Colors

- CSS supports **140+ predefined color names**.
- Examples:
  - `red`, `blue`, `green`
  - `tomato`, `cornflowerblue`, `darkcyan`

> Named colors are easy to use but **limited in precision**.

You can explore the full list at [MDN Web Docs – Named Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#named_colors).

---

## 3. RGB Color Model

- RGB stands for **Red, Green, Blue**
- Syntax: `rgb(red, green, blue)`
- Each value: `0–255`

### Examples:

```css
/* Bright red */
background-color: rgb(255, 0, 0);

/* Dark red */
background-color: rgb(100, 0, 0);

/* White */
background-color: rgb(255, 255, 255);

/* Black */
background-color: rgb(0, 0, 0);

/* Purple (mix of red and blue) */
background-color: rgb(100, 0, 100);
```

- RGB allows for over **16 million color combinations**.
- Use a **color picker** (e.g. built into VS Code) to find exact values.

---

## 4. HEX Colors

- HEX (hexadecimal) is a **base-16** format for color codes.
- Syntax: `#RRGGBB`
- Each pair represents:
  - `RR` = Red
  - `GG` = Green
  - `BB` = Blue

### Example:

```css
/* Orange color */
background-color: #F57333;
```

- This is equivalent to: `rgb(245, 115, 51)`

| HEX Digit | Decimal Equivalent |
|-----------|---------------------|
| `0–9`     | 0–9                 |
| `A–F`     | 10–15               |

> For example: `#FF0000` = Bright red

---

## 5. Choosing Between RGB and HEX

| Format | Pros                             | Example               |
|--------|----------------------------------|------------------------|
| Named  | Easy to remember, common colors  | `red`, `blue`          |
| RGB    | Intuitive for mixing colors      | `rgb(255, 100, 0)`     |
| HEX    | Widely used in design tools      | `#FF6400`              |

---

## 6. Color Picker Tools in VS Code

- When you hover over a color in CSS, **a color picker appears**.
- You can:
  - Choose a new color visually.
  - Switch between RGB, HEX, and HSL formats.

---

## 7. Other Color Formats (Advanced)

- `rgba()` – Like RGB but with **alpha transparency**
  - Example: `rgba(0, 0, 0, 0.5)`
- `hsl()` – **Hue, Saturation, Lightness**
- `hsla()` – HSL + alpha

These will be covered in a future lesson.

---

## Summary

- Use `color` for text and `background-color` for backgrounds.
- Start with **named colors** or use **RGB/HEX** for more control.
- Use a **color picker** or design system to extract exact values.
- Choose the format based on the project and your preferences.

---

Let me know if you'd like a cheat sheet for RGB vs HEX conversions or a guide on `rgba()` and `hsl()`.

# CSS Selectors: Type, Class, and ID

Selectors are used in CSS to target specific HTML elements and apply styles to them.  
So far, we've worked with **type selectors**, and now we will explore **class** and **ID selectors**.

---

## 1. Type Selector

- Targets all elements of a specific HTML tag.

### Example:

```css
p {
  color: white;
  background-color: black;
}
```

- Affects **all** `<p>` elements.

---

## 2. ID Selector (`#`)

- Targets **one unique element** with a specific `id`.
- **Only one element** should have that ID in the document.

### HTML:

```html
<p>This is paragraph one.</p>
<p id="red-paragraph">This is paragraph two.</p>
```

### CSS:

```css
#red-paragraph {
  color: red;
}
```

- This will override the color from the type selector for the element with ID `red-paragraph`.

> **Important rules for IDs:**
> - No spaces
> - Cannot start with a number
> - No `#` or `.` in the name

---

## 3. Class Selector (`.`)

- Targets all elements that have a specific class.
- Multiple elements can share the same class.
- One element can have **multiple classes**.

### HTML:

```html
<p class="green-element grey-background">This is paragraph four.</p>
```

### CSS:

```css
.green-element {
  color: green;
}

.grey-background {
  background-color: gray;
}
```

> **Tip**: Separate multiple classes with a space in the HTML `class` attribute.

---

## 4. Specificity Hierarchy

CSS selectors follow a **specificity model** that determines which rule takes precedence when multiple rules apply.

| Selector Type   | Symbol | Specificity | Can Override               |
|-----------------|--------|-------------|----------------------------|
| ID Selector     | `#id`  | High        | Class, Type                |
| Class Selector  | `.cls` | Medium      | Type                       |
| Type Selector   | `tag`  | Low         | —                          |

### Example of conflict:

```html
<p id="red-paragraph" class="green-element">This text is red.</p>
```

```css
#red-paragraph {
  color: red;
}

.green-element {
  color: green;
}
```

- Result: The paragraph is **red**, because the **ID selector wins** due to higher specificity.

---

## 5. Summary

| Selector | Syntax      | Targets                                 | Notes                                     |
|----------|-------------|-----------------------------------------|-------------------------------------------|
| Type     | `p`         | All `<p>` elements                      | Basic and broad selection                 |
| Class    | `.classname`| All elements with this class            | Can be reused on many elements            |
| ID       | `#idname`   | One specific element with unique `id`   | Should be used only once per page        |

- **Specificity order**: ID > Class > Type
- Higher specificity overrides lower one.
- Use **IDs** for unique elements, **classes** for reusable styling, and **types** for broad rules.

---

Let me know if you want to explore **attribute selectors**, **pseudo-classes** (`:hover`, `:first-child`), or **combinators** next.

# CSS Bootcamp – Day 2: Fundamental Building Blocks of CSS

Welcome to **Day 2** of your 7-day CSS Bootcamp.  
Today’s focus is on essential and foundational CSS concepts that are used in virtually every web project.

---

## What You Will Learn Today

### 1. **Element Sizing**
- How to control the **size** of HTML elements using:
  - `width`
  - `height`

### 2. **Spacing**
- How to create space **around and inside** elements using:
  - `margin` (outside spacing)
  - `padding` (inside spacing)

### 3. **Borders and Design Enhancements**
- Adding and customizing borders with:
  - `border`
  - `border-width`, `border-style`, `border-color`
- Creating **rounded corners** with:
  - `border-radius`

---

## The CSS Box Model

One of the **most important concepts** in CSS.  
Every HTML element is considered a box and follows this structure:

```
+----------------------------+
|        Margin              |
|  +----------------------+  |
|  |      Border           | |
|  |  +------------------+ | |
|  |  |   Padding         | | |
|  |  |  +-------------+  | | |
|  |  |  |   Content   |  | | |
|  |  |  +-------------+  | | |
|  |  +------------------+ | |
|  +----------------------+  |
+----------------------------+
```

- **Content**: The actual text or image.
- **Padding**: Space between content and border.
- **Border**: Surrounds the padding.
- **Margin**: Space between the element and others.

Understanding this model is **crucial** for layout and design control.

---

## Units in CSS

### Absolute Units
- `px` (pixels)
- `pt` (points)

### Relative Units
- `%` (percentage, relative to parent)
- `em` (relative to parent’s font size)
- `rem` (relative to root element’s font size)

Use **relative units** for better **responsiveness and scalability**.

---

## Typography in CSS

How to style textual content:

- `font-family`: Set the font.
- `font-size`: Set size of the text.
- `font-weight`: Boldness of the text.
- `text-align`: Align text left, right, center, justify.
- `text-decoration`: Underline, overline, line-through, none.

---

## Layout and Centering Techniques

You will learn modern methods for **centering elements**:

- **Horizontally and vertically**
- Using **Flexbox** and **Grid**
- These techniques are **modern** and simplify previously difficult layout tasks.

---

## Learning Tips

- Exercises and small challenges will be provided.
- When prompted to pause and think, **do it** – this helps build **real understanding**.
- Practice is key to mastering CSS.

---

## Conclusion

Today’s lesson is about mastering the **core building blocks** of CSS.  
These concepts will be **foundational** to everything else you learn going forward in your web development journey.

> Ready? Let’s start Day 2 and dive into the fundamentals of CSS.


# CSS Lesson: Width, Height, and Units

## Overview

This lesson covers how to **control the size of HTML elements** using `width` and `height` properties in CSS.  
You’ll also learn the difference between **absolute** (`px`) and **relative** (`%`) units and how they interact with the **parent elements**.

---

## Default Behavior of `div` Elements

- A `div` element automatically stretches:
  - **Width**: to fill the available horizontal space.
  - **Height**: adapts based on its **content**.
- If no content is present, the height may collapse to `0`.

---

## Setting Width and Height with `px` (Pixels)

```css
div {
  width: 400px;
  height: 400px;
  background-color: blue;
}
```

- Creates a **square box**: 400px by 400px.
- `px` is an **absolute unit**: always the same size on screen regardless of viewport or parent size.

---

## Setting Size with `%` (Percentage)

```css
div {
  width: 50%;   /* 50% of the parent element's width */
  height: 50%;  /* 50% of the parent element's height */
}
```

- `%` is a **relative unit**.
- Percentage is relative to the **parent element’s dimensions**.
- Works **only if the parent** has a **defined size** (e.g., if parent has no height, `height: 50%` won't work).

### Example: Set `body` height explicitly

```css
body {
  height: 500px;
}

div {
  height: 50%; /* Now this is 250px */
}
```

---

## Exercise Example: Nested Divs with Different Units

You are asked to create two nested `div` elements:

- Outer `div`: Green, responsive width (`%`), fixed height (`px`)
- Inner `div`: Blue, fixed width (`px`), responsive height (`%`)

### HTML
```html
<div class="parent-div">
  <div class="child-div"></div>
</div>
```

### CSS
```css
.parent-div {
  background-color: green;
  width: 50%;       /* relative to body */
  height: 200px;    /* fixed height */
}

.child-div {
  background-color: blue;
  width: 150px;     /* fixed width */
  height: 50%;      /* relative to parent-div */
}
```

---

## Key Takeaways

- `width` and `height` allow you to control the size of HTML elements.
- `px` (pixels) is absolute – always stays the same.
- `%` (percent) is relative – depends on the parent element.
- If the parent has no defined height, `%` height will not work as expected.
- Mixing `%` and `px` is common in responsive design.

---

Let me know if you'd like a visual **diagram of the box layout**, or a deeper dive into **viewport units** (`vw`, `vh`) or **other relative units** (`em`, `rem`).

# CSS Lesson: Borders

## Overview

In this lesson, we explored how to use the **`border`** property in CSS, which is actually composed of **three separate sub-properties**:

- `border-width`
- `border-style`
- `border-color`

All three must be defined for the border to be visible.

---

## Basic Example

```css
div {
  width: 400px;
  height: 400px;
  background-color: blue;

  border-width: 10px;
  border-style: solid;
  border-color: tomato;
}
```

- **`border-width`**: sets the thickness (e.g., `10px`)
- **`border-style`**: defines how the border looks (`solid`, `dashed`, etc.)
- **`border-color`**: sets the border color (e.g., `tomato`)

> ❗️If you don’t define a `border-style`, the border won’t appear even if `width` and `color` are set.

---

## Common `border-style` Values

| Style   | Description                                    |
|---------|------------------------------------------------|
| `solid` | A single solid line                            |
| `dashed`| A line made of dashes                          |
| `dotted`| A line of small dots                           |
| `double`| Two solid lines with a gap between             |
| `groove`| A 3D grooved border                            |
| `ridge` | A 3D ridged border                             |
| `inset` | Makes the element look embedded                |
| `outset`| Makes the element look raised                  |
| `none`  | No border                                      |
| `hidden`| Invisible border (but still takes space)       |

---

## Example: Different Borders on Each Side

**Objective**: A square `div` with four different borders:
- Top: `dotted`
- Right: `solid`, colored `cornflowerblue`
- Bottom: `double`
- Left: `dashed`

### HTML
```html
<div class="border-exercise"></div>
```

### CSS
```css
.border-exercise {
  width: 400px;
  height: 400px;
  background-color: chocolate;

  border-width: 10px;

  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: double;
  border-left-style: dashed;

  border-right-color: cornflowerblue;
}
```

---

## Using MDN Web Docs

To look up available border properties and values:
1. Google: `CSS border site:developer.mozilla.org`
2. Visit the [MDN Border Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
3. Review examples and all available styles and syntax

---

## Key Takeaways

- A visible border requires `border-width`, `border-style`, and optionally `border-color`.
- `border-style` is essential; without it, the border is not shown.
- You can **customize each side** of the border using:
  - `border-top-style`, `border-left-style`, etc.
  - `border-right-color`, `border-bottom-width`, etc.
- MDN Web Docs is the best source to check valid values and syntax.

Would you like a visual diagram of how borders work in relation to the box model?

# CSS Lesson: Border Shorthand Property

## Problem
Writing borders in CSS using three separate properties:

```css
border-width: 5px;
border-style: solid;
border-color: black;
```

While correct, this is repetitive and verbose.

---

## Solution: `border` Shorthand

CSS provides a **shorthand syntax** that combines all three properties (`width`, `style`, and `color`) into **one line**.

### Example

```css
border: 5px solid black;
```

This is equivalent to:

```css
border-width: 5px;
border-style: solid;
border-color: black;
```

---

## Syntax Order

The correct order in the shorthand is:

```
border: <border-width> <border-style> <border-color>;
```

- **`border-width`**: e.g. `1px`, `0.2em`, `thin`
- **`border-style`**: must be a valid style like `solid`, `dashed`, `none`, etc.
- **`border-color`**: any valid CSS color (`black`, `#333`, `rgb(...)`, etc.)

All three values must be included for the border to appear as expected.

---

## Benefits

- Cleaner code
- Easier to read and maintain
- Avoids redundancy

---

## Example Usage

```css
.box {
  border: 3px dashed red;
}
```

This creates:
- A `3px` wide
- `dashed` border
- Colored `red`

---

## When to Use

Use the shorthand **whenever all three border properties are being set together**.

If you're modifying only one (e.g., changing just `border-color`), then use the individual property.

---

## Tip

You can also use **side-specific shorthand** like:

```css
border-top: 2px dotted blue;
border-right: 4px solid green;
```

These apply the shorthand to only one side.

---

Would you like a visual table or diagram to explain the shorthand even more clearly?

# CSS Lesson: `margin` Property

## Definition
- The `margin` defines **space *outside* the border** of an element.
- It separates the element from neighboring elements and creates spacing around it.

---

## Example Setup

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```css
.box {
  background-color: lightgreen;
  height: 50px;
}
```

Without margin, the boxes appear visually merged.

---

## Applying Margin

### Uniform Margin (All Sides)

```css
.box {
  margin: 20px;
}
```

- Adds `20px` space on **all four sides** (top, right, bottom, left).

---

## Margin per Side

```css
.box {
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
}
```

### Visual Aid in DevTools
- In browser developer tools (e.g., Chrome DevTools), `margin` is shown as an **orange highlight** when inspecting an element.

---

## Shorthand Syntax

### 4 Values (Clockwise Order)

```css
margin: 20px 30px 50px 30px;
```

- Top: `20px`
- Right: `30px`
- Bottom: `50px`
- Left: `30px`

### 2 Values

```css
margin: 30px 10px;
```

- Top and Bottom: `30px`
- Left and Right: `10px`

### 3 Values

```css
margin: 10px 20px 5px;
```

- Top: `10px`
- Right and Left: `20px`
- Bottom: `5px`

❗ This version is **less readable** and generally **not recommended** unless you're confident about its usage.

---

## Default Margins in CSS

- Many elements (e.g., `<body>`) come with **browser-defined default margins**.

### Example: `<body>`

- Default margin is typically `8px`, even if not explicitly defined.

```css
body {
  margin: 0;
}
```

- When setting margin to `0`, units are **not required** (i.e., `margin: 0` is valid and preferred over `margin: 0px`).

---

## Summary

| Use Case              | Property           | Example                      |
|-----------------------|--------------------|------------------------------|
| All sides same        | `margin`           | `margin: 20px;`              |
| Specific sides        | `margin-top` etc.  | `margin-top: 10px;`          |
| Shorthand (4 sides)   | `margin`           | `margin: 10px 20px 30px 40px;` |
| Shorthand (2 sides)   | `margin`           | `margin: 10px 20px;`         |
| Remove margin         | `margin`           | `margin: 0;`                 |

---

Would you like the same breakdown for `padding`, or should we move to the box model next?

# CSS Lesson: `padding` and the Box Model

## What is Padding?

- **Padding** is the space **inside** an element, between its **content and border**.
- It "pushes" the content inward from the edges of the element.

---

## Example Setup

```html
<div class="container">Some text here</div>
```

```css
.container {
  height: 50px;
  width: 300px;
  margin: 20px;
  background-color: lightblue;
}
```

- Without padding, the text is flush with the top-left corner of the container.

---

## Applying Padding

### Uniform Padding (All Sides)

```css
padding: 20px;
```

- Adds 20px of space on all four sides: top, right, bottom, and left.
- This increases the **visual size** of the element.

### Padding on Specific Sides

```css
padding-top: 100px;
padding-left: 120px;
padding-right: 90px;
padding-bottom: 50px;
```

- Each direction can be controlled individually.
- The content will shift accordingly.

---

## Why Does the Element Get Bigger?

- Even with `height: 50px` and `width: 300px`, the element appears **larger**.
- This is because **padding adds to the dimensions** of the element.

---

## The CSS Box Model

Every HTML element is a rectangular box, made up of:

1. **Content** – The inner content (e.g., text or image).
2. **Padding** – Space between content and border.
3. **Border** – A visible outline around the padding.
4. **Margin** – Space **outside** the border that separates elements.

### Box Model Structure:

```
[ Margin ]
  [ Border ]
    [ Padding ]
      [ Content ]
```

---

## Calculation Example

### Given:

```css
.container {
  width: 300px;
  height: 50px;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 120px;
  padding-right: 90px;
  border: 10px solid black;
}
```

### Total Size:

- **Width** = 300 (content) + 120 (left padding) + 90 (right padding) + 10 + 10 (borders) = **530px**
- **Height** = 50 (content) + 100 (top padding) + 50 (bottom padding) + 10 + 10 (borders) = **220px**

---

## Default Box Model Behavior

- By default, `width` and `height` apply **only to the content**.
- Padding and borders are **added on top** of the declared dimensions.

---

## Visualizing with DevTools

- Open browser developer tools and inspect the element.
- The **box model panel** shows:
  - Blue = content
  - Purple = padding
  - Yellow = border
  - Orange = margin

---

## Optional: Changing Box Model Behavior

To include padding and border *inside* the specified `width` and `height`:

```css
* {
  box-sizing: border-box;
}
```

- Now, padding and border are **included in** the width/height (i.e., max size won't grow unexpectedly).

---

## Summary

| Property   | Affects                | Inside/Outside | Default Added to Size |
|------------|------------------------|----------------|------------------------|
| `content`  | Text or images         | N/A            | No                     |
| `padding`  | Space to border        | Inside         | Yes                    |
| `border`   | Element boundary       | Inside         | Yes                    |
| `margin`   | Space to other elements| Outside        | No (but affects layout)|

---

Let me know if you'd like a visual diagram of the box model or if you're ready to move on to `border-radius`, `text-align`, or typography.

# CSS Lesson: `box-sizing` Property

## What Does `box-sizing` Do?

The `box-sizing` property defines **how the total width and height of an element are calculated**.

---

## Default Behavior: `content-box`

- This is the **default value** in CSS.
- **Only the content** is included in the `width` and `height`.
- **Padding and border are added on top** of the declared dimensions.

### Formula (content-box):

```text
Total Width  = width + padding-left + padding-right + border-left + border-right
Total Height = height + padding-top + padding-bottom + border-top + border-bottom
```

### Result:

- The element becomes **larger than expected** when padding or border is added.

---

## Preferred Behavior: `border-box`

- The `padding` and `border` are **included inside** the declared width and height.
- This makes the layout **more predictable**.

### Formula (border-box):

```text
Total Width  = width (already includes padding + border)
Total Height = height (already includes padding + border)
```

- **Content area shrinks** to make space for padding and border within the specified size.

---

## Example

### HTML:

```html
<div class="content-box">Content Box</div>
<div class="border-box">Border Box</div>
```

### CSS:

```css
.content-box {
  box-sizing: content-box; /* default */
  width: 200px;
  height: 50px;
  padding: 20px;
  border: 10px solid black;
  background-color: lightblue;
}

.border-box {
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  padding: 20px;
  border: 10px solid black;
  background-color: lightblue;
}
```

### Result:

- `.content-box` becomes **larger** than 200×50px due to added padding and border.
- `.border-box` stays **exactly** 200×50px in total size.

---

## Why Use `border-box`?

✅ Keeps your layout dimensions **consistent**.  
✅ Avoids unexpected overflows.  
✅ Easier to build **responsive designs**.  
✅ Reduces the need for manual size adjustments.

---

## Best Practice

Apply `box-sizing: border-box;` globally to all elements:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

- This makes all elements behave consistently.
- Padding and borders **do not increase** the declared size.

---

## Summary

| Value         | Width/Height Includes | Size Behavior            |
|---------------|------------------------|---------------------------|
| `content-box` | Content only           | Grows with padding/border |
| `border-box`  | Content + padding + border | Stays fixed               |

---

Let me know when you're ready for the next topic, such as `border-radius`, `typography`, or layout systems like Flexbox.

# CSS Lesson: Universal Selector (`*`)

## What Is the Universal Selector?

The **universal selector** is represented by the asterisk (`*`) symbol in CSS.  
It matches **every single element** in the HTML document.

```css
* {
  /* Styles applied to all elements */
}
```

---

## Why Use the Universal Selector?

Many HTML elements (such as `body`, `h1`, `ul`, `ol`, `p`, etc.) come with **default margins and paddings** defined by the browser.

### Example:

- `body` typically has a default `margin: 8px`.
- `ul` and `ol` come with default `padding-left: 40px`.
- `h1`, `p`, and other elements also have built-in spacing.

These defaults can cause unexpected layout behavior if not reset.

---

## Common Use Case: CSS Reset

To remove all default margin and padding, apply the following:

```css
* {
  margin: 0;
  padding: 0;
}
```

This clears spacing on **all elements**, allowing you to define your own layout from a **clean baseline**.

---

## When to Use

✅ At the **beginning of a CSS file or project**, to reset spacing.  
✅ Before applying your own margin and padding values for layout control.

---

## Best Practice (Extended Reset)

You may also combine `box-sizing` for consistent sizing:

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- This ensures all elements have no default spacing.
- `box-sizing: border-box` makes layout dimensions easier to manage (see previous lesson).

---

## Summary

| Selector | Description                      | Use Case                              |
|----------|----------------------------------|----------------------------------------|
| `*`      | Selects all elements             | CSS resets, global rules               |
| `*::before`, `*::after` | Pseudo-elements      | Needed when using `box-sizing` resets |

---

Let me know if you'd like to continue with `border-radius`, typography, or layout techniques like Flexbox next.

# HTML Lesson: Block vs. Inline Elements

Understanding the **display behavior** of HTML elements is crucial for layout and styling in CSS.  
All HTML elements fall into one of two categories:

---

## 1. Block-Level Elements

### Key Characteristics:
- Always start on a **new line**.
- Occupy **100% of the parent’s width** by default.
- Can have **width**, **height**, **margin**, and **padding** set.
- Used to structure content into sections.

### Examples:
- `<div>`
- `<p>`
- `<h1>`, `<h2>`, ..., `<h6>`
- `<ul>`, `<ol>`, `<li>`
- `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`

### Visual Example:

```html
<h2>Heading 1</h2>
<h2>Heading 2</h2>
<!-- Each heading starts on a new line -->
```

With a background color:

```css
h2 {
  background-color: lightblue;
}
```

---

## 2. Inline-Level Elements

### Key Characteristics:
- Do **not** start on a new line.
- Only occupy **as much width as necessary**.
- Cannot have `width` or `height` directly set (unless changed via `display`).
- Used to style text or embed small items within text.

### Examples:
- `<a>`
- `<span>`
- `<strong>`, `<em>`
- `<img>`
- `<button>` (by default, but technically it behaves like `inline-block`)

### Visual Example:

```html
<a href="#">Link 1</a>
<a href="#">Link 2</a>
<!-- Links appear side by side -->
```

With a background color:

```css
a {
  background-color: yellow;
}
```

---

## Summary Table

| Property            | Block Elements        | Inline Elements       |
|---------------------|-----------------------|------------------------|
| Starts on new line  | ✅ Yes                | ❌ No                 |
| Takes full width    | ✅ Yes                | ❌ No                 |
| Width/Height support| ✅ Yes                | ❌ No (limited)       |
| Example Tags        | `<div>`, `<p>`, `<h1>`| `<a>`, `<span>`, `<img>`|

---

## Bonus: `display` Property

You can **change** the default behavior using the `display` property:

```css
span {
  display: block;   /* Makes inline element behave like a block */
}

div {
  display: inline;  /* Makes block element behave like inline */
}
```

There’s also `inline-block`, which allows inline behavior but supports width/height.

---

Let me know if you'd like to dive into how `inline-block` works or how to convert elements using `display` in layout design.

# CSS Lesson: The `display` Property – Block, Inline, and Inline-Block

The `display` property in CSS controls how an element is rendered in the layout flow.  
It determines whether the element behaves as a **block-level**, **inline-level**, or **inline-block** element.

---

## 1. Default Behavior of Elements

| Element Type | Starts on New Line | Takes Full Width | Respects Width/Height | Respects Margin |
|--------------|--------------------|------------------|------------------------|------------------|
| Block        | ✅ Yes             | ✅ Yes           | ✅ Yes                 | ✅ Yes           |
| Inline       | ❌ No              | ❌ No            | ❌ No (ignored)        | ❌ Top/Bottom     |
| Inline-Block | ❌ No              | ❌ No            | ✅ Yes                 | ✅ Yes           |

---

## 2. `display: block`

- Forces the element to start on a new line.
- Takes up the full width of the parent by default.
- Allows all margin, padding, height, and width styles.
  
### Use Case:
Transform inline elements (e.g., `<span>`) to block for layout purposes:

```css
span {
  display: block;
  margin-top: 20px;
  width: 200px;
}
```

---

## 3. `display: inline`

- Does **not** start on a new line.
- Occupies only as much horizontal space as needed.
- **Ignores** `height`, `width`, and **vertical margins**.

### Common Issues with Inline Elements:
```css
span {
  margin-top: 100px; /* No effect */
  width: 100px;       /* Ignored */
}
```

To apply these properties, convert the element to `inline-block` or `block`.

---

## 4. `display: inline-block`

- Behaves like an inline element (stays on same line).
- **Respects** `height`, `width`, and all margin/padding properties.
- Does **not** take full width by default.

### Example:
```css
button {
  display: inline-block;
  width: 150px;
  height: 50px;
  margin: 10px;
}
```

This is especially useful for:
- **Buttons**
- **Navigation links**
- **Labels**
- **Custom inline containers**

---

## 5. Why Inline Elements Ignore Vertical Margins

- Inline elements participate in text flow.
- The vertical space is governed by the **line height** of the surrounding text.
- `margin-top` and `margin-bottom` do **not affect vertical spacing**.

---

## 6. Summary of `display` Values

| `display` Value  | Description |
|------------------|-------------|
| `block`          | Full-width element, always on a new line |
| `inline`         | Flows inline with text, no support for width/height/vertical margins |
| `inline-block`   | Like `inline`, but allows styling like `block` |
| `none`           | Hides the element from the document flow |
| `flex`, `grid`, etc. | Advanced layout mechanisms (covered later) |

---

## Recommendation

When building layouts:
- Use `block` for containers and structural elements.
- Use `inline` for basic inline content (like `<span>`, `<a>`, etc.).
- Use `inline-block` when you need inline placement **with full styling support**.

```css
.custom-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #333;
  color: white;
}
```

Let me know if you'd like a visual diagram of this concept or a live HTML/CSS playground example.

# CSS Lesson: `border-radius` – Creating Rounded Corners

The `border-radius` property in CSS allows you to create **rounded corners** for any HTML element. It enhances visual design by making edges appear smooth and modern.

---

## 1. Basic Usage

```css
box {
  border-radius: 20px;
}
```

- Applies a **20-pixel radius** to all four corners of the element.
- The higher the value, the **more rounded** the corners.
- Example values:
  - `5px` → subtle rounding
  - `50px` → strong rounding

---

## 2. Creating a Circle

To create a **perfect circle**, two conditions must be met:

```css
.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
```

- You can also use:

```css
border-radius: 100px; /* When width = height = 200px */
```

- **Note**: The circle will only appear correctly if the `width` and `height` are **equal**.
- Any `border-radius` value above 50% has no further visual impact.

---

## 3. Targeting Individual Corners

You can apply different radius values to each corner individually:

```css
box {
  border-top-left-radius: 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 5px;
}
```

---

## 4. Shorthand Syntax

Use the shorthand `border-radius` with up to four values, applied **clockwise**:

```css
box {
  border-radius: 30px 20px 10px 5px;
}
/* top-left | top-right | bottom-right | bottom-left */
```

You can mix **length units** and **percentages**:

```css
box {
  border-radius: 90px 60px 30px 5%;
}
```

---

## 5. Practical Notes

- Works on all HTML elements with a visible box (`div`, `img`, `button`, etc.).
- Can be used with other properties such as `border`, `box-shadow`, and `background`.
- Rounded corners are **visually clipped** — overflowed content may need `overflow: hidden`.

---

## 6. Summary

| Use Case                  | Code Example                                |
|---------------------------|---------------------------------------------|
| Same radius for all sides | `border-radius: 20px;`                      |
| Custom corners            | `border-radius: 30px 20px 10px 5px;`        |
| Make a circle             | `border-radius: 50%;`                       |
| Individual corners        | `border-bottom-left-radius: 10px;`         |

---

## Final Tip

Rounded corners are a simple but effective design technique for creating **polished**, **user-friendly**, and **modern interfaces**.

Let me know if you want a live code demo or CodePen preview of different use cases.

# CSS Text Properties

This lesson introduces essential CSS properties used to style and manipulate text. These include `color`, `text-align`, `text-decoration`, and `text-transform`.

---

## 1. `color`

Used to set the **text color**.

```css
p {
  color: red;
}
```

You can use color names, hex codes (`#ff0000`), RGB values (`rgb(255, 0, 0)`), or HSL.

---

## 2. `text-align`

Specifies the **horizontal alignment** of text within an element.

| Value     | Description                           |
|-----------|---------------------------------------|
| `left`    | Aligns text to the left (default)     |
| `center`  | Centers the text                      |
| `right`   | Aligns text to the right              |
| `justify` | Stretches text to equal line widths   |

```css
h4.center {
  text-align: center;
}
```

**Note**: The alignment is relative to the width of the element.

---

## 3. `text-decoration`

Adds or removes **decoration lines** from text (e.g. underline, overline).

### Basic Values

```css
h4 {
  text-decoration: underline;
}
```

| Value         | Description                          |
|---------------|--------------------------------------|
| `none`        | Removes decoration (e.g. from links) |
| `underline`   | Line below text                      |
| `overline`    | Line above text                      |
| `line-through`| Line through the text                |

### Shorthand Syntax

```css
a {
  text-decoration: underline wavy red 2px;
}
```

The order does not matter. You can combine:

- **Line**: `underline`, `overline`, `line-through`
- **Style**: `solid`, `dotted`, `dashed`, `double`, `wavy`
- **Color**: Named, hex, RGB
- **Thickness**: e.g. `2px`, `0.15em`

### Example:

```css
a {
  text-decoration: underline dotted #3366cc 3px;
}
```

This is especially useful for links or highlighted text.

---

## 4. `text-transform`

Controls the **capitalization** of text content.

```css
p.uppercase {
  text-transform: uppercase;
}
```

| Value        | Description                                      |
|--------------|--------------------------------------------------|
| `uppercase`  | Converts all letters to uppercase                |
| `lowercase`  | Converts all letters to lowercase                |
| `capitalize` | Capitalizes the first letter of each word        |
| `none`       | Removes transformation (resets to default case)  |

**Use Case**: When the text content comes from a **database or API** and you want to ensure consistent formatting without modifying the source.

---

## Summary Table

| Property         | Purpose                                           |
|------------------|---------------------------------------------------|
| `color`          | Sets the text color                               |
| `text-align`     | Aligns text horizontally (`left`, `center`, etc.) |
| `text-decoration`| Adds/removes lines on text                        |
| `text-transform` | Controls letter casing (uppercase, lowercase, etc.) |

---

## Additional Notes

- Always test your styles in the browser to observe behavior.
- These text properties can be combined for powerful formatting.
- When using reset or normalize styles, it's common to set:
  
```css
a {
  text-decoration: none;
}
```

- Refer to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) for more advanced text properties.

# CSS Fonts and Font Units

In this lesson, we learned about how to control font appearance using CSS. There are four primary font-related properties and several units you can use for font sizing.

---

## 1. Key Font Properties

| Property      | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `font-size`   | Sets the size of the text.                                                  |
| `font-family` | Defines the typeface used for the text.                                     |
| `font-style`  | Controls italic or oblique appearance.                                      |
| `font-weight` | Sets the thickness or boldness of the text.                                 |

---

## 2. `font-size` – Units Overview

There are two categories of units used with `font-size`:

### Absolute Units

| Unit   | Description                              | Example |
|--------|------------------------------------------|---------|
| `px`   | Pixels – small fixed-size screen units   | `16px`  |
| `pt`   | Points – mostly used in print or Word    | `12pt`  |

- 1 **px** ≈ 0.26 mm (1/96 inch)
- 1 **pt** ≈ 0.35 mm (1/72 inch)
- **12pt ≈ 16px** (default browser font size)

Both are **absolute units** – they don’t scale with screen or root settings.

### Relative Units

| Unit   | Description                                                            |
|--------|------------------------------------------------------------------------|
| `em`   | Relative to the font-size of the **parent** element                    |
| `rem`  | Relative to the font-size of the **root** element (`html` tag)         |

---

## 3. `em` vs `rem`

### `em`

- `1em = 100%` of the parent's font-size
- Example:  
  If parent font-size is `10pt`, then:
  
  ```css
  p {
    font-size: 2em; /* 20pt */
  }
  ```

### `rem`

- `1rem = 100%` of the **root element's** font-size
- Best used for consistent font scaling across the entire site
- Changes globally when the root size is updated

```css
html {
  font-size: 16pt; /* Base for all rem units */
}

h1 {
  font-size: 3rem; /* 48pt */
}

p {
  font-size: 1rem; /* 16pt */
}
```

---

## 4. Why Use `rem`?

- Centralized control of all font sizes
- Easier scaling for responsive design
- No need to manually adjust each element
- One change in the root (`html`) updates all rem-based sizes

### Responsive Design Example

```css
@media (max-width: 600px) {
  html {
    font-size: 12pt;
  }
}
```

This automatically shrinks all text proportionally on smaller devices.

---

## Summary

| Property       | Purpose                                  |
|----------------|------------------------------------------|
| `font-size`    | Controls size of text                    |
| `font-family`  | Specifies typeface                       |
| `font-style`   | Italic or oblique formatting             |
| `font-weight`  | Defines how bold the text should appear  |

| Unit   | Relative To          | Good For                                |
|--------|----------------------|------------------------------------------|
| `px`   | Fixed screen pixels  | Simple, fixed-size designs               |
| `pt`   | Printed materials     | Consistency with Word or print           |
| `em`   | Parent element        | Component-based scaling                  |
| `rem`  | Root HTML element     | Global consistency and responsive design |

---

## Best Practice

✅ Use `rem` for **scalable and consistent font sizes**  
❌ Avoid using only `px` or `pt` if your layout needs to be responsive

---

## Bonus Tip

You can combine all font properties using the shorthand:

```css
p {
  font: italic 600 1.2rem 'Roboto', sans-serif;
}
```

Format: `font: [style] [weight] [size] [family];`

# Centering Elements in CSS

One of the most common questions from beginners:  
**"How do I center a `div`?"**

This lesson explains how to center elements both **horizontally** and **vertically**, using various CSS techniques.

---

## 1. Horizontally Centering a Block Element

To center a block-level element (like a `div`) **horizontally** within its parent container:

### CSS Rule:
```css
margin: 0 auto;
```

- `0` sets the top and bottom margins
- `auto` sets equal left and right margins

### Example:
```css
div {
  width: 50%;
  height: 300px;
  background-color: blue;
  margin: 0 auto;
}
```

- The browser calculates the remaining space and distributes it equally on both sides.

---

## 2. Centering Nested Elements Horizontally

You can apply the same technique to any block element nested inside a container:

### Example:
```css
p {
  width: 50%;
  height: 150px;
  margin: 0 auto;
}
```

This will center the `<p>` horizontally inside its parent `<div>`.

---

## 3. Centering Text Horizontally

Use `text-align: center` to center inline text within a block element:

```css
p {
  text-align: center;
}
```

This affects **inline** or **inline-block** content inside the paragraph.

---

## 4. Vertically Centering Using `align-content`

CSS now allows easy vertical centering using the `align-content` property.

### Steps:

1. Apply `align-content: center;` on the **parent** element (e.g., the `div`)
2. Ensure that the parent element has **display set to `flex`** or another layout that supports alignment.

### Example:
```css
div {
  display: flex;
  align-content: center;
  justify-content: center; /* optional for horizontal centering */
  flex-direction: column;  /* if needed for layout */
}
```

> `align-content` is typically used with flex or grid containers.

---

## 5. Fully Centering a Container (Horizontal + Vertical)

### Goal:
Center a `div` on the entire screen, and center the text inside it.

### Steps:

#### HTML Structure:
```html
<body>
  <div>
    <p>Hello, world!</p>
  </div>
</body>
```

#### CSS:
```css
html, body {
  height: 100%;          /* Make the full page height available */
  margin: 0;             /* Remove default body margin */
}

body {
  display: flex;
  justify-content: center;    /* Horizontal center */
  align-items: center;        /* Vertical center */
}

div {
  width: 50%;
  height: 300px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  text-align: center;
}
```

### Explanation:
- `html, body { height: 100%; }`: ensures body stretches full screen
- `margin: 0`: removes unwanted scrollbars caused by default body margins
- Flexbox on the `body` ensures the `div` is centered in the viewport
- Flexbox on the `div` centers the `p` inside both vertically and horizontally

---

## Summary

| Technique                     | Use Case                              |
|------------------------------|----------------------------------------|
| `margin: 0 auto`             | Center block elements horizontally     |
| `text-align: center`         | Center inline/inline-block text        |
| `align-items: center`        | Vertically center items with Flexbox   |
| `justify-content: center`    | Horizontally center items with Flexbox |
| `align-content: center`      | Center multiple rows in flex/grid      |
| `html, body { height: 100% }`| Enable full-page vertical centering    |
| `body { margin: 0 }`         | Remove default spacing                 |

---

> More advanced techniques for centering will be covered in lessons on **Flexbox** and **CSS Grid**.

# CSS Bootcamp – Day 3 Overview

Welcome to **Day 3** of your **7-Day CSS Bootcamp**.

Now that you've covered the fundamentals, it's time to dive into more **intermediate and advanced CSS topics** to create dynamic and visually engaging websites.

---

## 🔹 What You'll Learn Today

### 1. Background Enhancements
- **Background Images**
- **Transparent Colors**
  - `rgba()` for semi-transparency
  - `opacity` property

### 2. Gradients
- **Linear Gradients**
- **Radial Gradients**
- **Combining Images and Gradients**
  - Practical coding exercise: **"Black Hole" effect**

### 3. Shadows
- **Box Shadows** for depth and elevation
- Enhance visual appeal with subtle effects

### 4. Advanced Selectors
- **Combinators**
- **Attribute Selectors**
- **Pseudo-classes**
  - Examples: `:hover`, `:checked`, `:nth-child`, etc.
  - Used to style elements based on interaction or position

### 5. Transitions and Interactivity
- Smooth transitions on hover and state changes
- Create dynamic user interfaces

### 6. Positioning Elements
- Master the `position` property:
  - `static`, `relative`, `absolute`, `fixed`, `sticky`
- **Exercise**: Build a custom **Accept Cookies** popup window

### 7. Pseudo-elements
- `::before` and `::after`
- Use for **decorative elements** or styling tricks
  - Example: Gradient borders using pseudo-elements

---

## ✅ Why This Matters

By the end of Day 3, you'll be able to:
- Enhance UI with shadows, gradients, and interactivity
- Precisely control layout and positioning
- Apply cleaner and more modular styles using selectors and pseudo-elements
- Build components that feel modern and professional

---

Let’s get started with **background images and transparency**.

# CSS – Background Images

Using background images allows you to visually enhance your website and improve its aesthetic appeal. CSS provides several key properties to control background image behavior.

---

## 1. Setting a Background Image

To apply a background image to an element (e.g. `<body>`):

```css
body {
  background-image: url("brandenburger_tor.jpeg");
}
```

- The `url()` function takes a **relative** or **absolute** path to the image.
- Place the image in the same directory as your HTML file for easy access.

---

## 2. Prevent Image Repetition

By default, background images **repeat** both horizontally and vertically.

To display the image only **once**:

```css
body {
  background-repeat: no-repeat;
}
```

---

## 3. Control Image Scaling

Use the `background-size` property to control how the image fits into the container.

```css
/* Scales the image to fully fit inside the container (may leave gaps) */
background-size: contain;

/* Scales the image to cover the container completely (may crop) */
background-size: cover;
```

- `contain`: Shows the **entire image**, but may leave **empty space**.
- `cover`: Fills the **entire container**, cropping if needed to maintain aspect ratio.

---

## 4. Fix the Image Position on Scroll

By default, the background image **scrolls with the content**.

To make it **stay in place**:

```css
background-attachment: fixed;
```

Alternatively:

```css
background-attachment: scroll;
```

- `fixed`: The image stays **fixed on screen** even while scrolling.
- `scroll`: The image **moves** as the page scrolls.

---

## 5. Example: Full-Screen Background

```css
html, body {
  height: 100%;
  margin: 0;
}

body {
  background-image: url("brandenburger_tor.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
```

---

## Summary

| Property                | Description                                                   |
|------------------------|---------------------------------------------------------------|
| `background-image`     | Specifies the image to use as background                      |
| `background-repeat`    | Prevents image from repeating (`no-repeat`)                   |
| `background-size`      | Scales the image (`cover` or `contain`)                       |
| `background-attachment`| Controls scroll behavior (`fixed` or `scroll`)                |

---

Let me know if you'd like to extend this with:
- Gradients + background images
- Custom positioning with `background-position`
- Layering multiple backgrounds

# CSS – Alpha Colors and Opacity

In this lesson, we explore how to make elements **transparent** using two main methods:

- **RGBA colors**
- **Opacity property**

These techniques are useful when you want elements to partially reveal what is behind them, such as background images or other content.

---

## 1. RGBA Colors

**RGBA** stands for **Red, Green, Blue, Alpha**, and it allows you to define a color **with transparency**.

### Syntax:
```css
background-color: rgba(255, 0, 0, 0.5);
```

- The fourth parameter (alpha) is a number between:
  - `0`: fully transparent
  - `1`: fully opaque

### Example:
```css
.alpha-box {
  background-color: rgba(0, 0, 0, 0.7);
}
```

This creates a **semi-transparent black box**, which is useful for overlays or readable text over images.

---

## 2. Hexadecimal Alpha

You can also apply transparency using **hex colors** by appending two digits for alpha.

### Syntax:
```css
/* Black with 70% opacity */
background-color: #000000B3;
```

- The last two characters represent the **alpha channel** in hexadecimal:
  - `FF` = 100% opacity
  - `00` = 0% opacity

### Examples:
| Hex Code     | Description              |
|--------------|--------------------------|
| `#FF000080`  | Red at 50% opacity       |
| `#00000033`  | Black at 20% opacity     |

---

## 3. `transparent` Keyword

You can also use the predefined keyword:
```css
background-color: transparent;
```

- Equivalent to setting the color with **0% opacity**
- Mostly used to override or reset styling, or in more advanced use cases like **gradients**.

---

## 4. The `opacity` Property

Use the `opacity` property to **make an entire element** (including its children) transparent.

### Syntax:
```css
opacity: 0.5;
```

- Values range from:
  - `1`: fully visible
  - `0`: fully invisible

### Important Difference:

| Method         | Affects Only...                      | Affects Entire Element |
|----------------|--------------------------------------|-------------------------|
| `rgba()`       | Only the property it's applied to    | ❌                      |
| `opacity`      | Entire element (text, border, etc.)  | ✅                      |

---

## 5. Example Comparison

```css
/* Semi-transparent background only */
.alpha-box {
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
}

/* Entire box is semi-transparent, including text */
.opacity-box {
  background-color: white;
  color: black;
  opacity: 0.7;
}
```

---

## Summary

| Property/Function       | What It Does                                 | Affects                  |
|-------------------------|----------------------------------------------|--------------------------|
| `rgba()`                | Applies transparency to specific color        | Background (or other color property) |
| `#RRGGBBAA`             | Hexadecimal alternative for RGBA             | Background or border     |
| `transparent`           | Predefined keyword for full transparency     | Background               |
| `opacity`               | Makes the whole element transparent           | Entire box incl. content |

---

Would you like to see an example combining this with **gradients** or a **black hole effect** mentioned in the lesson?

# CSS Gradients – Linear, Radial, and Black Hole Effect

CSS gradients let you create smooth transitions between colors **without using images**. They can be applied via the `background-image` property.

---

## 🟦 1. Types of CSS Gradients

### ✅ `linear-gradient()`
Creates a gradient **along a straight line**.

#### Syntax:
```css
background-image: linear-gradient(direction, color1, color2, ...);
```

#### Examples:
```css
linear-gradient(red, yellow);
linear-gradient(to right, red, yellow, green);
linear-gradient(45deg, red, yellow, green);
```

- `to bottom` (default): top to bottom
- `to right`: left to right
- `45deg`: top-left to bottom-right
- Use **percentages** for color stops:
  ```css
  linear-gradient(black 30%, red 50%, yellow 75%);
  ```

---

### ✅ `radial-gradient()`
Creates a gradient **from the center outward**, like a ripple.

#### Syntax:
```css
background-image: radial-gradient(shape size at position, color-stops);
```

#### Example:
```css
radial-gradient(red 20%, yellow);
```

- `0%` is center, `100%` is edge.
- Shape/position options:
  - `circle`, `ellipse`
  - `at center`, `at top`, `at bottom left`, etc.

---

## 🧠 Tips on Gradients

- Use **percentages** to control where transitions happen.
- Create **sharp transitions** by duplicating color stops:
  ```css
  linear-gradient(red 50%, red 50%, yellow 75%);
  ```
- Combine with `transparent` for layered effects.

---

## 🖼️ 2. Gradients Are Treated as Images

They are applied via `background-image`, which means they:
- Can be **stacked**
- Can be combined with **real images**

### Example:
```css
background-image: radial-gradient(black 30%, white 31%, transparent 40%), url('background.jpg');
background-size: cover;
```

> The **first layer listed is rendered on top**, so the gradient must be written **before** the image to overlay it.

---

## 🎯 3. Practical Task – The Black Hole Effect

### ✅ Goal:
Create a **radial black hole** with a glowing edge over a background image.

### ✅ Steps:

1. **Add background image:**
```css
background-image: url('space.jpg');
background-size: cover;
```

2. **Add radial gradient on top of the image:**
```css
background-image: 
  radial-gradient(
    black 30%, 
    white 31%, 
    transparent 40%
  ),
  url('space.jpg');
```

3. **Result:**
- `black 30%` creates the hole
- `white 31%` adds the glow ring
- `transparent 40%` fades into the background
- The image shows through the transparent area

### ✅ Full Example:
```css
.blackhole {
  width: 300px;
  height: 300px;
  background-image: 
    radial-gradient(black 30%, white 31%, transparent 40%), 
    url('space.jpg');
  background-size: cover;
}
```

---

## Summary Table

| Gradient Type     | Function               | Use Case                     |
|-------------------|------------------------|-------------------------------|
| `linear-gradient` | Line transitions       | Backgrounds, sections        |
| `radial-gradient` | Circular transitions   | Effects, overlays, highlights|
| `transparent`     | See-through areas      | Layering multiple gradients  |
| `background-size` | `cover` or `contain`   | Scale background images      |
| `background-image` | Combine gradients/imgs| Layering effects             |

---

Would you like a ready-made **codepen**, **Notion embed**, or a **PDF with visual diagrams**?

# CSS `box-shadow` – Creating Shadows for Depth and Style

The `box-shadow` property allows you to apply one or more shadows to an element’s frame (i.e., the box model).

Shadows help create **depth, emphasis, and realism** in your designs.

---

## ✅ Syntax

```css
box-shadow: offset-x offset-y blur-radius spread-radius color inset;
```

- **offset-x** *(required)*: Horizontal position (e.g. `10px` or `-10px`)
- **offset-y** *(required)*: Vertical position (e.g. `5px` or `-5px`)
- **blur-radius** *(optional)*: How blurry the shadow is (e.g. `15px`)
- **spread-radius** *(optional)*: Size of the shadow; can be negative (e.g. `5px` or `-3px`)
- **color** *(optional)*: Shadow color (e.g. `gray`, `rgba(0,0,0,0.5)`)
- **inset** *(optional keyword)*: Changes the shadow from outside to inside

---

## 🔹 Example 1 – Basic Shadow

```css
box-shadow: 20px 10px;
```

- Shadow appears 20px to the right, 10px down
- Default blur: none
- Default color: black
- Default inset: no (external shadow)

---

## 🔹 Example 2 – With Blur and Color

```css
box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.3);
```

- Shadow with soft blur and partial transparency
- Creates a more **realistic depth effect**

---

## 🔹 Example 3 – Spread and Inset

```css
box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5) inset;
```

- Shadow is **inside** the element (`inset`)
- Appears as if the element is **carved inward**

---

## 🔹 Example 4 – Multiple Shadows

```css
box-shadow: 
  5px 5px 10px rgba(0, 0, 0, 0.3),
  inset 0 0 5px rgba(255, 255, 255, 0.5);
```

- First is a **normal shadow**
- Second is an **inset white glow**

---

## 📌 Coordinate System Reminder

- X-axis: positive → right, negative → left
- Y-axis: positive → down, negative → up
- Web coordinate origin is **top-left corner**

---

## ✅ Summary Table

| Parameter        | Required? | Description                                      |
|------------------|-----------|--------------------------------------------------|
| `offset-x`       | Yes       | Horizontal shadow distance                       |
| `offset-y`       | Yes       | Vertical shadow distance                         |
| `blur-radius`    | No        | Blurs the edge of the shadow                     |
| `spread-radius`  | No        | Expands/contracts the size of the shadow         |
| `color`          | No        | Shadow color (use RGBA for transparency)         |
| `inset`          | No        | Changes shadow from outside to inside the box    |

---

Would you like to see how `text-shadow` differs from `box-shadow`, or should we continue to `position`, `selectors`, or `pseudo-classes` next?

# CSS Selectors – Combinators

CSS **combinators** allow you to style elements based on their **relationship to other elements**. This is essential for structuring styles efficiently and avoiding unnecessary `class` or `id` attributes in HTML.

---

## 1. **Descendant Selector** (` `)

**Syntax:**

```css
parent descendant {
  /* styles */
}
```

- **Matches any element** that is a **descendant** (nested at any depth) of the specified parent.
- **Does not require** the child to be a direct child.

**Example:**

```css
div h2 {
  color: red;
}
```

- Selects all `<h2>` elements inside a `<div>`, even if deeply nested.

---

## 2. **Child Selector** (`>`)

**Syntax:**

```css
parent > child {
  /* styles */
}
```

- Matches only **direct children** of an element (not deeper descendants).

**Example:**

```css
header > h2 {
  font-size: 2rem;
}
```

- Selects `<h2>` only if it is a direct child of `<header>`.

---

## 3. **Next Sibling Selector** (`+`)

**Syntax:**

```css
element + next-sibling {
  /* styles */
}
```

- Matches an element that **immediately follows** the first element and shares the same parent.

**Example:**

```css
h2 + p {
  margin-top: 0;
}
```

- Selects the first `<p>` **immediately after** an `<h2>`.

---

## 4. **Subsequent Sibling Selector** (`~`)

**Syntax:**

```css
element ~ siblings {
  /* styles */
}
```

- Selects **all siblings** that come **after** the first element (not just the immediate one).

**Example:**

```css
h2 ~ p {
  color: gray;
}
```

- Selects **all `<p>` elements** that come after `<h2>` (sharing the same parent).

---

## Summary Table

| Selector     | Description                                               | Example            |
|--------------|-----------------------------------------------------------|--------------------|
| `A B`        | Selects all `B` inside `A` (descendants)                  | `div p`            |
| `A > B`      | Selects `B` elements that are **direct children** of `A`  | `ul > li`          |
| `A + B`      | Selects the **next sibling** `B` of `A`                   | `h2 + p`           |
| `A ~ B`      | Selects **all subsequent siblings** `B` of `A`            | `h2 ~ p`           |

---

## Notes on Specificity

- Combining selectors (e.g., `div > article > p`) **increases specificity**.
- When two conflicting rules apply, the more **specific selector wins**.

---

## Recommended Practice

Try experimenting with nested HTML structures like this:

```html
<div class="container">
  <article>
    <h2>Heading</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </article>
</div>
```

Then test:

```css
.container article > p { ... }
.container article p { ... }
h2 + p { ... }
h2 ~ p { ... }
```

Understanding **how and when these selectors apply** helps you write clean, maintainable CSS without cluttering your HTML with unnecessary classes or IDs.

# CSS Attribute Selectors

CSS **attribute selectors** allow you to **select and style HTML elements based on their attributes or attribute values**, without relying on classes or IDs.

This is especially useful for targeting specific types of elements like `<input>`, `<a>`, `<img>`, etc., based on their attributes such as `type`, `target`, `alt`, `href`, and more.

---

## 🔹 Basic Syntax

```css
element[attribute] {
  /* styles */
}
```

- Targets elements with the specified attribute, regardless of value.

```css
input[type] {
  border: 1px solid #ccc;
}
```

---

## 🔹 Attribute = Value

```css
element[attribute="value"] {
  /* styles */
}
```

- Targets elements where the attribute matches **exactly** the given value.

```css
input[type="email"] {
  background-color: lightyellow;
}
```

```css
input[type="password"] {
  background-color: lightblue;
}
```

To apply the same styles to both:

```css
input[type="email"],
input[type="password"] {
  padding: 5px;
  border: 1px solid gray;
}
```

---

## 🔹 Common Use Cases

### Inputs with specific types

```css
input[type="submit"] {
  background-color: #333;
  color: white;
  cursor: pointer;
}
```

### Links with target

```css
a[target="_blank"] {
  text-decoration: underline dotted;
}
```

### Images with alt text

```css
img[alt] {
  border: 1px solid #eee;
}
```

---

## 🔹 More Matching Operators

| Selector                      | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `[attr]`                     | Selects elements with the attribute present                                 |
| `[attr="value"]`             | Exact match                                                                 |
| `[attr~="value"]`            | Attribute contains **value** as a **word** (space-separated)                |
| `[attr|="value"]`            | Attribute starts with **value** (or `value-`) – useful for language codes   |
| `[attr^="value"]`            | Attribute **starts with** value                                             |
| `[attr$="value"]`            | Attribute **ends with** value                                               |
| `[attr*="value"]`            | Attribute **contains** value anywhere                                       |

### Examples:

```css
a[href^="https://"] { ... }   /* links starting with https */
img[src$=".jpg"] { ... }      /* images ending in .jpg */
div[data-role*="admin"] { ... }  /* data-role containing 'admin' */
```

---

## 🔹 Box Model Reminder

If you notice elements with the same width/height looking **different**, it's likely due to the **box model**.

By default:
```css
box-sizing: content-box;
```

Padding and borders are **added to** width and height.

To ensure consistent sizing:
```css
* {
  box-sizing: border-box;
}
```

This makes `width` and `height` include padding and border – preferred in most layouts.

---

## ✅ Summary

- Attribute selectors are **powerful tools** for targeting HTML elements without extra class clutter.
- Especially useful for forms, links, and custom data attributes.
- Combine selectors using commas when styles repeat.
- Use box-sizing properly to ensure consistent layout across elements with padding and borders.

---

## 🧪 Practice Idea

Given the following HTML:

```html
<form>
  <input type="email" placeholder="Your email">
  <input type="password" placeholder="Your password">
  <input type="submit" value="Login">
</form>
```

Try styling each input field differently using only attribute selectors (no classes or IDs).

# CSS Pseudo-Classes

**Pseudo-classes** are keywords added to selectors that let you style elements based on their **state**, **position**, or **interaction**. They help improve interactivity and user experience in your design.

---

## 🔹 Syntax

```css
selector:pseudo-class {
  /* styles */
}
```

---

## 🔹 Interaction Pseudo-Classes

### `:hover`
Applies styles when the user hovers over an element (e.g. with a mouse).

```css
a:hover {
  color: red;
}
```

Used most often for buttons and links to indicate interactivity.

---

### `:active`
Applies styles when an element is being clicked.

```css
a:active {
  color: green;
}
```

---

### `:visited`
Applies styles to links the user has already visited.

```css
a:visited {
  color: purple;
}
```

---

### `:focus`
Applies styles to elements (usually form inputs) when focused (e.g. clicked or tabbed into).

```css
input:focus {
  outline: none;
  border-color: blue;
}
```

---

### `:checked`
Targets radio buttons or checkboxes that are selected.

```css
input[type="checkbox"]:checked {
  background-color: #333;
}
```

You can also use combinators with this:

```css
input[type="checkbox"]:checked + span {
  text-decoration: line-through;
  color: gray;
}
```

This is useful in a to-do list scenario where checking the box crosses out the item.

---

### `:invalid` / `:valid`
Used on form elements like `<input>` or `<textarea>` with validation.

```css
input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```

Examples:
- `type="email"` input without `@` is `:invalid`
- `type="number"` input with a value over `max=10` is `:invalid`

---

## 🔹 Structural Pseudo-Classes

These target the position of elements **within their parent**.

### `:first-child`
Targets the first child element of a parent.

```css
li:first-child {
  font-weight: bold;
}
```

---

### `:last-child`
Targets the last child element of a parent.

```css
li:last-child {
  border-bottom: none;
}
```

---

### `:nth-child(n)`
Targets the **nth** child of a parent. `n` can be a number, `even`, `odd`, or a formula.

```css
li:nth-child(3) {
  background-color: lightgray;
}

li:nth-child(even) {
  background-color: #f9f9f9;
}

li:nth-child(3n) {
  background-color: #eee;
}
```

Useful for styling table rows (`<tr>`) or alternating list items.

---

## 🔹 Common Patterns

### Checkbox-controlled styling

```html
<input type="checkbox" id="todo1">
<span>Finish homework</span>
```

```css
input[type="checkbox"]:checked + span {
  text-decoration: line-through;
  color: gray;
}
```

---

### Removing default input focus outline

```css
input:focus {
  outline: none;
  border: 2px solid #007BFF;
}
```

---

## ✅ Summary

- **Pseudo-classes** let you style elements based on state or structural position.
- Often used with form elements and interactive components.
- Common use cases: `:hover`, `:focus`, `:checked`, `:nth-child`, etc.
- Can be combined with attribute selectors and combinators for more advanced logic.

---

## 🧪 Practice Challenge

1. Create a to-do list using checkboxes and spans.
2. Use `:checked + span` to cross out completed tasks.
3. Add hover effects on buttons using `:hover`.
4. Style even rows in a table using `tr:nth-child(even)`.

# CSS Transitions

The `transition` property in CSS allows you to **smoothly animate changes** in CSS properties, typically during pseudo-class states like `:hover`.

---

## 🔹 Basic Usage

```css
/* Base element */
div {
  transition: 1s; /* Applies to all animatable properties */
}

/* On hover */
div:hover {
  background-color: lightblue;
  border-radius: 10px;
}
```

This will apply a 1-second animation when hovering **and** when the mouse leaves.

✅ Best practice: **Always define `transition` in the non-hover (base) state** so the animation works in both directions.

---

## 🔹 Transition Syntax

The `transition` property is a **shorthand** for multiple properties:

```css
transition: [property] [duration] [timing-function] [delay];
```

- `property`: Which CSS property to animate (`background-color`, `width`, etc.)
- `duration`: How long the transition takes (`1s`, `500ms`)
- `timing-function`: The pace of animation (e.g., `ease-in-out`)
- `delay`: Optional wait time before starting

---

## 🔹 Examples

### Transitioning Specific Properties

```css
div {
  transition: border-radius 1s, background-color 3s, width 5s;
}
```

Each property has its own duration. You can also mix timing functions:

```css
div {
  transition: width 1s ease-in, background-color 3s linear;
}
```

---

## 🔹 Timing Functions

Timing functions control **how** the transition progresses over time.

| Function       | Description                            |
|----------------|----------------------------------------|
| `ease`         | Default – slow start and end           |
| `linear`       | Constant speed throughout              |
| `ease-in`      | Starts slow, then speeds up            |
| `ease-out`     | Starts fast, ends slowly               |
| `ease-in-out`  | Slow start and slow end                |

### Example:

```css
div {
  transition: width 1s ease-in-out;
}
```

---

## 🔹 Custom Timing with `cubic-bezier`

If you want full control over the animation speed curve, you can use:

```css
div {
  transition: all 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}
```

Use browser dev tools (like in Firefox) to visually design custom curves and copy the `cubic-bezier` value.

---

## 🔹 Precision with Milliseconds

Instead of seconds, you can define durations more precisely:

```css
div {
  transition: all 150ms ease-in-out;
}
```

---

## ✅ Summary

- Use `transition` to animate property changes (especially hover effects).
- Define it in the base state, not just the hover.
- Use specific properties to control what animates.
- Use `ease-in-out` for smooth effects.
- Add timing functions like `linear`, `ease`, or `cubic-bezier` for advanced control.
- Use milliseconds (`ms`) for finer granularity.

---

## 💡 Tips

- Not all CSS properties are animatable. Common ones include:
  - `background-color`
  - `color`
  - `border`
  - `opacity`
  - `width`, `height`
  - `transform`

- If animation feels “laggy,” try shorter durations (100–300ms is common for UI interactions).


# CSS `position` Property

The `position` property in CSS defines **how an element is positioned in the document**. Depending on its value, you can also use `top`, `right`, `bottom`, `left`, and `z-index` to control its position.

---

## 🔹 Possible Values of `position`

### 1. `static` (default)
- Default behavior.
- Element flows naturally in the document.
- `top`, `left`, `bottom`, `right`, and `z-index` **have no effect**.

---

### 2. `relative`
- Positions the element **relative to its original static position**.
- Does **not remove** the element from the document flow.
- Can use `top`, `left`, `right`, `bottom` to offset it.

```css
.element {
  position: relative;
  top: 30px;     /* Moves element 30px down */
  left: 30px;    /* Moves element 30px right */
}
```

🟡 Other content will **not fill the space** left behind.

---

### 3. `absolute`
- Removes the element from the normal document flow.
- Positioned **relative to the nearest positioned ancestor** (i.e., ancestor with `relative`, `absolute`, or `fixed`).

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

- If **no positioned ancestor is found**, it will be positioned relative to the `body`.

🟡 Absolute elements are in a **new stacking context** and may overlap other elements.

---

### 4. `fixed`
- Also removes the element from document flow.
- Positioned **relative to the browser window** (viewport), not any ancestor.

```css
.fixed-box {
  position: fixed;
  top: 0;
  right: 0;
}
```

- Remains **visible during scroll**.
- Useful for: sticky navbars, floating buttons, popups.

✅ Supports **percentage-based positioning**:
```css
top: 50%;
left: 50%;
transform: translate(-50%, -50%);  /* Perfect center */
```

---

### 5. `sticky`
- Hybrid between `relative` and `fixed`.
- Acts as `relative` until a certain **scroll threshold** is reached, then becomes `fixed`.

```css
.sticky-header {
  position: sticky;
  top: 0; /* Sticks when it hits the top of the viewport */
}
```

- Very useful for **headers and menus that stay visible** while scrolling.

---

## 🔹 Stacking Context: `z-index`

Any element with `position: relative`, `absolute`, `fixed`, or `sticky` can use `z-index`:

```css
.overlay {
  position: absolute;
  z-index: 10; /* Renders above elements with lower z-index */
}
```

- `z-index: auto` is default.
- Higher numbers are rendered **on top**.
- Negative values move elements **behind others**.

---

## 🔹 Summary Table

| Position Value | Out of Flow? | Relative To             | Common Use Case                |
|----------------|--------------|--------------------------|--------------------------------|
| `static`       | ❌           | N/A                      | Default behavior               |
| `relative`     | ❌           | Its original position    | Offsetting elements slightly   |
| `absolute`     | ✅           | Closest positioned ancestor | Tooltips, dropdowns          |
| `fixed`        | ✅           | Browser window (viewport)| Sticky UI, modals, navbars     |
| `sticky`       | ❌ / ✅      | Scroll position threshold| Sticky headers, sections       |

---

## 🔹 Practical Tip

To position an element inside another:
1. Parent: `position: relative`
2. Child: `position: absolute` + `top`, `left`, etc.

Example:
```css
.container {
  position: relative;
}
.icon {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

---

## 💡 Use Cases for `z-index`

| UI Element     | Typical `z-index` |
|----------------|-------------------|
| Modal / popup  | `1000+`           |
| Overlay        | `999`             |
| Sidebar        | `500`             |
| Header         | `100`             |

Always set `z-index` **only on elements with a `position` value other than `static`**.

# 🧩 CSS Popup with Overlay – Centered Using `position: fixed`

In this project, we create a simple popup window with a background overlay, using `position: fixed` and `z-index`.

---

## 🔹 Page Setup

**HTML Structure**
```html
<h1>Welcome</h1>
<p>...long content...</p>

<div id="overlay"></div>

<div id="popup">
  <h2>Accept Cookies</h2>
  <button>Yes</button>
  <button>No</button>
</div>
```

**Base CSS Setup**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  padding: 1em;
}
```

---

## 🔹 Styling the Popup

### Initial Styles
```css
#popup {
  width: 300px;
  border-radius: 10px;
  text-align: center;
  padding: 1.5em;
  background-color: white; /* final color */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; /* above the overlay */
}
```

✅ `position: fixed` makes the popup stick to the viewport regardless of scroll.

✅ `top: 50%` and `left: 50%` position the **top-left corner** in the center of the screen.

✅ `transform: translate(-50%, -50%)` moves the element back by **half its width and height**, effectively centering it.

### Button Styles
```css
#popup button {
  margin-top: 10px;
  padding: 0.5em 1em;
  font: inherit; /* make button use page font */
}
```

---

## 🔹 Styling the Overlay

### Overlay HTML
```html
<div id="overlay"></div>
```

### CSS for the Overlay
```css
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;  /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent */
  z-index: 5;  /* below popup */
}
```

- `100vw` and `100vh` are units relative to the **viewport**, not the parent.

- `rgba(...)` gives transparency to allow background visibility.

- `z-index` controls stacking:
- `z-index: 10` → popup is on top.
- `z-index: 5` → overlay is below popup.

---

## 🔹 Summary

| Element     | Position  | Description                                | z-index |
|-------------|-----------|--------------------------------------------|---------|
| `#popup`    | `fixed`   | Centered, stays in place during scroll     | 10      |
| `#overlay`  | `fixed`   | Covers entire screen with transparency     | 5       |

---

## Tips

- Always center using:  
  `top: 50%; left: 50%; transform: translate(-50%, -50%);`
- Use `vw` and `vh` for viewport-relative sizing.
- Buttons and form elements may need `font: inherit` to match layout.
- Experiment with different background opacities using `rgba()`.

---

## Common Use Cases

- Cookie consent dialogs
- Modal windows
- Confirmation prompts
- Alerts and overlays

---

## Sample Result

- Scrollable page
- Semi-transparent overlay
- Centered popup box with buttons

# CSS Pseudo-elements – `::before`, `::after`, and More

## ✅ Difference Between Pseudo-classes vs. Pseudo-elements

| Feature              | Pseudo-class         | Pseudo-element               |
|----------------------|----------------------|-------------------------------|
| Syntax               | `:`                  | `::`                          |
| Example              | `:hover`, `:first-child` | `::before`, `::after`     |
| Purpose              | Targets **states** or **relationships** | Targets **parts** of elements |
| Affects              | Entire element        | Specific part or virtual element |

---

## 🎯 Common Pseudo-elements

### 1. `::first-letter`
- Styles only the **first letter** of a block-level element.
- Example:
```css
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}
```

### 2. `::first-line`
- Styles only the **first line** of a block-level element.
```css
p::first-line {
  color: red;
}
```

### 3. `::placeholder`
- Styles the **placeholder text** in input fields.
```css
input::placeholder {
  color: gray;
  font-style: italic;
}
```

---

## 🎨 Advanced: `::before` and `::after`

### What They Are:
- Create **virtual elements** inserted before or after the actual content of an HTML element.
- Useful for **decorative elements**, **animations**, **custom bullets**, or **effects**.

### Syntax:
```css
.element::before {
  content: "→ "; /* Can be a string or empty */
}
```

### Key Rule:
- You **must** define the `content` property — even if it's just an empty string:
```css
.element::after {
  content: ""; /* required */
}
```

---

## 🛠️ Styling `::before` / `::after` with Empty Content

- Since there's no real content, the element has **zero size** by default.
- You must define:
  - `width` and `height`
  - `position: absolute`
  - Parent element with `position: relative`

### Example: Custom Underline Below Heading
```css
h1 {
  position: relative;
  width: max-content;
}

h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(to right, #00f, #0ff);
  border-radius: 2px;
}
```

### Result:
- A custom underline under the heading
- Can be styled with:
  - `background`
  - `box-shadow`
  - `border-radius`
  - `transition` / `animation`

---

## 💡 Tips and Use Cases

### Use Cases:
- Custom list bullets using `::before`
- Button hover animations using `::after`
- Gradient borders using pseudo-elements
- Icon placement before headings or labels
- Overlay effects or floating visual cues

### Custom Bullet Example:
```css
li {
  list-style: none;
  position: relative;
}

li::before {
  content: "";
  position: absolute;
  left: -1em;
  top: 0.5em;
  width: 8px;
  height: 8px;
  background-color: #333;
  border-radius: 50%;
}
```

---

## 🔄 `::before` vs `::after` – Which to Use?

- **`::before`** inserts content **before** the main content.
- **`::after`** inserts content **after** the main content.
- When using **`position: absolute`**, they behave similarly.

---

## Summary

| Property        | Required? | Purpose                                  |
|----------------|-----------|------------------------------------------|
| `content`       | ✅         | Required for pseudo-elements to render   |
| `position`      | optional  | Needed for custom positioning            |
| `width` / `height` | optional | Needed for visual blocks (no text)     |
| `z-index`       | optional  | For stacking with other elements         |

Pseudo-elements offer you full flexibility and creative freedom. Use them whenever standard CSS selectors are not enough.

# 🧠 CSS Variables (Custom Properties)

CSS variables allow you to store values (like colors, sizes, etc.) in reusable **named tokens**, improving code maintainability, consistency, and flexibility.

---

## ✅ Syntax

### 1. **Declaring a variable**
- CSS variables are declared using the `--` prefix.
- Typically declared in the `:root` pseudo-class for **global access**.

```css
:root {
  --primary-color: #3498db;
  --font-size-large: 2rem;
}
```

- `:root` refers to the highest-level parent in the DOM (more global than `html` or `body`).

---

### 2. **Using a variable**
- Use the `var()` function to reference the variable.

```css
button {
  background-color: var(--primary-color);
  font-size: var(--font-size-large);
}
```

---

## 🎯 Why Use CSS Variables?

### 1. **Efficiency**
- Define once, use everywhere.
- Save time by avoiding repetition.

```css
color: var(--primary-color); /* Used in multiple selectors */
```

---

### 2. **Consistency**
- Ensures design values remain the same across all elements.

```css
h1, h2, h3 {
  color: var(--primary-color);
}
```

---

### 3. **Flexibility**
- Change the look and feel of your entire website by editing variables in one place.

#### Example: Changing theme colors
```css
:root {
  --primary-color: #e74c3c; /* Old color */
}

/* Change to this for a new look */
:root {
  --primary-color: #2ecc71; /* New color */
}
```

---

## 🌓 Bonus: Dark Mode (Mentioned in the video)
- CSS variables are great for theming (e.g., light/dark mode).
- Example structure:
```css
:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: black;
  --text-color: white;
}
```

Then apply:
```css
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

Switch themes by toggling the `data-theme` attribute on the `<html>` or `<body>` tag.

---

## 🔁 Summary Table

| Concept             | Example                           |
|---------------------|------------------------------------|
| Declare variable     | `--main-color: #ff0000;`          |
| Use variable         | `color: var(--main-color);`       |
| Global scope         | `:root { ... }`                   |
| Update theme         | Change variable values in `:root` |
| Theming/dark mode    | Use `[data-theme]` selectors      |

---

## ⚠️ Notes

- CSS variables work in **modern browsers** (IE not supported).
- Can be overridden in **component scope** or **media queries**.
- Useful for design systems and scalable CSS architectures.

---

## 🧪 Example: Button

```html
<style>
  :root {
    --primary-color: #ff6f61;
    --text-color: #fff;
  }

  button {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
  }
</style>

<button>Click me</button>
```

---

**Conclusion:**  
CSS variables are a powerful tool for modern styling. Use them to create consistent, flexible, and maintainable styles across your website or app.

# Building a Multi-Page Website with HTML & CSS

In this lesson, we create a **multi-page website** with a **fixed navigation bar** using only HTML and CSS.

---

## Project Setup

### 1. **Folder Structure**
- Create a project folder on your Desktop (name it as you like).
- Open the folder in **Visual Studio Code**.
- Create the following files:
  - `index.html`
  - `about.html`
  - `products.html`
  - `login.html`
  - `style.css`

---

## HTML: `index.html` (Home Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <nav>
    <a href="index.html" class="active">Home</a>
    <a href="about.html">About</a>
    <a href="products.html">Products</a>
    <a href="login.html">Login</a>
  </nav>

  <!-- Page content -->
  <h1>Welcome to our Homepage</h1>
  <p>...</p>

</body>
</html>
```

---

## CSS: `style.css`

### 1. **Reset & Global Styling**

```css
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* Reset margins and paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root settings */
html {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Body padding */
body {
  padding: 1rem;
}
```

---

### 2. **Navigation Bar Styling**

```css
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  border-bottom: 2px solid #ccc;
  background-color: white; /* Optional: transparent by default */
}

/* Navigation Links */
nav a {
  text-decoration: none;
  color: #888;
  margin: 0 20px;
}

/* Hover Effect */
nav a:hover {
  color: black;
}

/* Active Link Styling */
nav a.active {
  color: black;
  font-weight: bold;
}
```

---

## Key Concepts

| Concept                     | Explanation                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `nav` tag                   | Semantic HTML5 element for navigation.                                      |
| `position: fixed`           | Keeps the navbar always visible at the top of the screen.                  |
| `width: 100%`               | Makes the nav span the full width of the viewport.                         |
| `text-align: center`        | Centers all inline elements (like links) inside the nav.                   |
| `@import` (Google Fonts)    | Loads custom fonts into your CSS file.                                     |
| `.active` class             | Highlights the current page in the navigation bar.                         |
| `margin: 0 20px`            | Adds horizontal spacing between links.                                     |

---

## Best Practices

- Use **semantic elements** like `<nav>` to improve accessibility and SEO.
- Define font imports at the top of your CSS using `@import`.
- Use **descendant selectors** (`nav a`) to apply styles only to navigation links.
- Always use a **CSS reset** (`* { margin: 0; padding: 0; }`) to avoid browser inconsistencies.
- Avoid repeating styles across pages — link to the same `style.css` in each HTML file.

---

## Page Switching Logic

To highlight the current page:

1. Add the `class="active"` to the current page’s `<a>` tag.
2. Remove `active` from other links.
3. Repeat this manually on each HTML page.

---

## Tip

Later, you can dynamically assign the `active` class using **JavaScript** or server-side logic to avoid hardcoding it on every page.

---

## What’s Next?

- Learn **Flexbox** and **Grid** for better layout control.
- Build a responsive version using **media queries**.
- Add **dark mode** support with CSS variables.

---

**Conclusion:**  
You've now built a basic multi-page site with a reusable navigation bar using only HTML and CSS. Great job laying the foundation for more advanced frontend development!

# 🏠 Building the Home Page with a Header, Slogan, Text, and Call-to-Action (CTA) Button

In this lesson, we create the main **Home page** layout using semantic HTML and style it with CSS. We focus on how to position content below a fixed navigation bar, how to use `calc()`, and how to style a CTA button using gradients and transitions.

---

## 📄 HTML Structure (inside `index.html`)

```html
<header>
  <h1>Introducing Our Amazing Product<br>Change Your Life Today</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
  <a id="cta-button" href="login.html">Try now for free</a>
</header>
```

---

## CSS Styling (in `style.css`)

### 1. **Spacing Below Fixed Navbar**

Since the `nav` is `position: fixed`, it overlaps with the rest of the page content. To fix that, we add `padding-top` to the `header` using the `calc()` function:

```css
header {
  padding-top: calc(50px + 1rem + 2px); /* padding + font-size + border-bottom */
}
```

> Why `calc(50px + 1rem + 2px)`?
- `25px` padding top and bottom = 50px
- `1rem` = font-size
- `2px` = border-bottom of nav

---

### 2. **Styling the `<h1>` Heading**

```css
header h1 {
  margin-top: 2rem;
  font-size: 3.75rem;    /* 3.75 * 16px = 60px approx */
  font-weight: bold;
  line-height: 1.2em;    /* Controls vertical spacing between lines */
}
```

---

### 3. **Styling the Paragraph Text**

```css
header p {
  width: 800px;
  margin: 35px auto;  /* Top/Bottom: 35px, Left/Right: auto for centering */
}
```

---

### 4. **Styling the Call-to-Action (CTA) Button**

```css
#cta-button {
  text-decoration: none;                    /* Remove underline */
  text-transform: uppercase;                /* Uppercase text */
  background: linear-gradient(to right, #ff0080, #7928ca); /* Pink to purple gradient */
  display: inline-block;                    /* Enables padding */
  padding: 1em 3em;                         /* Top/Bottom: 1em, Left/Right: 3em */
  font-weight: 600;
  border-radius: 8px;
  color: white;
  transition: transform 150ms ease;
}

#cta-button:hover {
  transform: scale(1.05);                   /* Slightly enlarges the button */
}
```

> `inline-block` is important because:
> - Anchor (`<a>`) is inline by default and ignores padding
> - Changing it to `inline-block` allows proper box model behavior

> Using `em` units allows button size to scale with font size (responsive design)

---

## Summary of Key Concepts

| Feature                   | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| `header` tag              | Semantic tag for introductory page content                                 |
| `calc()`                  | CSS function to perform unit-aware calculations                            |
| `line-height`             | Controls vertical spacing between lines                                     |
| `margin: auto`            | Horizontally centers block elements                                         |
| `text-transform`          | Makes text uppercase                                                        |
| `inline-block`            | Allows inline elements to accept box properties like `padding`             |
| `linear-gradient()`       | Creates a gradient background                                               |
| `transform: scale()`      | Enlarges or shrinks an element while preserving proportions                 |
| `transition`              | Adds animation effect to hover or state change                             |

---

## What's Next?

With the **Home page layout complete**, we will replicate the basic structure across other pages and then explore more advanced layout systems like **Flexbox** and **CSS Grid**.

Let me know if you want to:
- Copy this to a Markdown file
- Prepare the CSS and HTML for other pages (`about.html`, `products.html`, `login.html`)
- Export these notes for Notion or as PDF

# About Page Setup

## 1. Creating the About Page

- Create a new file named `about.html` in your project folder.
- Clicking the "About" link in the navigation should redirect users to this newly created HTML page.

## 2. Copying Navigation and Embedding CSS

- Copy the entire navigation bar from `index.html` and paste it into `about.html`.
- In the `<head>` section of `about.html`, embed the shared CSS file:

    ```html
    <link rel="stylesheet" href="styles.css">
    ```

- This allows you to style multiple pages consistently using a single CSS file.

## 3. Updating the Active Navigation Link

- Remove the `active` class from the home link.
- Add the `active` class to the about link to reflect the current page.

## 4. Adding Page Content

- Inside the `<header>` tag, include:
  - An `<h1>` element to introduce the page.
  - A video embedded using an `<iframe>`.

- To embed a video:
  - Go to YouTube, find a video, click **Share** → **Embed**, and copy the generated `<iframe>` code.
  - Paste the code below the header section in `about.html`.
  - Remove the `width` and `height` attributes from the iframe, as these will be defined in CSS.

## 5. YouTube Embedding Notes

- Some YouTube videos may not allow embedding on external websites.
- Whether a video is embeddable depends on the content creator's settings.

## 6. Styling the Video Player

- Add a class `video-player` to the `<iframe>`:

```html
<iframe class="video-player" ...></iframe>
```

- In `styles.css`, define the styles for `.video-player`:

```css
.video-player {
    margin-top: 30px;
    width: min(1100px, 100%);
    aspect-ratio: 16 / 9;
    border-radius: 8px;
}
```

- Explanation:
  - The `min()` function ensures the video player is responsive:
    - On large screens, width is capped at 1100px.
    - On small screens, width will be 100% of the container.
  - The `aspect-ratio` property maintains the correct width-to-height ratio, especially when resizing the window.
  - `border-radius` improves visual aesthetics.

## 7. Final Result

- The About page should now have:
  - The same navbar as other pages.
  - An active About link.
  - An embedded responsive video.
  - Unified styling via the shared CSS file.

The About page is now complete and ready. Proceed to the next section.

# Responsive Sizing with `min`, `max-width`, and `min-width`

## Recap from Last Lesson

- In the previous lesson, we made the `<iframe>` responsive using the `min()` function.
- While this is a powerful and modern CSS feature, there are also simpler ways to achieve responsive design using `max-width` and `min-width`.

## Understanding `width` vs `max-width`

- If we use a fixed `width` (e.g., `1000px`), the element will **always** be that wide, even on small devices.
- This causes usability issues:
  - On smartphones (which are typically less than 1000px wide), the user would have to scroll horizontally.
  - Horizontal scrolling is generally a bad user experience.

## Solution: Use `max-width`

- Instead of hardcoding the width, use `max-width` to define a limit:
  
```css
.container {
    width: 1000px;
    max-width: 90%;
}
```

- What happens here:
  - On large screens: width is `1000px`.
  - On smaller screens: `1000px` becomes **more than 90% of screen**, so `max-width: 90%` takes over.
  - Effectively, the browser picks the smaller value between the two.

- This is conceptually the same as:

```css
width: min(1000px, 90%);
```

- However, `max-width` is more widely supported and easier to understand for beginners.

## Optional: `max-height` and `overflow`

- You can also control vertical size with `max-height`:

```css
.box {
    max-height: 400px;
    overflow: hidden;
}
```

- If content exceeds 400px:
  - `overflow: hidden` → excess content is cut off.
  - `overflow: scroll` → scrollbar appears inside the box.

## Opposite: `min-width` and `min-height`

- These prevent elements from becoming **too small**:

```css
.responsive-box {
    min-width: 500px;
    max-width: 1000px;
}
```

- The behavior:
  - On wide screens: element can grow to 1000px.
  - On narrow screens: it can shrink, but never below 500px.

## Why This Matters

- Using `min-width`, `max-width`, `min-height`, and `max-height` gives **flexibility**.
- Elements can adapt to screen size, improving accessibility and user experience.
- This is a cornerstone of **responsive web design**.

## Summary

| Property     | Purpose                                |
|--------------|----------------------------------------|
| `width`      | Fixed size                             |
| `max-width`  | Upper limit (can shrink)               |
| `min-width`  | Lower limit (can't shrink too small)   |
| `height`     | Fixed height                           |
| `max-height` | Upper limit for height                 |
| `min-height` | Minimum height                         |
| `overflow`   | Controls content outside the box       |

Use these properties wisely to build flexible, mobile-friendly layouts.

# Products Page Setup

## 1. Initial Setup

- Create a new file named `product.html`.
- Insert the navigation bar (same as on other pages).
- Embed the shared CSS file:

```html
<link rel="stylesheet" href="styles.css">
```

- Update the navigation:
  - Remove the `active` class from previous pages.
  - Add the `active` class to the **Products** link.

- Inside the `<header>`, add an `<h1>` heading:

```html
<h1>Products</h1>
```

## 2. Creating Product Card Views

- Add a container to hold all product cards:

```html
<div class="products-container">
    <div class="item">
        <h2>Item One</h2>
        <p>This is an example product.</p>
    </div>
    <div class="item">
        <h2>Item Two</h2>
        <p>This is an example product.</p>
    </div>
    <div class="item">
        <h2>Item Three</h2>
        <p>This is an example product.</p>
    </div>
</div>
```

## 3. Styling the Product Cards in CSS

### Container Styling

```css
.products-container {
    margin-top: 30px;
}
```

### Basic Card Styling (for all `.item` elements)

```css
.item {
    background-color: lightgray; /* temporary */
    height: 300px;
    width: 300px;
    display: inline-block;
    margin: 0 20px 20px 20px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    vertical-align: top;
}
```

> Note: `display: inline-block` allows cards to be placed side-by-side while still supporting padding and margin.

### Removing temporary background

Once layout is finalized, remove the gray background color from all `.item` elements.

## 4. Individual Card Customization with Pseudo-Classes

```css
.products-container .item:first-child {
    border: 1px solid black;
}

.products-container .item:nth-child(2) {
    background-color: purple;
    color: white;
}

.products-container .item:last-child {
    background-color: black;
    color: white;
}
```

### Optional: Inner Spacing for Headings

```css
.item h2 {
    margin-bottom: 10px;
}
```

## 5. Final Notes

- The cards now:
  - Sit next to each other on wide screens.
  - Have spacing and consistent dimensions.
  - Are individually styled using pseudo-classes.
- The layout is clean, visually separated, and responsive-friendly to an extent.

✅ The **Products** page is now complete.

Next step: proceed to the final page of the beginner project.

# Login Page Setup

## 1. Initial Setup

- Create the file `login.html`.
- Copy the navigation bar from previous pages.
- Set the active class on the **Login** link.
- Embed the shared CSS file:

```html
<link rel="stylesheet" href="css/styles.css">
```

- Inside the `<header>`, add a heading:

```html
<h1>Login</h1>
```

- Add the login form:

```html
<form class="login-form">
    <input type="text" id="username" name="username" placeholder="Username" required>
    <input type="password" id="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
</form>
```

## 2. Styling the Login Page in CSS

### Form Styling

```css
form {
    margin-top: 30px;
}
```

### Input Field Layout

```css
input {
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    font: inherit;
    border-radius: 30px;
}
```

> `display: block` ensures that each input starts on a new line.  
> `margin: 0 auto` centers them horizontally.  
> `font: inherit` ensures they use the global `font-family` (form elements don’t inherit it by default).

### Text and Password Input Styling

```css
input[type="text"],
input[type="password"] {
    padding: 5px 20px;
    width: 400px;
    border: none;
    background-color: #e3e3e3;
    border-radius: 100px;
    outline: none;
}
```

> Consistent padding, width, and border-radius give a polished look.

### Submit Button Styling

If using a `<button type="submit">`, remember to style it too:

```css
input[type="submit"],
button[type="submit"] {
    width: 200px;
    padding: 10px;
    background-color: #722cff;
    color: white;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: 150ms ease;
    border: none;
}
```

### Optional Hover Effects

```css
input[type="submit"]:hover,
button[type="submit"]:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

## 3. Final Thoughts

- The form uses simple and reusable CSS properties.
- Many properties repeat across inputs and buttons — this reduces complexity and improves consistency.
- This completes the **Login** page and the full beginner website project.

## 4. Next Steps

Now that the website is finished:

- All pages are linked through a working navigation bar.
- You’ve applied practical HTML and CSS techniques for layout and design.
- You've also learned:
  - Basic positioning and structure.
  - Form styling best practices.
  - Pseudo-classes and responsive ideas.

In the upcoming lessons, you’ll go deeper into more **advanced CSS topics**, including:

- **Animations**
- **Flexbox**
- **CSS Grid**
- **Fully responsive design techniques**

Let’s take your front-end development skills to the next level.

# CSS Animations – Complete Notes

## 1. When to Use `animation` vs `transition`

- Use `transition` when you're animating a **simple change from one state to another** (e.g. hover effects).
- Use `animation` when:
  - The change involves **multiple steps** or keyframes.
  - You want a **looping** or **ongoing** animation.
  - You want **fine-grained control** over animation timing, direction, and play behavior.

## 2. Defining an Animation with `@keyframes`

- Use the `@keyframes` rule to define animation steps.

```css
@keyframes spin {
    0% {
        transform: scale(1);
        border-radius: 0;
        rotate: 0deg;
    }
    50% {
        transform: scale(2);
        border-radius: 0;
        rotate: 0deg;
    }
    100% {
        transform: scale(2) rotate(360deg);
        border-radius: 50%;
    }
}
```

> You can define as many steps as needed using percentage values between `0%` and `100%`.

## 3. Applying an Animation to an Element

```css
.animated-box {
    animation-name: spin;
    animation-duration: 3s;
}
```

- This will animate the element once, then jump back to the initial state.

## 4. Controlling Animation Behavior

### Duration

```css
animation-duration: 0.5s; /* very fast */
animation-duration: 3s;   /* slower */
```

### Timing Function

```css
animation-timing-function: ease;       /* default */
animation-timing-function: linear;     /* constant speed */
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
```

> This controls the **speed curve** of the animation.

### Delay

```css
animation-delay: 1s;
```

> Delays the start of the animation by the specified time.

### Iteration Count

```css
animation-iteration-count: 1;       /* default */
animation-iteration-count: 3;
animation-iteration-count: infinite;
```

> Defines how many times the animation should play.

### Direction

```css
animation-direction: normal;     /* default */
animation-direction: reverse;
animation-direction: alternate;         /* forward → backward → forward ... */
animation-direction: alternate-reverse;
```

> Controls the direction in which the animation plays.

### Fill Mode

```css
animation-fill-mode: none;      /* default */
animation-fill-mode: forwards;  /* keeps final state */
animation-fill-mode: backwards; /* applies starting styles before animation begins */
animation-fill-mode: both;
```

> Useful for keeping the final state after the animation ends.

### Play State

```css
animation-play-state: running;  /* default */
animation-play-state: paused;
```

#### Interactive Example (Pause on Hover)

```css
.animated-box {
    animation: spin 3s infinite;
}

.animated-box:hover {
    animation-play-state: paused;
}
```

> Animation stops when the user hovers the element.

## 5. Shorthand Syntax

You can combine all properties into a single line:

```css
animation: spin 3s ease-in-out 1s infinite alternate forwards;
```

**Order:**

```
animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode];
```

Only `name` and `duration` are required, the rest are optional.

---

## 6. Summary Table

| Property                   | Purpose                                              |
|----------------------------|------------------------------------------------------|
| `animation-name`           | Name of the `@keyframes` animation                  |
| `animation-duration`       | Duration of the animation                           |
| `animation-timing-function`| Speed curve (ease, linear, etc.)                    |
| `animation-delay`          | Delay before animation starts                       |
| `animation-iteration-count`| How many times the animation should repeat          |
| `animation-direction`      | Direction (normal, reverse, alternate, etc.)        |
| `animation-fill-mode`      | Final state behavior after animation ends           |
| `animation-play-state`     | Running or paused                                   |
| `animation`                | Shorthand for all properties above                  |

---

## 7. Final Thoughts

- Use `@keyframes` to define complex sequences.
- Use `transition` for simple state changes.
- Use `animation` for repeated or multistep changes.
- Combine creativity with timing control to build engaging UI effects.

---

> ✅ Now you're ready to practice! Try applying this knowledge in a real project or follow the next coding exercise.

# CSS Loading Animation with 3D Rotation

## 1. Goal

We want to create a loading animation that:

- Rotates a square on the **X, Y, and Z axes**.
- Has a glowing effect using **box-shadow**.
- Is centered on the screen using **absolute positioning**.
- Uses a **smooth, infinite animation**.

---

## 2. HTML Structure

```html
<div class="loading"></div>
```

---

## 3. CSS Styling

### Base Styles

```css
.loading {
    width: 100px;
    height: 100px;
    border: 4px solid #722cff;
    border-radius: 12px;
    box-shadow: 0 0 20px #722cff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    animation: loading 2s ease-in-out infinite;
}
```

> - `border-radius` softens the square edges.  
> - `box-shadow` creates the glowing effect.  
> - `position: absolute` and `transform: translate(-50%, -50%)` perfectly center the element.  
> - `z-index: 10` ensures it's above all other elements.  
> - `animation` links to the keyframes defined below.

---

## 4. Defining the Animation

```css
@keyframes loading {
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate(-50%, -50%);
    }
    33% {
        transform: rotateX(180deg) rotateY(0deg) rotateZ(0deg) translate(-50%, -50%);
    }
    67% {
        transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg) translate(-50%, -50%);
    }
    100% {
        transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg) translate(-50%, -50%);
    }
}
```

> - We rotate the element **one axis at a time**:
>   - `0%`: no rotation  
>   - `33%`: rotate X  
>   - `67%`: rotate Y  
>   - `100%`: rotate Z  
> - All transformations include `translate(-50%, -50%)` to maintain centering.

---

## 5. Why This Works

- A **180° rotation** looks visually like no change → the loop is seamless.
- Using 3D rotation on all axes creates a more **dynamic loading effect**.
- The animation **never stops** due to `infinite` iteration count.

---

## 6. Optional Enhancements

You can further improve or tweak the loading animation by:

- Changing `border` thickness or color.
- Using `perspective` on the parent to enhance 3D effect.
- Adjusting `box-shadow` for different glow intensities.
- Using `animation-delay` to stagger multiple loaders.

---

## 7. Summary

| Property           | Value              | Purpose                              |
|--------------------|--------------------|--------------------------------------|
| `animation-name`   | `loading`          | Links to `@keyframes`                |
| `animation-duration` | `2s`             | Controls speed                       |
| `animation-timing-function` | `ease-in-out` | Smooth transition                   |
| `animation-iteration-count` | `infinite` | Continuous loop                      |
| `transform`        | `rotateX/Y/Z` + `translate` | 3D rotation & centering        |
| `box-shadow`       | `0 0 20px color`   | Glowing visual effect                |

This loading animation demonstrates how powerful **CSS transforms** and **animations** can be for interactive UI elements.

# CSS Flexbox – Centering and Layout Basics

## 1. Initial Setup: 5 Boxes

- You have five `<div>` boxes in HTML with basic styling.
- To align them using Flexbox, apply styles to the parent (e.g. `<body>`).

---

## 2. Basic Flexbox Activation

### CSS

```css
body {
    display: flex;
}
```

- **Effect**:
  - Elements no longer follow the block flow (one below the other).
  - They are now aligned side by side along the **main axis** (horizontal by default).

---

## 3. Understanding `display` Property

| Value   | Behavior                                            |
|---------|-----------------------------------------------------|
| `block` | Takes full width, forces next elements to new line. |
| `inline`| Flows inline, does not break lines.                |
| `flex`  | Activates flex layout mode.                        |

> Applying `display: flex` switches from traditional block/inline behavior to Flexbox layout logic.

---

## 4. Visualizing Flexbox Axes

- **Main Axis**: horizontal (left → right) by default.
- **Cross Axis**: vertical (top → bottom).

> These axes define how elements are positioned and aligned inside the flex container.

---

## 5. Justify Content – Aligning Along the Main Axis

```css
body {
    display: flex;
    justify-content: flex-start;  /* default, aligns left */
    justify-content: flex-end;    /* aligns right */
    justify-content: center;      /* aligns center horizontally */
}
```

> This property positions items along the **main axis**.

---

## 6. Align Items – Aligning Along the Cross Axis

First, give the flex container some height to see vertical alignment:

```css
body {
    min-height: 800px;
}
```

Then:

```css
body {
    align-items: flex-start;  /* aligns to top */
    align-items: flex-end;    /* aligns to bottom */
    align-items: center;      /* aligns center vertically */
}
```

> This property aligns items along the **cross axis** (vertical by default).

---

## 7. Centering a `<div>` Using Flexbox

To perfectly center items horizontally **and** vertically:

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 800px;
}
```

> ✅ These **three lines** are all you need to center any content in the viewport.

---

## 8. Flexbox Responsiveness

- The layout is **flexible** by design.
- Boxes remain centered even when viewport dimensions change.

# Flexbox: `flex-direction` and `gap` Properties

## 1. Revisiting the Layout

- Start with this simplified setup:

```css
body {
    display: flex;
    justify-content: flex-start;
}
```

- We **remove `align-items`** temporarily to focus on direction.
- Boxes are aligned left by default (main axis: left → right).

---

## 2. Understanding `flex-direction`

The `flex-direction` property controls the **main axis direction**, which affects all other alignment properties.

### Values:

```css
flex-direction: row;          /* Default – left to right */
flex-direction: row-reverse;  /* Right to left */
flex-direction: column;       /* Top to bottom */
flex-direction: column-reverse; /* Bottom to top */
```

### Example – `row-reverse`:

```css
body {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
}
```

> Now, `flex-start` is on the **right**, and `flex-end` is on the **left** because the main axis flows in reverse.

---

## 3. Example – `column`:

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

- Now, the main axis goes **top to bottom**.
- `justify-content` affects **vertical alignment**.
- `align-items` is used to **center horizontally**.

---

## 4. Why `flex-direction` Matters

Changing the direction **alters the behavior** of:

- `justify-content`
- `align-items`

> Always **visualize the main axis** to predict how elements will behave.

---

## 5. Common Layout Use Case

### Goal: Vertically stacked content, centered horizontally

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

> ✅ This is perfect for vertically structured layouts like landing pages or form containers.

---

## 6. Flexbox Spacing with `gap`

No more need for manual margins — use the `gap` property.

### Example:

```css
body {
    display: flex;
    gap: 20px;
}
```

> Adds **equal spacing between flex children**.
> Works with all `flex-direction` values.

---

## 7. Summary

| Property         | Description                                           |
|------------------|-------------------------------------------------------|
| `flex-direction` | Sets main axis direction (`row`, `column`, etc.)     |
| `row`            | Items go left → right (default)                      |
| `row-reverse`    | Items go right → left                                |
| `column`         | Items go top → bottom                                |
| `justify-content`| Aligns along main axis                               |
| `align-items`    | Aligns along cross axis                              |
| `gap`            | Creates space between items without using margins    |

---

### 🔁 Recap

- `flex-direction` changes how layout and alignment behave.
- Use `align-items` vs `justify-content` **depending on axis direction**.
- Use `gap` instead of margins for cleaner and more consistent spacing.

# Flexbox: `justify-content` – Space Distribution Strategies

## 1. `justify-content: space-between`

```css
body {
    display: flex;
    justify-content: space-between;
}
```

- Distributes elements **evenly across the main axis**.
- **First and last** items are **flush with the edges** of the container.
- The **gap** exists **only between elements**.

### Visualization:

```
|[Box1]   [Box2]   [Box3]   [Box4]   [Box5]|
^                                         ^
Start                                     End
```

---

## 2. `justify-content: space-around`

```css
body {
    display: flex;
    justify-content: space-around;
}
```

- Adds **equal space on both sides** of each element.
- This causes the **space between elements** to be **twice as large** as the space on the outer edges.
- As a result, the **outer boxes appear slightly indented**.

### Visualization:

```
|  [Box1]     [Box2]     [Box3]     [Box4]     [Box5]  |
^                                                   ^
Smaller gap                                Smaller gap
      <----- Larger gaps in between -----> 
```

> ⚠ This asymmetry might feel visually inconsistent.

---

## 3. `justify-content: space-evenly`

```css
body {
    display: flex;
    justify-content: space-evenly;
}
```

- Distributes **equal space between all elements**, including edges.
- ✅ Perfect symmetry.
- All spaces (edges and between items) are exactly the same.

### Visualization:

```
|   [Box1]   [Box2]   [Box3]   [Box4]   [Box5]   |
^                                               ^
Same space everywhere
```

---

## 4. Responsiveness & Flexibility

- All these values are **responsive**.
- Gaps **adjust dynamically** based on the container size.
- That’s why **Flexbox is superior** to manual margin/padding techniques.

---

## 5. Note on `align-items` with Space Distribution

- Technically, `align-items` can use values like:

```css
align-items: space-between;
align-items: space-around;
align-items: space-evenly;
```

- But:
  - These are only meaningful when there are **multiple lines or rows** (i.e. with `flex-wrap: wrap`).
  - In a single row layout, they **have no visual effect**.

---

## 6. Summary Table

| Value           | Behavior                                                             |
|------------------|----------------------------------------------------------------------|
| `space-between`  | Equal spacing **between** elements, edges are **touching**          |
| `space-around`   | Equal spacing **around** each element, **outer gaps are smaller**   |
| `space-evenly`   | Equal spacing **everywhere**, including edges                       |

---

## 7. Which One to Use?

| Use Case                             | Recommended Value     |
|--------------------------------------|------------------------|
| Clean edge-to-edge distribution      | `space-between`        |
| Softer layout with visual padding    | `space-around`         |
| Perfectly balanced, symmetrical gaps | `space-evenly`         |

---

## Final Thoughts

- Flexbox simplifies layout structure and spacing logic.
- These values provide clean, adaptable spacing without needing manual `margin` hacks.
- Learn to **visualize the main axis** and understand how these values affect your layout.

> ✅ Flexbox helps you build layouts that look good on any screen size with minimal CSS.

# Flexbox: `flex-wrap` and Multi-Line Alignment

## 1. Making Flexbox Responsive with `flex-wrap`

### Default Behavior

```css
body {
    display: flex;
    flex-wrap: nowrap; /* default */
}
```

- All items stay on one line, even if there’s **not enough space**.
- Items will **shrink** to fit the container.

### Enabling Wrapping

```css
body {
    display: flex;
    flex-wrap: wrap;
}
```

- Items will **wrap to the next line** when there's not enough space.
- This makes layouts **responsive by default**.

---

## 2. Demonstration with More Boxes

- Let’s say we have 9 boxes in the HTML:

```html
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
<div class="box">4</div>
<div class="box">5</div>
<div class="box">6</div>
<div class="box">7</div>
<div class="box">8</div>
<div class="box">9</div>
```

- With `flex-wrap: wrap`, boxes will move to the next line as needed.
- This results in **multiple rows (lines)** of flex items.

---

## 3. Centering Wrapped Layouts

```css
body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
```

- This centers items **on each line** both horizontally and vertically.
- But: You might notice **large vertical gaps** between rows.

---

## 4. Why Are the Vertical Gaps So Large?

- With multiple rows, each **row has its own main and cross axis**.
- `align-items` aligns boxes **within their row**.
- But we need to control how **all rows align together**.

---

## 5. Introducing `align-content`

```css
body {
    align-content: center;
}
```

- `align-content` controls the **overall vertical alignment** of all lines together (across the full container).
- Without it, the **default** value (`stretch` or `space-around`) may cause excessive gaps.

---

## 6. Comparing `align-items` vs `align-content`

| Property         | Affects                       | Description |
|------------------|-------------------------------|-------------|
| `align-items`    | **Within a row**              | Aligns items on the cross axis inside each flex row individually. |
| `align-content`  | **Between all rows**          | Aligns the group of all flex lines along the cross axis. |

---

## 7. Common Values for `align-content`

```css
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

- Use `center` to vertically center all rows.
- Use `space-between` to remove gaps at top/bottom and spread rows evenly.
- Use `space-evenly` for perfect equal gaps between all rows **and** edges.

---

## 8. Perfectly Centered Multi-Line Layout

To center all content both **within lines** and **across lines**, use:

```css
body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
```

> ✅ This ensures that your entire layout stays centered horizontally and vertically, even with multiple rows.

---

## 9. Summary

| Property         | Affects                      | Use When...                                   |
|------------------|------------------------------|------------------------------------------------|
| `flex-wrap`      | Item wrapping                | Layout needs to adapt across screen sizes     |
| `justify-content`| Main axis (within row)       | Align items horizontally (row by default)     |
| `align-items`    | Cross axis (within row)      | Align items vertically within their line      |
| `align-content`  | Cross axis (across all rows) | Align all rows as a group (multi-line layouts)|

---

### 🔁 Recap

- Use `flex-wrap: wrap` to make your layout responsive.
- Use `justify-content` to control alignment **within each row**.
- Use `align-items` to align items **inside each row**.
- Use `align-content` to align **the whole group of rows**.

# Flexbox: `row-gap`, `column-gap`, and Centering Content Inside Boxes

## 1. Fine-Tuning Gaps with `row-gap` and `column-gap`

When working with **multi-line flexbox layouts**, you can separate the gap property into:

```css
row-gap: 20px;
column-gap: 10px;
```

- `row-gap` – controls **vertical space** between rows.
- `column-gap` – controls **horizontal space** between columns.

> ✅ Equivalent shorthand:

```css
gap: 20px 10px; /* row-gap first, then column-gap */
```

### When to Use

- Most of the time, a single `gap` is enough.
- `row-gap` and `column-gap` become more useful in **CSS Grid layouts**, where rows and columns are defined explicitly.

---

## 2. Flexbox Can Be Used on Any Element

- Flexbox is **not limited to the `<body>`**.
- You can apply `display: flex` to **any container element**.

---

## 3. Centering Content Inside Each Box

### Scenario:

- You have numbered boxes, and the numbers are currently aligned top-left.
- You want to **center the number horizontally and vertically**.

### Solution:

Apply Flexbox inside each `.box`:

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

> ✅ This centers the content **both ways**.

### Optional Variants:

- Align top-left: `justify-content: flex-start; align-items: flex-start;`
- Align bottom-right: `justify-content: flex-end; align-items: flex-end;`
- Align middle-right: `justify-content: flex-end; align-items: center;`

---

## 4. Summary – Nested Flexbox Patterns

| Element         | Flexbox Role                   |
|------------------|-------------------------------|
| Parent container | Layout boxes in rows/columns  |
| `.box` div       | Can be a flex container itself |
| Inner content    | Aligned via `justify-content` and `align-items` |

> ✅ Flexbox is powerful because it allows **nested flexible layouts** with very little code.

---

## 5. Next Up: Responsive Resizing with Flexbox

You’ve now mastered:

- Flexbox axes (`flex-direction`)
- Alignment (`justify-content`, `align-items`, `align-content`)
- Responsiveness (`flex-wrap`)
- Spacing (`gap`, `row-gap`, `column-gap`)
- Nesting Flexbox to center content

> Up next: learn how to **make elements grow and shrink responsively** using `flex-grow`, `flex-shrink`, and `flex-basis`.

# Flexbox: Responsive Resizing with `flex-shrink` and `flex-grow`

## 1. Base Setup

Before we begin:

```css
.container {
    display: flex;
    gap: 10px;
}
```

We have **five boxes** inside a flex container. No `flex-wrap` applied.

---

## 2. `flex-shrink`

Controls whether an element is **allowed to shrink** if there’s not enough space.

- Default: `flex-shrink: 1` → element can shrink.
- `flex-shrink: 0` → element **won’t shrink**, may overflow.

### Example:

```css
.box {
    flex-shrink: 1;
}
#box1 {
    flex-shrink: 0;
}
```

> ✅ All boxes shrink when needed, **except the first one**, which keeps its size.

### Use Cases:

- Prevent distortion of images/icons.
- Protect important layout elements from becoming too small.

---

## 3. `flex-grow`

Controls whether an element is **allowed to grow** to fill extra space.

- Default: `flex-grow: 0` → element does not grow.
- `flex-grow: 1` → element grows to fill **remaining space**.

### Example:

```css
.box {
    flex-grow: 0;
}
#box1 {
    flex-grow: 1;
}
```

> ✅ Only the **first box grows** to take up remaining space.

This is useful in layouts like a TODO list:

- Text area grows
- Buttons and icons stay fixed

---

## 4. Grow and Shrink as Multipliers

`flex-grow` and `flex-shrink` can also be **multipliers**, not just booleans:

```css
.box {
    flex-grow: 1;
}
#box1 {
    flex-grow: 5;
}
```

### What happens:

- All elements can grow
- `#box1` grows **5x more** than the rest when extra space is available

❗ Important:
- This only affects **additional space** distribution.
- It doesn’t make the box 5× bigger by default.

Same logic applies to:

```css
flex-shrink: 5;
```

→ Element shrinks **5× faster** than others.

---

## 5. Summary Table

| Property       | Purpose                         | Default | Typical Use                        |
|----------------|----------------------------------|---------|------------------------------------|
| `flex-shrink`  | Allow item to shrink             | `1`     | Prevent overflow, icons, images    |
| `flex-grow`    | Allow item to expand             | `0`     | Fill space, growing text areas     |
| `flex-basis`   | Set default size (before grow)   | `auto`  | Often used with grow/shrink combos |

---

## 6. Best Practices

- Use `flex-grow` and `flex-shrink` to build **responsive layouts**.
- Apply to **individual items** only when needed.
- Most common pattern:

```css
.flex-item {
    flex-grow: 1;
    flex-shrink: 1;
}
```

- Use specific grow/shrink only for **exceptions** (e.g. `#box1`).

---

## 7. Coming Next

Now that you understand how to control **resizing** with Flexbox, next you'll learn how to combine these properties using the shorthand `flex`, and how `flex-basis` fits into this model.

# Flexbox: Combining `flex-grow`, `flex-shrink` with `min-width`, `max-width` and Media Queries

## 1. Using `max-width` with `flex-grow`

Let elements grow – but only up to a **maximum size**:

```css
.box {
    flex-grow: 1;
    max-width: 300px;
}
```

✅ Boxes grow **equally** until they hit **300px max width**. After that, they stop growing.

---

## 2. Using `min-width` with `flex-shrink`

Let elements shrink – but only down to a **minimum size**:

```css
.box {
    flex-shrink: 1;
    min-width: 100px;
}
```

✅ Boxes shrink as needed, but **not below 100px**.

❌ If space gets too tight, boxes will **overflow** instead of shrinking further.

---

## 3. Dealing with Overflow

When combining `min-width` with `flex-shrink`, overflow may occur at small screen sizes.

To prevent this:

- **Use `flex-wrap`** to allow elements to wrap onto the next line.
- Control when it happens using a **media query**.

---

## 4. Example: Responsive Boxes

```css
.container {
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
}

.box {
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 100px;
    max-width: 300px;
}

/* Responsive wrap */
@media (max-width: 600px) {
    .container {
        flex-wrap: wrap;
    }
}
```

✅ Now:

- Boxes grow and shrink **within safe bounds**
- If screen is **too small**, boxes **wrap to new line** instead of overflowing

---

## 5. Summary Table

| Property         | Purpose                                           |
|------------------|---------------------------------------------------|
| `flex-grow: 1`   | Element fills remaining space                    |
| `max-width`      | Limits how much the element can grow             |
| `flex-shrink: 1` | Element can shrink when needed                   |
| `min-width`      | Limits how much the element can shrink           |
| `flex-wrap`      | Allows items to move to the next line            |
| `@media`         | Enables conditional layout changes               |

---

## 6. Best Practice: Responsive Flexbox Strategy

```css
.box {
    flex: 1 1 auto;         /* grow and shrink enabled */
    min-width: 100px;
    max-width: 300px;
}
.container {
    display: flex;
    flex-wrap: nowrap;
}

/* Let boxes wrap on small screens */
@media (max-width: 600px) {
    .container {
        flex-wrap: wrap;
    }
}
```

✅ This combination allows for:
- **Flexible growth and shrinking**
- **Control over boundaries**
- **Responsive wrapping**

---

## 7. Final Thought

This approach shows how **powerful and simple** responsive layouts can be with Flexbox — just by combining a few well-chosen properties.

> 💡 Once the element **can't shrink anymore**, let it **wrap instead** — this is the most intuitive and robust way to handle small screens.

# Media Queries in CSS

Media queries allow your website to **adapt to different screen sizes**. This is a fundamental technique for **responsive web design**, especially important as most users browse websites on mobile devices.

---

## ✅ Basic Syntax

```css
@media (max-width: 1000px) {
    body {
        background-color: blue;
    }
}
```

🔹 This code means:
- If the **screen width is 1000px or less**, apply the styles inside the media query.
- Otherwise, the default styles (outside the media query) will apply.

---

## 🧠 How Media Queries Work

You define **breakpoints** where the layout or styling should change.

Common properties:
- `max-width`: Styles apply **up to** the specified width.
- `min-width`: Styles apply **from** the specified width **and up**.

```css
/* Desktop first */
body {
    background-color: gray;
}

@media (max-width: 1000px) {
    body {
        background-color: blue;
    }
}

/* Mobile first */
body {
    background-color: blue;
}

@media (min-width: 1000px) {
    body {
        background-color: gray;
    }
}
```

---

## 📱 Common Use Cases

- Hide/show navigation bars on smaller devices
- Adjust font sizes or remove images (`display: none`)
- Change entire layouts (e.g. `grid` to `flex`)
- Prevent overflow with `flex-wrap: wrap`

---

## 🔁 Use with Flexbox

In Flexbox layouts, media queries are especially helpful:

```css
/* Default (Desktop) */
.container {
    display: flex;
    flex-wrap: nowrap;
}

/* On smaller screens, allow wrapping */
@media (max-width: 800px) {
    .container {
        flex-wrap: wrap;
    }
}
```

---

## 📐 Typical Breakpoints

These breakpoints are commonly used (but not mandatory):

| Device Type          | Breakpoint Example           |
|----------------------|------------------------------|
| Large desktops       | `min-width: 1200px`          |
| Standard laptops     | `min-width: 992px`           |
| Tablets (landscape)  | `min-width: 768px`           |
| Tablets/large phones | `min-width: 600px`           |
| Smartphones          | `max-width: 600px`           |

---

## 🧪 Debugging Tips

- Use browser **DevTools** to test different screen sizes.
- Identify when elements break and **wrap styles in a media query** at that breakpoint.

---

## 📝 Summary

| Media Query       | Meaning                                            |
|-------------------|----------------------------------------------------|
| `max-width: Xpx`  | Applies styles **for screens ≤ Xpx**               |
| `min-width: Xpx`  | Applies styles **for screens ≥ Xpx**               |
| Both combined     | Creates a **specific range**                       |

> 💡 **Mobile-first approach**: Start with base styles for small screens, then use `min-width` media queries for larger screens.

---

## ✅ Example: Prevent Shrinking, Enable Wrap on Small Screens

```css
.box {
    flex-shrink: 1;
    min-width: 100px;
}

.container {
    display: flex;
    flex-wrap: nowrap;
}

@media (max-width: 800px) {
    .container {
        flex-wrap: wrap;
    }
}
```

This lets the boxes **shrink** only to a limit, and if more shrinking would break the layout, they **wrap instead** – ensuring responsive design.

# 🎯 Final Flexbox Concepts and Summary

---

## 🔹 `align-self` – Aligning Individual Flex Items

- While `align-items` aligns **all** items along the **cross axis**, `align-self` lets you **override alignment for a single item**.

### ✅ Example:

```css
.container {
    display: flex;
    align-items: flex-start;
}

.box:first-child {
    align-self: flex-end; /* Only this item is moved */
}
```

- Possible values: `flex-start`, `flex-end`, `center`, `stretch`, `baseline`

> ℹ️ `align-self` affects the **cross axis** only.

---

## ⚠️ No `justify-self` in Flexbox

- There’s **no** equivalent to `align-self` for the **main axis**.
- `justify-self` **does not work in Flexbox** – it’s only for **CSS Grid**.

### ✅ Workaround for Main Axis

Use `margin-right: auto` (or `margin-left: auto`) to **push** items to one side.

### 💡 Example: Navigation Bar

```css
.navbar {
    display: flex;
}

.logo {
    margin-right: auto; /* Pushes other items to the right */
}
```

This is perfect for layouts like:

```
[LOGO                          LINK1 LINK2 LINK3]
```

---

## 🧠 Summary: What You Can Do with Flexbox

Flexbox gives you powerful tools to build **one-dimensional** layouts (either row or column):

### 📏 Axes:
- **Main Axis** – controlled by:
  - `flex-direction` (row, column, etc.)
  - `justify-content`
- **Cross Axis** – controlled by:
  - `align-items`
  - `align-self`

---

### 🔁 Wrapping:
- Use `flex-wrap: wrap` to allow items to go to the next line.
- Combine with `align-content` to align multiple lines together.

---

### 📐 Resizing:
- Use `flex-shrink`, `flex-grow`, and `flex-basis` to control how items resize.
- Combine with `min-width` and `max-width` for responsive behavior.

---

### 🎯 Per-Item Control:
- `align-self` for cross axis alignment
- `margin-left: auto` / `margin-right: auto` for main axis tricks

---

### 🧰 Responsive Design:
- Combine Flexbox with **media queries** to build fully responsive UIs.
- Use breakpoints (`min-width`, `max-width`) to switch layouts or wrap items.

---

## 🧱 What Flexbox Can Do

✅ Layouts where content flows in **one direction** (horizontal OR vertical)  
✅ Navigation bars  
✅ Cards, toolbars, buttons  
✅ Complex centering and alignment  
✅ Adaptive/responsive resizing  

🚫 Not optimal for **2D grid layouts** (both rows and columns) → Use **CSS Grid** instead.

---

## 🔜 What’s Next?

Flexbox is powerful, but for more **complex or two-dimensional layouts**, CSS **Grid** is more concise and even easier.

> Let’s now move on to CSS Grid and learn how it simplifies even complex layouts with fewer lines of code.

# 🧱 Introduction to CSS Grid – Part 1

---

## 🔹 Switching from Flexbox to Grid

We're now moving from Flexbox to **CSS Grid**, which is better for **2-dimensional layouts** (rows *and* columns).

### ✅ Setup

Start with the same 9 boxes in HTML, centered with flex:

```html
<div class="box">1</div>
<div class="box">2</div>
...
<div class="box">9</div>
```

Now switch from Flexbox to Grid:

```css
body {
    display: grid;
}
```

---

## 🔹 Defining Grid Columns

CSS Grid **does not automatically define columns and rows** the way you expect.

If you don’t declare anything, the browser defaults to 1 column and as many rows as needed.

### ✅ Manual Column Setup

Use `grid-template-columns`:

```css
body {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* 3 columns */
}
```

- Each value = one column.
- You now have 3 columns, each 200px wide.

---

## 🔹 Optional: Defining Grid Rows

Although rows auto-adjust based on content, you can define them manually:

```css
body {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px 200px;
}
```

> 🎯 This creates a perfect **tic-tac-toe** 3x3 grid layout.

---

## 🔹 Visualizing the Grid

In Firefox Developer Tools:

1. Inspect `<body>`.
2. Click the **Grid Icon** near the element.
3. This toggles a visual overlay with purple lines showing the grid structure.

---

## 🔹 Adding Gaps Between Grid Items

Use the `gap` property just like in Flexbox:

```css
body {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 20px; /* 20px between rows and columns */
}
```

You can also separate horizontal and vertical gaps:

```css
gap: 20px 10px; /* 20px row gap, 10px column gap */
```

Or explicitly:

```css
row-gap: 20px;
column-gap: 10px;
```

---

## 🧠 Key Differences vs Flexbox

| Feature              | Flexbox         | Grid               |
|----------------------|------------------|--------------------|
| Axis system          | One-dimensional  | Two-dimensional    |
| Item placement       | Flow-based       | Cell-based         |
| Use case             | Rows *or* columns | Rows **and** columns |
| Default behavior     | Items flow        | Auto-placed into grid cells |

---

## 🔜 Next Steps

We'll learn how to:

- Place items in specific grid cells
- Use `repeat()` for cleaner syntax
- Use `fr` (fractional units) for responsive columns
- Build advanced layouts with fewer lines

> CSS Grid is incredibly powerful, especially for responsive web design. Let’s build on this foundation next.

# 🧱 CSS Grid – Part 2: `fr` Units & Cell Alignment

---

## 🔹 Fractions Instead of Pixels

Instead of using fixed pixel values like `200px`, Grid allows us to use **fractions (`fr`)** to make layouts **fully responsive**.

### ✅ Example: Equal Column Distribution

```css
body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```

- Each `1fr` means **1 fraction of available space**.
- With 3× `1fr`, all columns share the space equally.
- Columns resize **automatically** when the window resizes.

> `fr` in Grid is conceptually similar to `flex-grow` in Flexbox — but it’s applied to **columns/rows**, not individual items.

---

## Behavior of Boxes

- Boxes are **placed at the top-left corner** of each grid cell by default.
- Modifying **row or column size** changes the **grid cells**, not the boxes themselves.

```css
grid-template-rows: 300px 300px 300px;
```

This increases **row height**, but boxes stay in the top-left unless you explicitly change their alignment.

---

## Aligning Items Inside Cells

Use **`justify-self`** and **`align-self`** on **individual grid items** to control alignment **inside the cell**:

```css
.box {
    justify-self: center; /* horizontal alignment */
    align-self: center;   /* vertical alignment */
}
```

### Available Values:

| Property       | Values               |
|----------------|----------------------|
| `justify-self` | `start`, `end`, `center` |
| `align-self`   | `start`, `end`, `center` |

> Finally, `justify-self` makes sense – it’s valid in **Grid**, but not in Flexbox.

---

## Tip: Keep It Simple

Avoid mixing fixed widths on boxes and trying to center manually with `justify-self` / `align-self`.

Instead:

- Let **boxes fill their cells**.
- Control layout **from the grid container** (via `grid-template-columns`, `grid-template-rows`, `gap`, etc.).
- This ensures **cleaner and more predictable layouts**.

---

## Next Up

In the next section, you'll learn:

- How to use the `repeat()` function to simplify code
- How to **span** items across multiple rows or columns
- How to use **named areas** in Grid for semantic layouts

> CSS Grid makes layout design **explicit** and **powerful**, especially when working with responsive structures.

# CSS Grid – Part 3: Dynamic Content & `grid-auto-rows`

---

## Problem: Unknown Number of Elements

In real-world applications (e.g. search results, product listings), you often **don’t know** in advance:

- How many grid items there will be
- How many rows you'll need

Hardcoding row definitions (`grid-template-rows`) no longer works reliably.

---

## Scenario

You define a **3×3** grid layout for **9 elements**:

```css
body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 300px 300px 300px;
}
```

Then you dynamically add more items (e.g. 2 new boxes from the backend).

Those extra boxes are placed *inconsistently* in a new row with **undefined height**.

---

## Solution: Use `grid-auto-rows`

This property controls the **height of rows that are automatically created** when more content is added than you originally accounted for.

```css
body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 300px;
}
```

### What this does:

- Keeps your layout **consistent**
- Applies **uniform height** to new rows
- Automatically adds rows **as needed**

> Because of this, you often **don’t need `grid-template-rows`** at all. Just use `grid-auto-rows` and let the grid grow naturally.

---

## Dynamic Scaling

You can even combine it with additional columns dynamically:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

And Grid will **automatically place** items into appropriate rows and columns, using the `grid-auto-rows` height consistently.

---

## Use Case

This is **essential** for:

- Infinite scroll layouts
- Search result pages
- E-commerce product lists
- Dashboards with dynamic widgets

Whenever the content **comes from a backend**, this strategy makes your layout **predictable and flexible**.

---

## Summary

| Feature             | Purpose                                      |
|---------------------|----------------------------------------------|
| `grid-auto-rows`    | Defines height for dynamically created rows  |
| Dynamic item count  | Supported without needing to hardcode layout |
| Consistent spacing  | Ensures visual coherence even with overflow  |

---

# CSS Grid – Part 4: `grid-auto-flow` & Auto Columns

---

## `grid-auto-flow`: Controlling Element Insertion

This property determines **how new items are inserted** into the grid when not explicitly placed.

```css
grid-auto-flow: row;    /* default */
grid-auto-flow: column;
```

---

### Default Behavior – `row`

When `grid-auto-flow: row` (default):

- New elements are inserted **row by row**
- This is ideal for **vertical layouts**

---

### Horizontal Layout – `column`

When `grid-auto-flow: column`:

- New elements are inserted **column by column**
- Automatically creates **new columns**

You must then define:

```css
grid-auto-columns: 300px;
```

This sets the width of automatically created columns.

> Useful for **horizontal scrolling layouts** like **Netflix-style** carousels.

---

## Summary Table

| Property              | Description                                   |
|-----------------------|-----------------------------------------------|
| `grid-auto-flow`      | Controls item placement direction (row/column)|
| `grid-auto-rows`      | Height of new rows                            |
| `grid-auto-columns`   | Width of new columns                          |

---

## When to Use What?

| Scenario                              | Use This                                     |
|---------------------------------------|----------------------------------------------|
| Known number of elements            | `grid-template-columns` + `grid-template-rows` |
| Unknown number of items (dynamic)   | `grid-auto-rows` / `grid-auto-columns`        |
| Horizontal scroll (e.g. Netflix)    | `grid-auto-flow: column` + `grid-auto-columns`|
| Mixed strategy                      | Combine `grid-template-*` with `grid-auto-*`  |

---

## Final Thoughts

You can freely **combine**:

- Manual definitions (`grid-template-columns/rows`)
- With automatic handling (`grid-auto-columns/rows`)
- Controlled direction (`grid-auto-flow`)

This allows you to build **flexible, responsive** and **dynamic** grid layouts.

---

## Next Topic

Coming up: `repeat()`, `minmax()`, and **auto-fit / auto-fill** for **supercharged** responsive grid behavior!

# CSS Grid – Part 5: Complex Layouts & Bento Grids

---

## Stretching Elements Across Rows and Columns

### Problem

To build more creative and non-linear grid layouts (e.g. **Bento Grids**), we need to make **grid items span multiple columns or rows**.

These designs are ideal for:

- Showcasing products
- Creating dashboards or galleries
- Avoiding rigid, uniform layouts

But they're **not great** for presenting dense or important data.

---

## Example: Bento Grid (4 Elements)

### Step 1: Grid Structure

We want this layout:

```
+-----------+-----------+-----------+
|     Box 1 (spans 2 cols)          |
+-----------+-----------+-----------+
|  Box 2    |  Box 3    |  Box 4    |
+-----------+-----------+-----------+
```

### Step 2: HTML Elements

We have **4 grid items** in HTML.

### Step 3: Grid Dimensions

- A 2x2 grid won't work.
- We need **3 columns** and **2 rows** because some items **span two columns**.

### CSS:

```css
body {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 250px 250px;
  gap: 10px;
}
```

---

## Spanning Columns and Rows

### Grid Lines

- Grid with 3 columns has **4 vertical lines**.
- Use `grid-column-start` and `grid-column-end` to **span elements** across columns.

### Example – Stretch Element Across 2 Columns:

```css
#box1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

Shorthand:

```css
#box1 {
  grid-column: 1 / 3;
}
```

### Example – Bento Layout Box 4:

```css
#box4 {
  grid-column: 2 / 4;
}
```

### Row Spanning:

You can also use:

```css
#box1 {
  grid-row: 1 / 3;
}
```

---

## Summary: Useful Properties

| Property               | Purpose                                        |
|------------------------|------------------------------------------------|
| `grid-column`          | Shorthand for `grid-column-start / end`       |
| `grid-row`             | Shorthand for `grid-row-start / end`          |
| `grid-template-columns`| Defines number and size of columns            |
| `grid-template-rows`   | Defines number and size of rows               |
| `gap`                  | Space between rows and columns                |

---

## Next Step

Next lesson covers `grid-template-areas`, a powerful way to visually organize and **label grid sections** using named areas.

# CSS Grid – Part 6: Grid Template Areas

---

## Why Use `grid-template-areas`

When creating complex layouts with many items, assigning:
- `grid-column-start`
- `grid-column-end`
- `grid-row-start`
- `grid-row-end`

…can become **tedious** and **confusing**.

✅ Instead, use `grid-template-areas`:
- Makes layout **much easier to read**
- You define the layout visually using **named areas**
- Ideal for **large, complex** grids

---

## Example Goal: Complex Grid with 9 Boxes

### Step 1: Analyze Layout

We want a grid like this:

```
+--------+--------+--------+--------+
| box-1  | box-2  | box-3  | box-4  |
| box-1  | box-5  | box-5  | box-4  |
| box-6  | box-5  | box-5  | box-7  |
| box-8  | box-8  | box-9  | box-7  |
+--------+--------+--------+--------+
```

This is a **4x4 grid** (4 columns, 4 rows).

---

## Step 2: HTML Setup

```html
<div class="grid-container">
  <div style="grid-area: box-1"></div>
  <div style="grid-area: box-2"></div>
  <div style="grid-area: box-3"></div>
  <div style="grid-area: box-4"></div>
  <div style="grid-area: box-5"></div>
  <div style="grid-area: box-6"></div>
  <div style="grid-area: box-7"></div>
  <div style="grid-area: box-8"></div>
  <div style="grid-area: box-9"></div>
</div>
```

---

## Step 3: CSS Grid Setup

```css
.grid-container {
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-template-rows: 250px 250px 250px 250px;
  gap: 10px;
  grid-template-areas:
    "box-1 box-2 box-3 box-4"
    "box-1 box-5 box-5 box-4"
    "box-6 box-5 box-5 box-7"
    "box-8 box-8 box-9 box-7";
}
```

---

## Explanation

- Each **grid item** gets a name using `grid-area`
- These names are used in `grid-template-areas`
- Each **row** in the grid is a string
- Items that should **span multiple cells** must be **repeated** across those cells
  - e.g., `box-5` appears 4×
  - `box-1` spans two rows

### Visual Structure of Grid:

```css
grid-template-areas:
  "box-1 box-2 box-3 box-4"
  "box-1 box-5 box-5 box-4"
  "box-6 box-5 box-5 box-7"
  "box-8 box-8 box-9 box-7";
```

> By formatting the template areas vertically, you can **"see"** the grid shape directly in the CSS.

---

## Advantages

- Fast and readable
- Scales well with large or irregular layouts
- Easy to **visualize** the structure directly in code
- Combine with `gap` for clean spacing

---

## Next Topic

We'll look at **grid item placement using line numbers**, **auto-placement**, and **responsive grids using `auto-fit` and `minmax()`**.

# CSS Grid – Part 7: Responsive Grids with `auto-fit` and `minmax()`

---

## The Problem

- Fixed column values (e.g., `300px`) don't adapt to screen size
- On small screens, grid content can **overflow**
- Flexbox has `flex-wrap`, but it **doesn’t handle sizing well**
  - Uneven rows
  - Some elements get too large

✅ CSS Grid offers **better layout control** for responsive designs.

---

## Goals

- Elements should **wrap** to the next line
- Columns should **resize** dynamically
- Grid should **center** when there's extra space

---

## Step-by-Step Implementation

### 1. Create Grid Container

```html
<div class="grid-container">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <div class="box">Item 3</div>
  <div class="box">Item 4</div>
  <!-- add more as needed -->
</div>
```

### 2. Basic Styles

```css
.grid-container {
  display: grid;
  gap: 20px;
  justify-content: center;
}
.box {
  padding: 20px;
  background-color: lightgray;
  border-radius: 8px;
}
```

---

## Problem with Fixed Column Count

```css
.grid-container {
  grid-template-columns: repeat(4, 300px);
}
```

- ❌ Not responsive
- ❌ Columns overflow on small screens

---

## Solution: `auto-fit` + `minmax()`

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### Explanation:

- `repeat(auto-fit, ...)`:
  - Automatically determines **how many columns** can fit
- `minmax(300px, 1fr)`:
  - Column must be **at least 300px**
  - Can grow up to **1 fraction** of available space

✅ This ensures:
- Columns **wrap** when space is tight
- Columns **expand** when space is available

---

## Centering Grid Content

```css
.grid-container {
  justify-content: center;
}
```

- Aligns columns **horizontally** inside the container
- Use `flex-start`, `flex-end`, or `center`

---

## Key Benefits

- **Fully responsive**
- No media queries required
- Layout adapts to:
  - Different screen widths
  - Varying number of items
- Items retain consistent size and alignment

---

## Summary

| Property                     | Description                                                 |
|-----------------------------|-------------------------------------------------------------|
| `display: grid`             | Enables grid layout                                         |
| `grid-template-columns`     | Defines column count and size                               |
| `repeat(auto-fit, ...)`     | Automatically creates columns based on available space      |
| `minmax(min, max)`          | Allows columns to resize between a minimum and maximum size |
| `justify-content: center`   | Centers the entire grid within its container                |

---

## When to Use

- Any time you need a **flexible**, **wrapping** layout
- Ideal for cards, galleries, product lists, etc.
- Better than `flex-wrap` when items need **equal width** and **grid-like alignment**

---

## Next: Grid Item Placement, Layering, and Nested Grids

# 🛍️ CSS-Only Product Filter – No JavaScript Required

## ✅ Features

- Filter products by **brand**, **price**, and **color**
- Fully functional **dropdowns** (`<select>`) control visibility
- Pure **HTML + CSS**, no JavaScript
- Uses advanced CSS selectors:  
  - `:has()`, `:checked`, `:not()`, `~`, attribute selectors

---

## 🧱 1. HTML Structure

### Filters

```html
<div class="filters">
  <label>Color:
    <select>
      <option value="">All</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="blue">Blue</option>
    </select>
  </label>

  <label>Brand:
    <select>
      <option value="">All</option>
      <option value="nike">Nike</option>
      <option value="adidas">Adidas</option>
    </select>
  </label>

  <label>Price:
    <select>
      <option value="">All</option>
      <option value="cheap">Cheap</option>
      <option value="expensive">Expensive</option>
    </select>
  </label>
</div>
```

### Products

```html
<div class="products">
  <div class="product black nike cheap">Nike Air - Black</div>
  <div class="product white adidas cheap">Adidas Boost - White</div>
  <div class="product blue nike expensive">Nike Zoom - Blue</div>
  <div class="product black adidas expensive">Adidas Pro - Black</div>
  <!-- Add more products with matching class combinations -->
</div>
```

---

## 🎨 2. CSS Selectors Magic

### Default Visibility

```css
.product {
  display: block;
}
```

### Hide All Except Matching Color

```css
.filters:has(select option[value="black"]:checked) ~ .products .product:not(.black),
.filters:has(select option[value="white"]:checked) ~ .products .product:not(.white),
.filters:has(select option[value="blue"]:checked) ~ .products .product:not(.blue) {
  display: none;
}
```

### Hide All Except Matching Brand

```css
.filters:has(select option[value="nike"]:checked) ~ .products .product:not(.nike),
.filters:has(select option[value="adidas"]:checked) ~ .products .product:not(.adidas) {
  display: none;
}
```

### Hide All Except Matching Price

```css
.filters:has(select option[value="cheap"]:checked) ~ .products .product:not(.cheap),
.filters:has(select option[value="expensive"]:checked) ~ .products .product:not(.expensive) {
  display: none;
}
```

---

## 🔍 Explanation

| Selector Type              | Purpose                                                                 |
|---------------------------|-------------------------------------------------------------------------|
| `:has()`                   | Allows styling based on child/descendant state                         |
| `option[value="X"]:checked`| Selects active filter value                                             |
| `~` (sibling combinator)   | Connects filters to product list                                        |
| `:not(.class)`             | Inverts logic – hide items not matching selected filter                 |
| `display: none`            | Hides non-matching products                                             |

---

## 🧠 Why It Works

This selector:

```css
.filters:has(select option[value="black"]:checked) ~ .products .product:not(.black)
```

means:

> “If the black option is selected in any dropdown inside `.filters`, then in the sibling `.products`, hide all `.product` elements that do NOT have `.black` class.”

Repeat the same logic for other options like `white`, `nike`, `cheap`, etc.

---

## ⚠️ Caveats

- Works only in **modern browsers** (e.g. Chrome, Edge, Safari 15.4+, Firefox from v121 with `:has()` support)
- Hard to scale (for many options, CSS becomes bloated)
- Not dynamic — requires predefined class combinations
- Still an amazing trick for simple filters or teaching purposes!

---

## 📌 Use Cases

- No-JS demos or prototypes
- Static sites
- Teaching CSS selectors
- Personal projects or CSS challenges

---

## 📎 Bonus: Full Example

```html
<!-- Basic example for filters + products -->
<div class="filters">
  <label>
    <select>
      <option value="">All</option>
      <option value="black">Black</option>
    </select>
  </label>
</div>

<div class="products">
  <div class="product black">Black Shoe</div>
  <div class="product white">White Shoe</div>
</div>
```

```css
.filters:has(select option[value="black"]:checked) ~ .products .product:not(.black) {
  display: none;
}
```

---

# Day 7 – Final Project: Responsive Portfolio Website

Welcome to **Day 7** of your **7-Day CSS Bootcamp**.  
Today is the **culmination** of all your CSS knowledge.

You’ve learned:

- ✅ CSS fundamentals and advanced concepts  
- ✅ Responsive web design  
- ✅ Flexbox and Grid layouts  
- ✅ CSS custom properties  
- ✅ Real-world project structure

---

## Final Challenge: Build a Responsive Portfolio Website

> **Goal**: Apply everything you've learned to build a complete, responsive, and modern portfolio site.

### Why a Portfolio Site?
- It’s **practical** and **versatile**
- Covers all front-end principles
- Perfect for your **job applications**
- You’ll **deploy** it to a custom domain

---

## Two Learning Options

### 🔹 Option 1 – Build It Yourself
Try to recreate the website from scratch using only your skills.  
You’ll get a **preview link** of the final project in the next lesson.

- You'll write your own code
- May end up with different solutions (which is totally fine!)
- As long as it's **responsive** and **looks good**, you did great

### 🔹 Option 2 – Follow Along
If you’re not ready to code it solo yet:

- Watch the step-by-step video lessons
- Code along and learn best practices
- Ask questions if needed – support is available!

---

## What You'll Practice

- Creating a **responsive layout** with **Flexbox** and **Grid**
- Using **CSS variables** for a scalable color palette
- Designing for **mobile-first**
- Styling components like:
  - Hero sections
  - Project cards
  - Contact forms
- Preparing for **deployment**

---

## Bonus Lesson: Deployment
At the end of this section, you’ll learn:

- How to **host** your site online
- How to connect a **custom domain**
- Make your portfolio **accessible to the world**

---

## Tips

- If you get stuck, **go back** to earlier lessons
- Use **developer tools** to inspect and debug
- Focus on **clean code** and **responsiveness**
- Don’t be afraid of trying your own solutions

---

## Ready to Launch?

Whether you build it solo or follow the guide, this project will **solidify your CSS knowledge** and give you something **real to show off**.

Good luck and…  
**🎉 Happy Coding!**

# 🧱 Day 7 – Step 1: Building the Header of the Portfolio

## 📁 File Structure Setup
- Create a project folder
- Inside it, create:
  - `index.html`
  - `style.css`
  - `img/your-photo.jpg` (or similar)

---

## 📄 index.html

Use `! + Tab` to insert HTML boilerplate (if using Emmet-enabled editor like VS Code).

### ✅ Header Section HTML
```html
<header>
  <img src="img/your-photo.jpg" alt="Your photo">
  <div class="container">
    <h1>Your Name</h1>
    <h2>Your Job Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <br />
    <a href="#" class="read-more">Read more</a>
  </div>
</header>
```

---

## 🎨 style.css

### ✅ Link CSS
Add this to the `<head>` of your HTML:
```html
<link rel="stylesheet" href="style.css">
```

---

## 🎨 CSS Setup

### 1. CSS Variables (Color Palette)
```css
:root {
  --accent-color: #ff4c60;
  --primary-color: #1f1f1f;
  --secondary-color: #444;
  --text-color: #fff;
  --text-color-secondary: #aaa;
}
```

### 2. CSS Reset and Typography
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Segoe UI", sans-serif;
  font-size: 14pt;
  color: var(--text-color);
}

body {
  min-height: 100vh;
  background-color: var(--primary-color);
}
```

---

## 🧩 Header Styling

```css
header {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
```

### 🧩 Container Styling
```css
.container {
  width: 850px;
  max-width: 100%;
}
```

### 🧩 Image Styling
```css
header img {
  height: 70vh;
}
```

### 🧩 H1 Styling
```css
header h1 {
  margin-top: 200px;
  font-size: 4rem; /* 4 * 14pt = 56pt */
}
```

### 🧩 H2 Styling
```css
header h2 {
  margin: 20px 0;
  text-transform: uppercase;
  font-weight: 300;
}
```

### 🧩 Paragraph Styling
```css
header p {
  color: var(--text-color-secondary);
}
```

---

## 🔗 Read More Button Styling

### 📌 Base Styles
```css
.read-more {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 1000px;
  padding: 0.5em 1.25em;
  text-decoration: none;
  margin-bottom: 80px;
  transition: background-color 200ms ease;
  cursor: pointer;
}
```

### 📌 Hover Effect
```css
.read-more:hover {
  background-color: var(--secondary-color);
}
```

---

## ✅ Final Result
- Responsive header with:
  - Profile image
  - Name and job title
  - Short bio
  - “Read more” button with hover animation

You’ve successfully completed the first section of your portfolio site!  
In the next step, you’ll move on to building the **projects section**.

---

🟢 *Optional*: Replace `Lorem ipsum` and `Your Name` with your real info.

# 🧱 Day 7 – Step 2: Building the Skill Section

## 📄 index.html – Add Skills Section
Insert this **below** the `<header>` tag:

```html
<section id="skill-section">
  <h2>My Skill Set</h2>
  <div class="wrapper">
    
    <!-- Frontend Skills -->
    <div class="skill-container">
      <h3>Frontend</h3>
      <ul>
        <li>
          HTML
          <progress max="100" value="90"></progress>
        </li>
        <li>
          CSS
          <progress max="100" value="85"></progress>
        </li>
        <li>
          JavaScript
          <progress max="100" value="80"></progress>
        </li>
        <li>
          React
          <progress max="100" value="75"></progress>
        </li>
      </ul>
    </div>

    <!-- Backend Skills -->
    <div class="skill-container">
      <h3>Backend</h3>
      <ul>
        <li>
          Node.js
          <progress max="100" value="70"></progress>
        </li>
        <li>
          Express
          <progress max="100" value="65"></progress>
        </li>
        <li>
          MongoDB
          <progress max="100" value="60"></progress>
        </li>
        <li>
          SQL
          <progress max="100" value="75"></progress>
        </li>
      </ul>
    </div>

  </div>
</section>
```

---

## 🎨 style.css – Styling the Skill Section

### 🧩 Section Styling
```css
#skill-section {
  padding: 60px 20px;
  background-color: var(--secondary-color);
}
```

### 🧩 Section Heading
```css
#skill-section h2 {
  font-size: 3rem;
  text-align: center;
}
```

### 🧩 Wrapper Container
```css
.wrapper {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}
```

### 🧩 Skill Container
```css
.skill-container {
  width: 400px;
  max-width: 100%;
  border: 10px solid var(--primary-color);
  border-top: none;
}
```

### 🧩 Skill Category Heading (h3)
```css
.skill-container h3 {
  background-color: var(--primary-color);
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
}
```

### 🧩 Unordered List (Skills)
```css
.skill-container ul {
  margin: 10px 0;
  list-style: none;
}
```

### 🧩 Individual Skill List Items
```css
.skill-container li {
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
```

### 🧩 Progress Bars (Self-assessment)
```css
.skill-container progress {
  accent-color: var(--accent-color);
}
```

📝 *Note*: The `accent-color` property may not be fully supported in all browsers.

---

## ✅ Final Result
- Two skill containers: **Frontend** and **Backend**
- Each skill has a self-assessment displayed with a **progress bar**
- Section is **fully responsive** thanks to `flex-wrap: wrap` and `max-width: 100%`
- Uses **semantic HTML5** (`<section>`, `<h2>`, `<h3>`, `<ul>`, `<li>`, `<progress>`)

---

✅ Done! Now your portfolio showcases your skills in a visual and professional way.  
Next step: Let’s build the **projects section** to show what you’ve actually built.

# 🧱 Day 7 – Step 3: Building the Project Section

## 📄 index.html – Add Projects Section
Insert this **below** the `#skill-section`:

```html
<section id="project-section">
  <h2>My Top Three Projects</h2>

  <details class="project">
    <summary>
      <span class="number">1</span>
      <h3>To-Do List App</h3>
    </summary>
    <div class="text-container">
      <p>A simple and elegant task management app built using HTML, CSS, and JavaScript. Allows users to add, delete, and complete tasks with a smooth UX.</p>
      <a href="https://github.com/yourusername/todo-app" target="_blank">Visit project</a>
    </div>
  </details>

  <details class="project">
    <summary>
      <span class="number">2</span>
      <h3>Weather Dashboard</h3>
    </summary>
    <div class="text-container">
      <p>This dashboard fetches weather data from an API and displays it using dynamic styling. Fully responsive and great for travel planning.</p>
      <a href="https://github.com/yourusername/weather-dashboard" target="_blank">Visit project</a>
    </div>
  </details>

  <details class="project">
    <summary>
      <span class="number">3</span>
      <h3>Portfolio Website</h3>
    </summary>
    <div class="text-container">
      <p>A responsive and accessible personal portfolio website with multiple sections, showcasing frontend and backend skills.</p>
      <a href="https://yourportfolio.com" target="_blank">Visit project</a>
    </div>
  </details>
</section>
```

---

## 🎨 style.css – Styling the Project Section

### 🧩 Section Styling
```css
#project-section {
  padding: 100px 20px;
}
```

### 🧩 Heading
```css
#project-section h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
}
```

### 🧩 Project Containers
```css
.project {
  margin: 20px auto;
  width: 1000px;
  max-width: 100%;
  background-color: var(--secondary-color);
  border-radius: 6px;
}
```

### 🧩 Summary (Header of Expandable)
```css
.project summary {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  cursor: pointer;
}
```

### 🧩 Number Badge
```css
.project .number {
  min-width: 50px;
  min-height: 50px;
  border-radius: 50px;
  background-color: var(--accent-color);
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 🧩 Project Heading (h3)
```css
.project h3 {
  font-size: 1.5rem;
}
```

### 🧩 Text Container (Expandable Content)
```css
.project .text-container {
  padding: 0 30px 30px 30px;
}
```

### 🧩 Project Description (Paragraph)
```css
.project p {
  margin-bottom: 20px;
  color: var(--secondary-text-color);
}
```

### 🧩 Project Link
```css
.project a {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  text-decoration: none;
  padding: 0.5em 1.25em;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 1000px;
  transition: background-color 200ms ease;
}
```

### 🧩 Hover Effect for Link
```css
.project a:hover {
  background-color: var(--primary-color);
  cursor: pointer;
}
```

---

## ✅ Final Result
- Three **expandable containers** using native HTML `<details>` and `<summary>`
- Responsive layout with max-width and padding
- Styled number indicators and clickable links
- Clean hover effects with transitions

---

✅ Done! Now you have a professional, expandable **Projects** section.  
Ready to move on to the **About** or **Contact** section?
