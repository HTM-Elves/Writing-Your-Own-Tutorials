<section
  id="fixing-index-links"
  aria-labelledby="fixing-index-links"
  data-item="Fixing the Index Links"
>
  <h2><a href="iing-index-links">Fixing the Index Links</a></h2>

Your tutorial is now live. But your home page at `https://MyTutorials.github.io/` is still showing the names of placeholder tutorials, with links that do not work. Here's what it looks like now:

![What your home page looks like now](images/CurrentLook.webp)

The most important change to make is add a link for your new tutorial. That's what I'll treat in this section. In the next section, I'll show you where to make the changes to show your own choice of text, so perhaps your new home page might soon look like something like the one shown below.

![Redesigned with a link to your tutorial](images/NewLook.webp)

## The links in `tutorials.json`

The file at `MyTutorials.github.io/private/tutorials.json` contains some dummy data which is read in by `MyTutorials.github.io/private/script.js`, and used to generate a link for each of your tutorials. You can delete its contents and replace it with something like this:

```json
[
  { "name": "Using CSS Counters",
    "url": "<b>/Using-CSS-Counters</b>",
    "description": "Numbering elements that are not in an ordered list",
    "icon": "private/icons/counters.webp"
  }
]

```

Notice how the `"url"` entry starts with a slash (`/`) followed by the name of your new tutorial repository. This relative path works because your home page is at `http://MyTutorials.github.io` and your tutorial repository is published at `http://MyTutorials.github.io/Using-CSS-Counters`.

You can choose whatever text you want for the  `"name"` and `"description"`.

For the icon, I've created a small image and placed it inside the folder at `MyTutorials.github.io/private/icons`, so you can use a relative path here too.

The script at `MyTutorials.github.io/private/script.js` contains a function called `generateTutorialLinksFromJSON()`. This will read in the `tutorials.json` and generate a list item for each entry.

<details class="note" open>
<summary>Required or optional</summary>
Note that:

* If there is no `"url"`, the tutorial link will not show.
* However, there is no check to ensure that the `"url"` value is valid, so you need to take care.
* Either `"name"` or `"description"` must be given, or the tutorial link will not show.
* If no icon is provided, a default mortarboard icon will be shown. This is stored at `MyTutorials.github.io/private/icons/default.svg`, and you can replace it with another image if you prefer. If you want to change its name, you can change this line in `MyTutorials.github.io/private/script.js`:

```javascript-#50
<i> tutorials.forEach(({
      url, 
      name="",
      description="",
      icon="</i><b>private/icons/default.svg</b><i>"
    }) => {</i>
```
```javascript-s
// lines skipped //
```
```javascript-#80
  <i>})</i>
```

* If the icon is invalid, no image will appear.

</details>

## Storing links in a JSON file

Storing your links in a JSON file means that it is easy to find, add to and reorganize them. It also means that it will be require very few changes to the `private/script.js` if one day you decide to read in the links from a database instead of a JSON file.

</section>