<section
  id="numbers-and-bullets"
  aria-labelledby="numbers-and-bullets"
  data-item="Numbers And Bullets"
>
  <h2><a href="#numbers-and-bullets">Numbered List and Bullet Lists</a></h2>

The Solutions page of [the mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/#the-solution){target="htm-elves"} illustrates a new feature: a numbered list:

![A numbered list](images/NumberedList.webp)

To create a numbered list in Markdown, you simply need to start the first line with the text `1. ` That is, the character `1` followed by a dot, followed by a space. From now on, VS Code's Markdown engine will know that you are creating a numbered list.

<details class="tip" open>
<summary>Automatic numbering</summary>
Apart from the number that starts the list, Markdown doesn't care what numbers you for the following lines. They could all be `1`s, for example.

To test this:

1. Paste the following block (which has no line numbers) into your `02-The-Solution.md` file:

```md-w
Declare a counter and give it an initial value
Increment the counter for each element that should be numbered
Display the newly-incremented value in the numbered element. This is usually done using the `content` of a `::before` pseudo-element
Add `". "` as decoration in the `content` of the `::before` pseudo-element.
```

2. Click just before the first `D`, then Alt-Click before the first character of each of the four lines, so that you now have four flashing insertion cursors, a bit like what you see below.
   
```md-w
|Declare a counter and give it an initial value
|Increment the counter for each element that should be numbered
|Display the newly-incremented value in the numbered element. This is usually done using the `content` of a `::before` pseudo-element
|Add `". "` as decoration in the `content` of the `::before` pseudo-element.
```

3. Type `1. ` Because you set four cursors, this string should appear is four places, at the beginning of each of the four lines.

```md-w
1. Declare a counter and give it an initial value
1. Increment the counter for each element that should be numbered
1. Display the newly-incremented value in the numbered element. This is usually done using the `content` of a `::before` pseudo-element
1. Add `". "` as decoration in the `content` of the `::before` pseudo-element.
```

4. Check the live display in your browser. This is what you should see:

![Markdown simply increments from the first number in a numbered list](images/NumberedList.webp)

For more details on working with multiple selections and multiple cursors in VS Code, see [the official documentation](https://code.visualstudio.com/docs/editor/codebasics).

</details>

## Bullet lists

To create a bullet list you can start the first line of the list with:

* an asterisk (`*`)
+ a plus sign (`+`)
- or a dash (`-`)

Here's the actual Markdown that I used to create the bullet list above:

```md-#
* an asterisk (`*`)
+ a plus sign (`+`)
- or a dash (`-`)
```

All three characters are considered equivalent. All convert to bullets.

</section>
