<section
  id="advanced-code-listing-tricks"
  aria-labelledby="advanced-code-listing-tricks"
  data-item="Advanced Code Tricks"
>
  <h2><a href="#advanced-code-listing-tricks">Advanced Code Listing Tricks</a></h2>

Here's how you can remove the line numbering for the HTML code block. In your file `MyTutorials/Using-CSS-Counters/docs/md/99-The-Problem.md`, add `-#` (which you can read as "minus number") after the `html` language indicator:

````md-#19
<i>```</i><b>html-#</b><i>
<ol>
  <li><a href="#beginning">Beginning</a></li>
  <li><a href="#middle">Middle</a></li>
  <li><a href="#end">End</a></li>
</ol></i>
```
````

Here's how your code listing should now appear in the browser:

```html-#
<ol>
  <li><a href="#beginning">Beginning</a></li>
  <li><a href="#middle">Middle</a></li>
  <li><a href="#end">End</a></li>
</ol>
```

<details class="tldr">
<summary>TL;DR – Pandoc filters</summary>
Pandoc reads from a source file and converts the document into its own internal format. Before it converts from that internal format to the target format, it allows a _filter_ to modify the blocks in the internal format. The final conversion to the target format is performed on the modified blocks.

The `"pandoc"` script in `package.json` allows the file at `MyTutorial.github.io/public/filter.js` to review each block and modify it.
```json-w
<i>"scripts": {
    "pandoc": "pandoc -o docs/index.html </i><b>--filter public/filter.js</b><i> --template=public/template.html docs/md/*.md"
  }</i>
```
When Pandoc encounters a code block, as designated by a opening and closing fence of three backticks with a language indicator, like ```` ```html ````, it creates an internal block of type `CodeBlock` and stores the language indicator as its internal equivalennt of a `class`.

The `filter.js` file that HTM-Elves uses, inspects the `class` provided by each `CodeBlock`. It looks for classes like:

| Class       | Meaning                                      |
| ----------- | -------------------------------------------- |
| `html`      | treat as HTML                                |
| `html-#`    | don't show line-numbering                    |
| `html-w`    | wrap the text _and_ don't show-line numbering|
| `html-#498` | start line-numbering at line 498             |
| `html-s`    | show "skipped lines" comment                 |

When it finds such a class, it:

* Replaces the `html` class* with `language-html`, which is what Prism expects to see
* Adds other classes, such as `line-numbers`, `skip` or `wrap` as required
* Adds a `data-start` attribute with the number at which to start line-numbering, if this is what is requested.

*`html` is used as an example here. The filter performs the same steps for all language names supported by Prism, such as `md`, `js` and `json`.

'filter.js' also scans the body of the CodeBlock for tags such as:

| Tag          | Meaning                          |
| ------------ | -------------------------------- |
| `<i>...</i>` | dim (indistinct)                 |
| `<b>...</b>` | brighten                         |
| `<u>...</u>` | show as selection                |
| `<s>...</s>` | show as deleted (strike-through) |

For any other tags, it converts `<` to `&lt;` and `>` to `&gt;`, but it lets the tags above pass through unchanged. These are then used in an unorthodox way by `MyTutorials.github.io/public/styles.css` to apply additional styling to catch the reader's eye.

</details>

## More HTM-Elves shortcuts

Here are some more shortcuts that HTM-Elves provides. I've used `md` (Markdown) as the language example, but they will work just as well with all other languages, such as `html`, `css`, `js`, `json`, `yaml`, and `bash`.

````md-#
```md
standard code
&lt;b&gt;brighter code&lt;/b&gt;
&lt;i&gt;dimmer code&lt;/i&gt;
&lt;s&gt;deleted code&lt;/s&gt;
&lt;u&gt;selected code&lt;/u&gt;
```
```md-s
<!-- skipped lines -->
```
```md-#10
Code that starts at a specific line number
```
```md-s
```
```md-#
Code with no line numbering
```
```md-s
```
```md-w
Long lines of code that you want to wrap. Unfortunately, Prism will not let you number these lines correctly, so they must remain un-numbered.

md-s blocks with no content just create vertical space with the same background-color
```
````

## What they look like in the browser

```md
standard code
<b>brighter code</b>
<i>dimmer code</i>
<s>deleted code</s>
<u>selected code</u>
```
```md-s
<!-- skipped lines -->
```
```md-#10
Code that starts at a specific line number
```
```md-s
```
```md-#
Code with no line numbering
```
```md-s
```
```md-w
Long lines of code that you want to wrap. Unfortunately, Prism will not let you number these lines correctly, so they must remain un-numbered.

md-s blocks with no content just create vertical space with the same background-color
```

## Example

Here's an example from the Solutions page of [the mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/#the-solution){target="htm-elves"}:

