<section
  id="markdown-links"
  aria-labelledby="markdown-links"
  data-item="Markdown Links"
>
  <h2><a href="#markdown-links">Markdown Links</a></h2>
  
If you look at [the completed mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/){target="htm-elves"}, you'll see that the first sentence contains a link to the page [Using CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) on Mozilla's MDN Web Docs site.

Here's how this sentence looks in Markdown:

```md-w
In this tutorial, I will show you how to use [CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) to number the link elements in a navigation menu.
```

Notice how a [link is created](https://www.markdownguide.org/basic-syntax/#links){title="title shows on hover" target="_blank"} with the format:

```md-w
[Anchor Text](URL)
```
If you want to be fancy, you can add attributes for the link, by adding an attribute block with the structure `{attribute="value"}` immediately after the `(URL)` section, like this:
```md-w
[Anchor Text](URL){title="title shows on hover" target="_blank"}
```
By way of illustration, here's the [link to markdownguide.org  decorated in just this way](https://www.markdownguide.org/basic-syntax/#links){title="title shows on hover" target="_blank"}. Hover your mouse over it to see the title displayed after a few seconds. If you follow the link, it will open in a new tab.


</section>