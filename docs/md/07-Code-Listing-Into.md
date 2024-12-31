<section
  id="code-listings"
  aria-labelledby="code-listings"
  data-item="Intro to Code Listings"
>
  <h2><a href="#code-listings">Introduction to Code Listings</a></h2>

The next block in [the completed mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/){target="htm-elves"} is an HTML code listing with syntax highlighting:

```html-#
<ol>
  <li><a href="#beginning">Beginning</a></li>
  <li><a href="#middle">Middle</a></li>
  <li><a href="#end">End</a></li>
</ol>
```

Code listing with syntax highlighting is handled by [Prism](https://prismjs.com/). Prism is loaded by the `MyTutorials.github.io/public/template.html` file:

```html
<i><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
>
<title>$title$</title>
<link rel="stylesheet" href="../public/styles.css">
<link rel="stylesheet" href="../public/media-queries.css">
</i><b><link rel="stylesheet" href="../public/prism/prism.css">

<script defer src="../public/prism/prism.js"></script></b><i>
<script defer src="../public/storage.js"></script>
<script defer src="../public/script.js"></script>
</head></i>
```


Prism consists of a CSS file and a JavaScript file. The JavaScript code scans the `index.html` created by Pandoc for lines wrapped in a block like this:

```html-w
<pre class="language-xxx"><code class="language-xxx">...</code></pre>
```

For example, the numbered code listing above appears something like this in the `index.html` file

```html-#498
<pre class="language-html line-numbers">
  <code class="language-html line-numbers">
    &lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
```

```html-s
<!-- 7 lines skipped -->
```
```html-#509
    &lt;link rel="stylesheet" href="../public/prism/prism.css"&gt;

    &lt;script defer src="../public/prism/prism.js"&gt;&lt;/script&gt;
```
```html-s
<!-- 2 lines skipped -->
```
```html-#514
</code></pre>
```

When the `prism.js` code finds a block like this, it restructures it, creating a `<span>` for each chunk that needs to be in a different color, giving each `<span>` the appropriate class. The CSS in `prism.css` then applies the appropriate colors according to the class.

This is all done automatically for you.

All you have to do is tell Pandoc (and thus Prism) what language the code listing is in, so that it can provide the correct syntax highlighting.

Markdown allows you to create language-specific code blocks using triple backticks on the preceding and following line, like this:

````md-w
```html
<!DOCTYPE html>
```
````

Here's what that would look like when treated out of the box by Pandoc and Prism:

```html
<!DOCTYPE html>
```

## Try it yourself

To test this for yourself, add an HTML code block, to your `99-The-Problem.md` file, as shown in the code listing below:

````md-w
<i>---
title: Using CSS Counters
subtitle: Numbering elements not in an ordered list
month: December 2024
organization: MyTutorials
repo: Using-CSS-Counters
---
<!-- The Problem -->
<section
  id="the-problem"
  aria-labelledby="the-problem"
  data-item="The Problem"
>
  <h2><a href="#the-problem">The Problem</a></h2>
  
  In this tutorial, I will show you how to use [CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) to number the link elements in a navigation menu.

  Imagine that you have an `<ol>` element with the following structure:
</i>
<b>```html
<ol>
  <li><a href="#beginning">Beginning</a></li>
  <li><a href="#middle">Middle</a></li>
  <li><a href="#end">End</a></li>
</ol>
```</b><i>

</section></i>
````

Here's the result that you should see in your browser:

![Default HTML syntax highlighting with line numbers](images/SyntaxHighlighting.webp)

Notice how the code listing appears with line numbers. That's neat, but it might not be what you want.

<details class="pivot" open>
<summary>Prism in default mode</summary>
By default, Prism will add line numbers to any code listing. The syntax highlighting will have a uniform brightness. However, as you have seen from the code listings in this tutorial, there are more advanced tricks that you can use to draw your reader's attention to particular sections of the code listing.

The next section describes these tricks.

</details>
</section>