<!-- 7. Testing Your Snippets -->
<section
  id="testing-your-snippets"
  aria-labelledby="testing-your-snippets"
  data-item="7. Testing Your Snippets"
>
  <h2><a href="#testing-your-snippets">Testing Your Snippets</a></h2>

Each snippet has a `"prefix"` entry. For example, this snippet...

```json-#w
"section": {
  "prefix": "section",
  "body": [
    "<section\n  id=\"${1:section-id}\"\n aria-labelledby=\"$1\"\n  data-item=\"${2:Title forMenu}\"\n>\n  <h2><a href=\"#$1\">${3:$2}</a></h2>\n $0\n</section>"
  ],
  "description": "Customize id, data-item and headAdd content."
}
```
... has the prefix `section`. If you type the word `section` into a file with the extension `.md`, and press the Tab key, the following text will be inserted into your file.

```md-#
<section
	id="<s>section-id</s>"
	aria-labelledby="<s>section-id</s>"
	data-item="Title for Menu"
>
	<h2><a href="#<s>section-id</s>">Title for Menu</a></h2>
	
</section>
```

Notice that the three occurrences of the words `section-id` are highlighted. Start typing, and the text in all three places will change. This is the first _tabstop_.

Press the Tab key, and the two occurrences of `Title for Menu` will be highlighted. Again, if you type, the text will be changed in both places. This is the second tabstop.

```md-#w
<section
	id="section-id"
	aria-labelledby="section-id"
	data-item="<s>Title for Menu</s>"
>
	<h2><a href="#section-id"><s>Title for Menu</s></a></h2>

</section>
```

Press the Tab key again, and now only the text for the `h2` link will be selected. This means that you can either provide the same entry in the menu as in the header, or provide a longer entry for the header.

## Creating a new Markdown file with its own section 
HTM-Elves will get confused if you create a section inside another section. A better plan is to create a new Markdown file inside the `docs/md/` folder. This will be the second file in your project, so you could call it `02-Now_We're_Ready_To_Start.md`.

Into the empty file, type `sss`. I chose this prefix because `s` is the first letter of 'section', and I am too lazy to move more than one finger. Press the Tab key. A much more complex snippet will read the file name and replace all the `-` dash and `_` underscore characters with spaces. It will also strip off the leading `0`, and the `.md` file extension.

```md-#w
<!-- <s>2. Now We're Ready To Start</s> -->
<section
  id="<s>2. Now We're Ready To Start</s>"
  aria-labelledby="<s>2. Now We're Ready To Start</s>"
  data-item="<s>2. Now We're Ready To Start</s>"
>
  <h2><a href="#<s>2. Now We're Ready To Start</s>"><s>2. Now We're Ready To Start</s>/a></h2>
  

</section>
```
All the tabstops are selected, because they are interconnected. Type `Let's go!` to replace the current text, then press the Tab key 5 times. The entries for the different attributes will be formatted appropriately. 

```md-#
<!-- Let's go! -->
<section
  id="lets-go"
  aria-labelledby="lets-go"
  data-item="Let's Go!"
>
  <h2><a href="#lets-go">Let's Go!</a></h2>
  

</section>
```

The cursor should now be flashing in the space just under the `<h2>` tag. Type `This is page 2`.

Check your browser. If you still have `npm run watch` running, then you should see a new entry in the menu, and a new page when you select this entry:

![You now have a second page](images/PageTwo.webp)

<details class="pivot" open>
<summary>Not just snippets</summary>
There are several other snippets that you haven't tested yet, for inserting images, creating code listings with syntax highlighting, and adding optional details elements. I'll introduce these over the cours of the next few sections.

Next, though I'll remind you of some of the standard things that Markdown can do, and you can see how Pandoc converts these into HTML.

</details>
</section>