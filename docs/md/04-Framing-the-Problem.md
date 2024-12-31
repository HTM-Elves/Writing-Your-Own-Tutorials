<section
  id="framing-the-problem"
  aria-labelledby="framing-the-problem"
  data-item="Framing The Problem"
>
  <h2><a href="#framing-the-problem">Framing The Problem</a></h2>

To start with, I don't like the boilerplate that the HTM-Elves have given me for the default `.md` page. This is what I have, but it's not what I want:
  
```md-w
---
title: Using-CSS-Counters
subtitle: (set subtitle in 99-Intro.md, if required)
month: December 2024
organization: MyTutorials
repo: Using-CSS-Counters
---
<section
  id="intro"
  aria-labelledby="intro"
  data-item="Introduction"
>
  <h2><a href="#intro">Introduction</a></h2>

To create your own content, edit the file at `docs/md/99-Intro.md` and add more `.md` files in the `docs/md/` folder.

See [Writing Your Own Tutorials](https://htm-elves.github.io/Writing-Your-Own-Tutorials/) for tips and shortcuts.

</section>
```

## Renaming the default `.md` file

I'm going to write a very short tutorial, so an _Introduction_ is overkill. I prefer to title my first section "The Problem". For consistency, I rename the file from `99-Intro.md` to `99-The-Problem.md`.

## Fixing the title and subtitle

Next, I remove the dashes from the title in the YAML section, and give my tutorial a better subtitle.

```md
---
<i>title: </i><b>Using CSS Counters</b><i>
subtitle: </i><b>Numbering elements not in an ordered list</b><i>
month: December 2024
organization: MyTutorials
repo: Using-CSS-Counters
---</i>
```

## Generating a `<section>` block with a Markdown snippets

As you saw in [the Getting Started tutorial](https://htm-elves.github.io/Getting-Started/#testing-snippets), you can use a Markdown snippet to generate a `<section>` block for an `.md` file with just a few keystrokes.

I select all the text after the YAML block and delete it. In its place, I: 

1. Type `sss`, the _prefix_ for [a Markdown snippet that you should already have installed](https://htm-elves.github.io/Getting-Started/#markdown-snippets).
2. Press the Tab key.

The following raw snippet is added to my file.

```md
<i>---
title: Using CSS Counters
subtitle: Numbering elements not in an ordered list
month: December 2024
organization: MyTutorials
repo: Using-CSS-sel
---</i>
<!-- <u>The Problem</u> -->
<section
  id="<u>The Problem</u>"
  aria-labelledby="<u>The Problem</u>"
  data-item="<u>The Problem</u>"
>
  <h2><a href="#<u>The Problem</u>"><u>The Problem</u></a></h2>
  

</section>
```

It has read in the file name, stripped off the leading numbers and the final `.md` extension, and converted all the dashes (`-`) to spaces. It has also selected all occurrences of the transformed file name, so I could edit all these occurrences at once if I wanted to. But I don't want to. Instead:

3. I press the Tab key four more times.

This sanitizes the values for `id`, `aria-labelledby` and `href`, leaves the other values as they are, and places the text insertion cursor just under the `<h2>` tag, ready for me to start typing the content that I want.

```md
<i><!-- The Problem -->
<section
  id="</i><b>the-problem</b><i>"
  aria-labelledby="</i><b>the-problem</b><i>"
  data-item="The Problem"
>
  <h2><a href="#</i><b>the-problem</b><i>">The Problem</a></h2>
  |

</section></i>
```

In my browser, the page has reloaded:

![Live Server reloads the updated index.html page ](images/TheProblem.webp)

<details class="pivot" open>
<summary>Ready to write some content</summary>
You should only have one YAML section, in the highest-numbered `.md` file. Each `.md` should contain a `<section>` block, and you can use the `sss` Markdown snippet to generate this from the name of the file.

In the next sections, you'll see the different ways that I have used standard or customized Markdown to create the mini tutorial.

</details>

</section>