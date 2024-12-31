<section
  id="headers"
  aria-labelledby="headers"
  data-item="Headers"
  class="no-margin"
>
  <h2><a href="#headers">Headers</a></h2>
  
On the Solutions page of [the mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/#the-solution){target="htm-elves"}, under the details block, there's a Level 2 Header, like this:

___
## Hiding the built-in numbering system
___

How is this done?

&nbsp;

## Creating Headers in Markdown

There are two ways of creating headers in Markdown:

* Using `#` characters. The number of `#` determines the level of the header. You can include more hashes after the header, but they will be ignored.
* Adding `===` or `---` on the next line. This only works for Level 1 and Level 2 headers.

Examples:

# Level 1 Header
## Level 2 Header
### Level 3 Header
#### Level 4 Header
##### Level 5 Header

<details class="note" open>
<summary>Level 1 === Level 2?</summary>
You may be surprised to see that the Level 1 and Level 2 headers above look the same. This is because this content is inside a `<section>` element, and is therefore not at the root level of the HTML page.

The Powers That Be have decided that a header should never appear more important than hierarchical level of the container it is in. All the major browsers apply this rule.

For more details see the official [4.4.11 Headings and sections](https://www.w3.org/TR/2011/WD-html5-author-20110809/headings-and-sections.html) document published by W3C. Here's a quote:

> Sections may contain headings of any rank, but authors are strongly encouraged to either use only h1 elements, or to use elements of the appropriate rank for the section's nesting level.


In contrast, look at the header `Writing Your Own Tutorials` at the top of this page. This is a Level 1 header _at the root of the document_, so the browser allows it to appear full size.

</details>

All of the following will create a Level 1 header (which will look just like a Level 2 header if it's inside a `<section>`):

```md-#
# Level 1 Header with initial hashes

# Level 1 Header with trailing hashes ###

Level 1 Header with === on the next line
===
```
# Level 1 Header  with initial hashes
# Level 1 Header with trailing hashes ####

Level 1 Header with === on the next line
===

&nbsp;

All of the following will create a Level 2 header:

```md-#
## Level 2 Header with initial hashes

## Level 2 Header with trailing hashes ##

Level 2 Header with --- on the next line
---
```

## Level 2 Header  with initial hashes
## Level 2 Header with trailing hashes ####
  
Level 2 Header with --- on the next line
---

&nbsp;

Here's how to create lower-level headers:

```md-#
### Level 3 Header
#### Level 4 Header
##### Level 5 Header
```
### Level 3 Header
#### Level 4 Header
##### Level 5 Header


</section>