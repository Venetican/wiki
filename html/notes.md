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
