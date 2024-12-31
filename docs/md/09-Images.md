<section
  id="images"
  aria-labelledby="images"
  data-item="Images"
>
  <h2><a href="#images">Images</a></h2>
  
Coming back to  [the mini tutorial](https://htm-elves.github.io/Using-CSS-Counters/){target="htm-elves"}, the next feature it illustrates is the insertion of an image with a caption.

<details class="note" open>
<summary>Summary</summary>
You can download the images for this mini tutorial from [here](http://htm-elves.github.io/Using-CSS-Counters/Using-CSS-Counters_images.zip). Decompress the ZIP file, then move the three images to the folder `MyTutorials/Using-CSS-Counters/docs/images/`.

</details>

Here's how the mini tutorial continues:

```md-w
You've used an ordered list, because you want the list items to be numbered. When you apply your best CSS styling, you really want the items to appear like this:

![What you want](images/expected.webp)
```

And here is how it appears in the browser, with its caption:
![No blank line means no caption](images/ImageWithCaption.webp)

## Points to note

There are six points to note here:

1. Pandoc insists that there **must** be a blank line before the Markdown line that inserts an image. If you do not have a blank line, then the image will be shown no caption. (You can see that this is the case with image above which has no caption for this very reason: the text `Figure 3: What you want` is in fact part of the image.)
2. The syntax is similar to the link syntax, except that it is prefixed with an exclamation mark (`!`).
3. The text in the square brackets is used as the caption.
4. The link to the image is given inside round parentheses following the square brackets.
5. There must be no space between the square brackets and the round parentheses
6. The final point requires a fuller explanation.

## 6. Where images are stored

When you create an image for your tutorial, you should place it in the file at `docs/images/`.

If you type the Markdown snippet prefix `img`, the following snippet will be added:

```md-#
![Caption](images<u>/filename</u>)
```

If you immediately press the `/` key, VS Code will look in the `docs/images/` and present you with a contextual menu showing you all the available images. You can start typing the name of the image you want to bring it to the top of the list. Press Tab to choose it (or use your mouse).

If you press Tab again, the word `Caption` will be selected, and you can type the caption that you want to appear under your image.

```md-#
![<u>Caption</u>](images/ChosenImage.jpg)
```

## Customizing the caption

`MyTutorials.github.io/public/styles.css` contains a rule for automatically numbering the `figcaption` elements in your `index.html` file. Look for the following rule if you want to name or style your images differently.

```css-#210
<i>figure {
  margin: 0;

  figcaption {
    margin-bottom: 3em;
    text-align: center;
    text-decoration: underline;
    color: var(--mid);

    </i><b>&::before {>
      counter-increment: fig;
      content: "Figure " counter(fig) ": ";
    }</b><i>
  }
}</i>
```


<details class="tldr">
<summary>VS Code Markdown Preview</summary>
When the file at `docs/index.html` is published, it will look in the folder at `docs/images/` for any images that you want to use. When you are working in Markdown in VS Code, you can choose to show a Preview of any Markdown file, using one of the techniques in the composite Figure 8 below.

![Caption](images/OpenPreview.webp)

To ensure that the Preview can also see the images in `docs/images/` using the path `images/ImageFileName.ext`, HTM-Elves has created a symbolic link for you called `images` inside the `docs/md/` folder.

<details class="warn">
<summary>docs/md/images in .gitignore</summary>
If this symbolic link gets pushed to your GitHub repository, GitHub's publish workflow will fail. It's important that .gitignore contains an entry for `docs/md/images`.

</details>

![Using VS Code Preview with your Markdown file](images/Preview.webp)
</details>

<details class="challenge" open>
<summary>Finish the first page</summary>
It should be easy for you now to finish the first page. You'll be using techniques that you have already seen. Try it for yourself, before you look at the solution.



<details class="solution">
<summary>Solution</summary>
Be sure that the `actual.webp` image is in the `docs/images/` folder. You can download it from [here](http://htm-elves.github.io/Using-CSS-Counters/Using-CSS-Counters_images.zip).

Here's the Markdown that you need to add:

```md-w
Instead, the numbers for each list item appear outside the `<li>` elements, like this:

![What you get](images/actual.webp)

How can you fix this?
```

Remember to leave blank lines around the image link. If you don't, you won't see the caption.

</details>

</details>


</section>