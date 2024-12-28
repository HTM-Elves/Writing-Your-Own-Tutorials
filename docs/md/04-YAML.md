<!-- YAML -->
<section
id="yaml"
aria-labelledby="yaml"
data-item="4. The YAML Block"
>
<h2><a href="#yaml">The YAML Block</a></h2>

Pandoc can be used to convert documents between any of about 60 different file formats. Pandoc not just useful for converting from Markdown to HTML. To help with conversion, Pandoc allows you to include [YAML meta-data blocks](https://pandoc.org/chunkedhtml-demo/8.10-metadata-blocks.html#extension-yaml_metadata_block) inside any of the source documents to be converted.

When you run `npm run new`, the HTM-Elves generate a YAML block at the beginning of the file `doc/md/99-Intro.md`, using the following logic:

```yaml-#
---
title: <tutorial name>
subtitle: (set subtitle in 99-Intro.md, if required)
month: <current month and year>
organization: <name of parent folder>
repo: <tutorial name>
---
```

A YAML block defines a variable name (like `repo`) and a value for that variable (like `The-Basics`). 

The file at `MyTutorials.github.io/public/template.html`, contains a template that is used to wrap your converted Markdown files in. It starts like this:


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

Pandoc will replace `$body$` with the result of the conversion of all the Markdown files. For the other entries in the `$double_dollar$` format, Pandoc will replace the entry with the value for that entry defined in the YAML block. So, for example, ...
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
You should **leave the values for `organization` and `repo` exactly as they are**. If you change these, then the links to the GitHub repo for your tutorial (which you haven't created yet) will break.

You are free to change the values for `title`, `subtitle` and `month`, as you wish.

</details>

<details class="pivot" open>
<summary>A single YAML block</summary>
Pandoc allows you to have multiple YAML blocks, but in my experience it is safest to use only one, and to place it in the last Markdown file to be treated. `docs/md/99-Intro.md` is thus an excellent place to store the variables that will be used by the `template.html` file.

In the next section, you'll see how to create a different "page" for each Markdown file.

</details>
</section>