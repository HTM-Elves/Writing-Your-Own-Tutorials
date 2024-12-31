<section
  id="target-or-last-child"
  aria-labelledby="target-or-last-child"
  data-item="Target or Last Child?"
>
  <h2><a href="#target-or-last-child">Target or Last Child?</a></h2>

Here's where I finally answer the question: Why must the first page be stored in the _highest-numbered_ Markdown file?

When I read a tutorial, I like to read it in chunks. I like to see a clear indication that I have reached the end of a section, and that the topic is about to change. I have time to pause and reflect before moving on. This helps me to manage the input of new information, which, I believe, helps me to remember what I have read.

For this reason, I have designed HTM-Elves to create tutorials in sections. (I've also provided a way to switch to a single long page, for readers who prefer that layout. See below.)

## A CSS-only solution with `:target`

Each Markdown file has a `<section>` to wrap all its content, and each `<section>` has a unique id. The menu contains a list of link elements, and each link element has as its `href`, the `id` of one of the sections. For example:

```html-w
<a href="#intro">Introduction</a>
<a href="#new-tutorial">Create A New Tutorial</a>
<a href="#yaml">The YAML Block</a>
```

When you click on a link in the menu, the _fragment_ or _hash_ in the address bar is set. For example: [https://htm-elves.github.io/Writing-Your-Own-Tutorials/#yaml](https://htm-elves.github.io/Writing-Your-Own-Tutorials/#yaml).

CSS has a [`:target` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target). This is applied to the element whose `id` matches the URL fragment. By default, the browser will raise this element to the top of the viewport.

Here's the CSS that HTM-Elves uses:

```css-#109
body:has(#pages:checked) {
  /* Hide all sections, including last if there's a :target... */
  section,
  section:target ~ section:last-of-type {
    height: 0;
    width: 0;
    overflow: hidden;
  }

  /* ...but show the :target if there is one, or last, if not */
  section:target,
  section:last-of-type {
    height: auto;
    width: auto;
    overflow: auto;
  }
}
```

If no sections have an `id` that matches the URL fragment, then `section:last-of-type` will be shown, and all the others will be given a size of 0. If the `id` of any section does match the URL fragment, then only that section should be shown, and `section:last-of-type` should be hidden (unless of course the `:target` pseudo-class applies to it.)

## The `~` sibling operator

This selector...
```css-w
section:target ~ section:last-of-type
```
... selects the last `<section>` if _any one_ of its older siblings has the `:target` pseudo-class.

**CSS does not currently provide a simple way of detecting whether a given element has a _younger_ sibling with the `:target` pseudo-class. The new [`:has()` functional pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) looks like a good candidate for this but as the MDN page says:

> Pseudo-elements are also not valid selectors within :has() and pseudo-elements are not valid anchors for :has().

So it's only `section:last-of-type` that can know if there is the `:target` pseudo-class has not been applied.

This is why the first section (as far as reading is concerned) must appear as the last section (as far as the HTML sibling hierarchy is concerned).


## If you don't want your tutorials to be split into pages

At the top left of the menu is a discreet radio button set which allows you to select either a `#paging` radio button or a `#scroll` radio button. By default, the `#paging` radio button is checked, and the tutorial is divided into separate pages.

```html-#43
<i><div class="paging">
  <label
    title="Split into sections"
  >
    <img src="../public/svg/pages.svg" alt="pages">
    <input
      type="radio"
      name="paging"
      id="pages"
      </i><b>checked</b><i>
    >
  </label>
  <label
    title="Show as a single page"
  >
    <img src="../public/svg/scroll.svg" alt="scroll">
    <input
      type="radio"
      name="paging"
      id="scroll"
    >
  </label>
</div></i>
```

If you don't want this, you can move the `checked` attribute to the `scroll` radio button, and by default your tutorial will be displayed as a single page. The items in the menu will still scroll your page to the appropriate position, and the appropriate item in the menu will highlight to show your progress through the document.

</section>