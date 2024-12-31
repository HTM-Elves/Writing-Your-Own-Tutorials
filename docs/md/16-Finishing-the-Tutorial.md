<section
  id="finishing-the-tutorial"
  aria-labelledby="finishing-the-tutorial"
  data-item="Finishing The Tutorial"
>
  <h2><a href="#finishing-the-tutorial">Finishing The Tutorial</a></h2>
  
You should be able to complete the rest of the mini tutorial yourself, using the techniques that you have already seen.

<details class="challenge" open>
<summary>Bright and dim code </summary>

Do you remember how you can make certain chunks stand out in a code listing, as in the example below?

```css-#
<i>ol {
  counter-reset: item;</i>
  <b>list-style-type: none;</b><i>

  a::before {
    counter-increment: item;
    content: counter(item) ". ";
  }
}</i>
```
What Markdown snippets can you use to work more efficiently?

<details class="solution">
<summary>Solution</summary>
You can use the Markdown snippets:

* `css` + Tab: to create a CSS code block
* `<i` + Tab: to wrap the whole code block in the quirky `<i>...</i>` tags, to make the text dimmer
* `ib` + Tab: to wrap just the code that you want to look brighter

Remember to use `css-#` to remove the line-numbering.

````md
```css-#
&lt;i&gt;ol {
  counter-reset: item;
  &lt;/i&gt;&lt;b&gt;list-style-type: none;&lt;/b&gt;&lt;i&gt;

  a::before {
    counter-increment: item;
    content: counter(item) ". ";
  }
}&lt;/i&gt;
```
````

</details>
</details>

## The final page

The final page requires you to practice your new skills:

1. Add a new Markdown file
1. Give it an number greater than `02` and less than `99`, so that it will appear in the correct place
1. Use the `sss` + Tab + Tab Markdown snippet to create the necessary `<section>` element
1. Add an image
1. Add a CSS code listing (_with_ line-numbering).

And that's it!

## Publishing your tutorial

All that's left to do is:

1. Commit your changes
2. Push to your GitHub repository
3. Run `npm run publish` in a Terminal window open on your `Using-CSS-Counters` directory

![Commit, push and publish your tutorial](images/CommitPublish.webp)

And finally:

4. Let other's know where to find your new tutorial.

(You won't have to publish your tutorial again. If you make a change, it will be enough to commit the changes and push them to your GitHub repository.)

</section>