```css-#
<i>ol {
  counter-reset: item;
  </i><b>list-style-type: none;</b><i>

  a::before {
    counter-increment: item;
    content: counter(item) ". ";
  }
}</i>
```
Here's the Markdown code used to create it. See the green note below for details on how to use Markdown snippets to insert the `<i>` and `<b>` tags.

````md-#
```css-#
&lt;i&gt;ol {
  counter-reset: item;
  &lt;/i&gt&lt;b&gt;list-style-type: none;&lt;/b&gt;&lt;i&gt;

  a::before {
    counter-increment: item;
    content: counter(item) ". ";
  }
}&lt;/i&gt
```
````


## Markdown snippets

When you want to create a code block for a specific language, just type the short name of the language (in lowercase) in your `.md` file, then press Tab, and the appropriate code block will appear, with the cursor placed in its centre.

If you want to apply a variant (like `html-#`) you will need to add the variant later. The exception is for `bash`, which will automatically create a block like...

````md
```bash-w
|
```
````

... because there is no line-numbering in the Terminal, and this allows long lines to wrap.

## Wrapping existing code in a code block

If you have already written the code, and later want to wrap it in a code block, simply select the code, then type the snippet prefix and press Tab. Alarmingly, your code will be deleted as you type the prefix, but when you press Tab, it will be restored.

Example: suppose that you have written this chunk of CSS, but have forgotten to create a code block for it:

```md-#
ol {
  counter-reset: item 0;

  a::before {
    counter-increment: item 1;
    content: counter(item) ". ";
  }
}
```

Simply select it all...
```md-#
<u>ol {
  counter-reset: item 0;

  a::before {
    counter-increment: item 1;
    content: counter(item) ". ";
  }
}</u>
```

... type `css` (during which time your actual CSS will disappear)...

```md-#
css
```

... then press the Tab key, and your CSS will reappear wrapped in the ```` ```css ... ``` ```` code block:

````md-#
```css
ol {
  counter-reset: item 0;

  a::before {
    counter-increment: item 1;
    content: counter(item) ". ";
  }
}
```
````

<details class="note" open>
<summary>Quirky use of one-letter tags</summary>
There are also snippets for creating the (quirky) `<b>`, `<i>`, `<s>` and `<u>` tags.

* `<b` : to wrap a selection in a `<b>` element (bright)
* `<i` : to wrap a selection in a `<i>` element (dim)
* `<s` : to wrap a selection in a `<s>` element (strike-through)
* `<u` : to wrap a selection in a `<u>` element (selected text)
* `ib` : to wrap a selection in a `</i><b>...</b><i>`, to insert a bright element inside a dimmed block of code


Select the text that you want to wrap with one of these tags, and type the appropriate Markdown snippet prefix.

Perhaps you want to make a whole block of code dimmer, and then create a brighter section within that block. For example:

```md-#
This is code that the reader has already seen.
This part is new.
This part is also familiar code.
```

You can:

1. Select the whole block of code

```md-#
<u>This is code that the reader has already seen.
This part is new.
This part is also familiar code.</u>
```

2. Type `<i` + Tab, to dim it all

```md-#
<i>&lt;i&gt;<i>This is code that the reader has already seen.
This part is new.
This part is also familiar code.</i>&lt;/i&gt;</i>
```
3. Select just the new part

```md-#
<i>&lt;i&gt;This is code that the reader has already seen.
<u>This part is new.</u>
This part is also familiar code.&lt;i&gt;</i>
```

4. Type the Markdown prefix `ib` + Tab to insert a bright block in the middle of the dim block

```md-#
<i>&lt;i&gt;This is code that the reader has already seen.
&lt;/i&gt;&lt;b&gt;</i><b>This part is new.</b><i>&lt;/b&gt;&lt;i&gt;
This part is also familiar code.&lt;i&gt;</i>
```

<details class="warn" open>
<summary>Warning: Standard code blocks don't like these quirky tags</summary>
If you try this with a basic code block, the Markdown snippets described above will fail. For example, this is a basic code block, with a simple language name:

````md
```javascript
// Using Markdown snippet prefixes like `<i` and `<b` will
// fail here. Add a dash (`-`) after the language name to
// allow these snippet prefixes to work.
```
````

To enable these formatting snippets to work, add a dash (`-`) after the language name (or use a numbering/wrapping variant like `css-#13` or `html-w`).

````md
```javascript-
// <b>You can use</b><i> Markdown snippet </i></i><b>prefixes like`<i` and `<b`</b><i>
// inside a code block </i><b>where the language name includes a</b><i>
// </i><b>dash</b><i> (`-`).</i>
```
````

You can remove the temporary trailing dash that you added after you have dealt with the highlighting.

</details>

</details>



</section>