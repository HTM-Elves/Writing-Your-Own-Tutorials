<!-- Section Snippets -->
<section
id="section-snippets"
aria-labelledby="section-snippets"
data-item="5. Sections and Snippets"
>
<h2><a href="#section-snippets">Sections and Snippets</a></h2>

If you look at `MyTutorials/The-Basics/docs/md/99-Intro.md`, you'll see the following lines just after the YAML block:

```md-#8
<section
  id="intro"
  aria-labelledby="intro"
  data-item="Introduction"
>
  <h2><a href="#intro">Introduction</a></h2>

```
```md-s
<!-- Some lines skipped -->
```
```md-#19
</section>
```

***"Wait a minute!"*** I hear you say. ***"This looks like HTML, but I thought that the whole point of this HTM-Elves workflow was to avoid writing any HTML!"***

You are right. You won't be _writing_ any HTML, but you will be _using_ HTML, when standard Markdown needs a little help. And Markdown needs help in creating container elements, sections.

## A section for each file

I have three opinions about writing tutorials:

1. I like to create a separate Markdown file for each section.
2. I like my tutorial web pages to be divided into separate "pages", one for each section, following my file structure.

However, standard Markdown does not provide a convention for creating container blocks like `<div>` or `<section>`. (Pandoc _does_ recognize an extended set of Markdown rules which cover this, but Pandoc has quite a steep learning curve.)

Fortunately, Markdown, by design, understands all HTML tags. Unfortunately, Standard Markdown considers that anything inside an HTML tag should be formatted as HTML, so it treats Markdown inside an HTML tag as plain text. Pandoc to the rescue! Pandoc treats any standard Markdown _inside_ an HTML tag as Markdown that it can convert to HTML.

I can therefore start each page with an HTML block like the one you see above, and use CSS rules to show only one `<section>` at a time, to impose my second opinion.

<details class="note" open>
<summary>Fragments and targets</summary>
When you click on an item in the menu, or on one of the buttons in the footer, the link you activated sets the _fragment_ in the URL address bar. For example, for this page the URL is in the address bar has the fragment `#section-snippets`:
```html-#w
<i>https://htm-elves.github.io/Writing-Your-Own-Tutorials/</i><b>#section-snippets</b>
```

The CSS pseudo-class `:target` matches any element whose `id` is the same as the `fragment`. My CSS hides all `<section>` elements which do not have the same `id` as the `fragment`, and shows only the one that does.

Actually, it's slightly more complicated than that (which is why the first Markdown file has the number `99`) but I'll explain in section [14. Target or Last Child](#target-or-last-child).

</details>

## Using VS Code snippets

I said that I have three opinions about writing tutorials. Here's the third:

3. I like to type as little as possible.

Instead of typing out a chunk of HTML code each time I create a new Markdown file, I use a [VS Code Snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets). Snippets are templates that allow you to insert predictable chunks of text, and customize them quickly depending on the context.

When I create a new file, I give the file a name like `22.5-Ducks_on_the_water.md`, and then I type `sss` into the new empty file. This triggers a Markdown snippet that I have created, which generates an HTML block for me, as shown in the code listing below:

```html-#
<!-- 22. Ducks On The Water -->
<section
	id="22. Ducks On The Water"
	aria-labelledby="22. Ducks On The Water"
	data-item="22. Ducks On The Water"
>
	<h2><a href="#22. Ducks On The Water">22. Ducks On The Water</a></h2>
	

</section>
```

This is not exactly what I want. However, the snippet contains a number of _tabstops_. Each time I press the Tab key, the snippet engine selects a different chunk of the snippet text, and allows me to edit it. Even better, the snippet is designed to _transform_ the text at each tabstop, in different ways.

Without editing the inserted snippet at all, I can simply press the Tab key 5 times, and it changes the text at each tabstop for me, and then places the cursor in where you see the `|` character, ready for me to add content to the page.

```html-#
<!-- 22. Ducks On The Water -->
<section
  id="ducks-on-the-water"
  aria-labelledby="ducks-on-the-water"
  data-item="22. Ducks On The Water"
>
  <h2><a href="#ducks-on-the-water">Ducks On The Water</a></h2>
  |

</section>
```

The numbered `data-item` is used in the menu. The `id` ensures that this section is displayed when the fragment in the address bar matches it. Wrapping the header text in a link means that it is easy for you to copy the link to the current page, if you want to share it with someone.

<details class="pivot" open>
<summary>Time-saving with snippets</summary>
By default, VS Code does not provide any Markdown snippets, and it has disactivated the use of snippets in Markdown files. 

In the next section, you'll see how to activate snippets, and I'll give you a collection to get started with.

</details>

</section>