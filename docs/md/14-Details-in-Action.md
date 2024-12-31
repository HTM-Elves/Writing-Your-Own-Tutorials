<section
  id="details-in-action"
  aria-labelledby="details-in-action"
  data-item="Details In Action"
>
  <h2><a href="#details-in-action">Details In Action</a></h2>

On the Solutions page of [the mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/#the-solution){target="htm-elves"}, I've used a `details` element with the class of `tip`. Here's what it looks like:

<details class="tip" open>
<summary>Default values</summary>
The default value for `counter-reset` is `0`, and the default value for `counter-increment` is `1`, so the less explicit CSS below has exactly the same effect.

```css-#
ol {
  counter-reset: item;

  a::before {
    counter-increment: item;
    content: counter(item) ". ";
  }
}
```
</details>


Note that the background for the code listing inside a `<details>` element is slightly tinted to contrast with the regular text.

***

<details class="warn" open>
<summary>Pandoc has opinions about blank lines</summary>
Pandoc expects there to be a blank line before the closing `/<details>` tag. If there is no blank line, then the last block of text will **not** be converted to a paragraph, so its appearance may look odd.

For example, there is no blank space after this block of text, so it is not enclosed in a paragraph element, and its line-height is less than expected. The actual HTML generated for this `<details>` element is shown in the code listing below.
</details>

```html-w
<i><details class="warn" open="">
<summary>
Pandoc and blank lines
</summary>
</i><b><p></b><i>Pandoc expects there to be a blank line before the closing
<code>/&lt;details&gt;</code> tag. If there is no blank line, then the last block of text will not be converted to a paragraph, so its appearance may look odd.</i><b></p></b><i>
</i><b>For example, there is no blank space after this line of text, so it is not enclosed in a paragraph element, and its line-height is less than expected. The actual HTML generated for this `<details>` element is shown in the code listing below.</b><i>
</details></i>
```

</section>