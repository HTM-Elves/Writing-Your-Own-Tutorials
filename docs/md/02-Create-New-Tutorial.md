<!-- Create a New Tutorial -->
<section
id="new-tutorial"
aria-labelledby="new-tutorial"
data-item="2. Creating A New Tutorial"
>
<h2><a href="#new-tutorial">Creating A New Tutorial</a></h2>

To create a new tutorial with HTM-Elves:

1. Open your `MyTutorials.github.io` folder in VS Code
2. Open a Terminal window into this folder
3. Run `npm run new`.

You will be asked to give a name for your new tutorial. I propose "James's Basics", but the HTM-Elves don't really like this. GitHub's rules for naming repositories allow only standard ASCII alphanumeric characters or the `-` dash symbol. Any other characters (like the `'` apostrophe) will be replaced with dashes. The HTM-Elves apply the same rules. 

!['James's Basics' does not comply with GitHub repository naming rules](images/James-s-Basics.webp)

I decide to use the simpler name "The Basics"...

![Entering a new name](images/TheBasics.webp)

...but when I press Enter, I'm told that the space still needs to be replaced.

![The space in 'The Basics' needs to be replaced](images/AcceptName.webp)

I'm happy enough with "The-Basics" as my tutorial name, so I simply press Enter to accept it.

![A new tutorial is created](images/TutorialCreated.webp)

Immediately, the HTM-Elves create a new directory called `The-Basics` for me inside my `MyTutorials` parent folder. At the same time, they open a page in my favourite browser:

![The new tutorial as it appears in a browser](images/InTheBrowser.webp)

<details class="note" open>
<summary>Why 99-Intro.md?</summary>
Pandoc will treat all the files with an `.md` extension inside the `doc/md/` folder in alphabetical order. To ensure that they are treated in the right order, I recommend that you use zero-padded names like `01-Getting-Started.md`, `02-Test-Early-Test-Often.md`.

If you don't use zero-padding, then `11-Advanced-Techniques.md` will be treated before `2-Test-Early-Test-Often.md`, because `11` comes _alphabetically_ before `2`.

However, the CSS used to create a separate "page" for each Markdown file will automatically show the _last_ section when you first open the tutorial. (I'll explain this in detail in section _5. Snippets and Sections_.) For this reason, the _first_ Markdown page must have the _highest_ number.

So, by default, the first page is named `99-Intro.md`.
</details>

<details class="pivot" open>
<summary>Summary</summary>
The new `The-Basics` directory contains a Markdown file at `docs/md/99-Intro.md`. This is what has been converted into the HTML file at `docs/index.html`, which is what is now displaying in your browser.

The `docs/md/99-Intro.md` starts with a [YAML](https://en.wikipedia.org/wiki/YAML) block which defines some variables which Pandoc uses to create the page title, its header and sub-header, a publication date in the top right corner, and links to a GitHub repository that you have not yet created.

It also contains some Markdown text which appears in the main part of the page.

Before dealing with either of these topics in depth, I'll show you how to make any changes you make to your Markdown files update live in your browser.

</details>
</section>

