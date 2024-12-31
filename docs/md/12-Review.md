<section
  id="review"
  aria-labelledby="review"
  data-item="Review"
>
  <h2><a href="#review">Another Code Listing and an Image</a></h2>

The next part of the Solutions page of [the mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/#the-solution){target="htm-elves"} reviews techniques that you have already seen:

* Typing some basic text
* Inserting a code listing (without line numbering)
* Inserting an image

<details class="challenge" open>
<summary>Try it yourself</summary>
### This is what you need to add:

___

Taking the CSS that is used for the rest of the styling as given, you can add this rule:

```css-#
ol {
  counter-reset: item 0;

  a::before {
    counter-increment: item 1;
    content: counter(item) ". ";
  }
}
```

This almost solves the problem:

![The link elements are now numbered](images/almost.webp)

___

<details class="solution">
<summary>Solution</summary>

This is the Markdown that you need:

````md-w
Taking the CSS that is used for the rest of the styling as given, you can add this rule:

```css-#
ol {
  counter-reset: item 0;

  a::before {
    counter-increment: item 1;
    content: counter(item) ". ";
  }
}
```

This almost solves the problem:

![The link elements are now numbered](images/almost.webp)
````

Remember to:

* Use the Markdown snippet prefix `css` to add a CSS code block
* Use `css-#` to hide the line-numbering
* Use the Markdown snippet prefix `img` to add an image link
* Leave a blank line before the image link

</details>

</details>
</section>