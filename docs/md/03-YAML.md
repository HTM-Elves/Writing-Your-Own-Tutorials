<section
id="yaml"
aria-labelledby="yaml"
data-item="The YAML Block"
>
<h2><a href="#yaml">The YAML Block</a></h2>

Pandoc can be used to convert documents between any of about 60 different file formats. Pandoc is not just useful for converting from Markdown to HTML. To help with conversion, Pandoc allows you to include [YAML meta-data blocks](https://pandoc.org/chunkedhtml-demo/8.10-metadata-blocks.html#extension-yaml_metadata_block) inside any of the source documents to be converted.

When you run `npm run new`, HTM-Elves generates a YAML block at the beginning of the file `doc/md/99-Intro.md`, using the following logic:

```yaml-#
<b>---
title: Using-CSS-Counters </b><i># tutorialrepository name</i><b>
subtitle: (set subtitle in 99-Intro.md, if required)
month: December 2024      </b><i># current month, year</i><b>
organization: MyTutorials </b><i># GitHub Organization name</i><b>
repo: Using-CSS-Counters  </b><i># tutorial repository name</i><b>
---</b>
```

Each line in a YAML block defines a variable name (like `repo`) and a value for that variable (like `Using-CSS-Counters`), separated by a colon `:`.

## An HTML template

When Pandoc converts your Markdown files to HTML, it does not automatically add any HTML boilerplate, such as `<!DOCTYPE html>`, a `<head>` element, and a `<body>` element. However, if you tell it where to find a _template_ file, it will use that to wrap the converted Markdown.

The `"pandoc"` script in the `package.json` file tells Pandoc to use the file at `MyTutorials.github.io/public/template.html`. (There's a symbolic link called `public` in the tutorial directory that points to the `MyTutorials.github.io/public/` folder, so you can move your parent folder around to a different place without breaking anything.)

```json-w
<i>{
  "scripts": {
    "pandoc": "pandoc -o docs/index.html --filter public/filter.js </i><b>--template=public/template.html</b><i> docs/md/*.md",</i>
```
```json-s
// line skipped //
```
```json-w
  <i>}
}</i>
```

## The `template.html` file

The file at `MyTutorials.github.io/public/template.html`, starts like this:

```html
<i><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
>
<title></i><b>$title$</b><i></title>
<link rel="stylesheet" href="../public/styles.css">
<link rel="stylesheet" href="../public/media-queries.css">
<link rel="stylesheet" href="../public/prism/prism.css">

<script defer src="../public/prism/prism.js"></script>
<script defer src="../public/storage.js"></script>
<script defer src="../public/script.js"></script>
</head>

<body>
  <main id="main">
    <header>
      <h1></i><b>$title$</b><i></h1>
      <h3></i><b>$subtitle$</b><i></h3>
      <h4></i><b>$month$</b><i></h4>
    </header>

</i><b>$body$</b>
```
```html-s
<!-- Many lines skipped -->
```

Notice the entries for `$title$`, `$subtitle$`, `$month$` and `$body$`. Near the end of the file you will see more entries for `$organization$` and `$repo$`. 

```html-#105
<i><div id="repo">
  <a href="https://github.com/</i><b>$organization$/$repo$</b><i>/issues/new">
    Feedback
  </a>

  <a
    class="repo"
    href="https://github.com/</i><b>$organization$/$repo$</b><i>"
  >
    <img src="../public/svg/github.svg" alt="github logo">
    <span>GitHub repository</span>
  </a>
</div></i>
```

Pandoc will replace the `$body$` entry with the result of the conversion of all the Markdown files. For the other entries in the `$double_dollar$` format, Pandoc will replace the entry with the value for that entry defined in the YAML block. So, for example, ...
```html-#112
 <i>href="https://github.com/</i><b>$organization$/$repo$</b>"
```
... in `MyTutorials.github.io/public/template.html` will become...
```html-#
 <i>href="https://github.com/</i><b>MyTutorials/The-Basics</b>"
 ```
 ... in the output in `doc/index.html`.

<details class="note" open>
<summary>`organization` and `repo`</summary>
You should **leave the values for `organization` and `repo` exactly as they are**. If you change these, then the links to the GitHub repo for your tutorial will break.

You are free to change the values for `title`, `subtitle` and `month`, as you wish. These determine what appears in the `<header>` element.

</details>

<details class="warn" open>
<summary>YAML, `---` and horizontal rules</summary>
A YAML block starts and ends with three dashes: `---`. This conflicts with standard Markdown, where three or more dashes (preceded and followed by blank lines) indicate a _horizontal rule_ (`<hr>` element), which looks like this:

***

If Pandoc does not find YAML-formatted data after a line with three dashes, **it will exit with an error**. In other words, in a Markdown document that will be treated by Pandoc, **you cannot use three dashes to create a horizontal rule**. Three dashes should be reserved for indicating the start and end of a YAML block.

___

Fortunately, there are [other ways to create a horizontal rule](https://www.markdownguide.org/basic-syntax/#horizontal-rules) in Markdown. You can use three or more asterisks `***` or three or more underlines `___`, as I have done above.

</details>

<details class="pivot" open>
<summary>A single YAML block</summary>
Pandoc allows you to have multiple YAML blocks, but in my experience it is safest to use only one, and to place it in the last Markdown file to be treated. `docs/md/99-Intro.md` is thus an excellent place to store the variables that will be used by the `template.html` file.

So, now that the YAML block has been clarified, you can start writing your tutorial. At least, I will start writing mine, and you can copy or write your own text as you choose.

</details>
</section>