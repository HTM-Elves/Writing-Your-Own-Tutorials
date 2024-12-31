<section
id="new-tutorial"
aria-labelledby="new-tutorial"
data-item="Create A New Tutorial"
>
<h2><a href="#new-tutorial">Creating A New Tutorial</a></h2>

To create a new tutorial with HTM-Elves:

1. Open your `MyTutorials.github.io` folder in VS Code
2. Open a Terminal window into this folder
3. Run `npm run new`.

You will be asked to give a name for your new tutorial. I initially chose "Using CSS's Counters".

!['First attempt, with a non-alphanumeric character](images/FirstAttempt.webp)

However, the HTM-Elves don't really like this. GitHub's rules for naming repositories allow only standard ASCII alphanumeric characters or the `-` dash symbol. Any other characters (like the `'` apostrophe) will be replaced with dashes. The HTM-Elves apply the same rules and change my proposed name to `Using-CSS-s-Counters`, which is ugly. 

Now that I have made my point about standard ASCII alphanumeric characters, I decide to use a more natural name: "Using CSS Counters"...

![Entering a new name](images/RevisedName.webp)

...but when I press Enter, I'm told that the space still need to be replaced.

![The spaces in 'Using CSS Counters' needs to be replaced](images/AcceptedName.webp)

I'm happy enough with "Using-CSS-Counters" as my tutorial name, so I simply press Enter to accept it.

![A new tutorial is created](images/WatchLive.webp)

Immediately, HTM-Elves:

* Creates a new directory called `Using-CSS-Counters` for me inside my `MyTutorials` parent folder
* Creates a Git repository inside this directory
* Creates a new GitHub repository called `Using-CSS-Counters` for me inside my `MyTutorials` organization online
* Makes an initial `commit`
* Sets this new GitHub repository up as the `origin` for my local Git repository
* Pushes the initial `commit` to the GitHub repository
* Opens a page in my favourite browser:

![The new tutorial as it appears in a browser](images/InTheBrowser.webp)

If you click on the green GitHub repository link at the bottom of the menu, you will be taken to your new remote repository page. All the links are working.

<details class="note" open>
<summary>Why 99-Intro.md?</summary>
The new `Using-CSS-Counters` directory contains a Markdown file at `docs/md/99-Intro.md`. This is what has been converted into the HTML file at `docs/index.html`, which is what is now displaying in your browser.

Pandoc will treat all the files with an `.md` extension inside the `doc/md/` folder in alphabetical order.

To ensure that they are treated in the right order, I recommend that you use zero-padded names like `01-Getting-Started.md`, `02-Test-Early-Test-Often.md`.

If you don't use zero-padding, then `11-Advanced-Techniques.md` will be treated before `2-Test-Early-Test-Often.md`, because `11` comes _alphabetically_ before `2`.

However, the CSS that HTM-Elves uses to create a separate "page" for each Markdown file will automatically show the _last_ section when you first open the tutorial. (I'll explain this in detail in section [19. Target or Last Child?](#target-or-last-child).) For this reason, the _first_ Markdown page must have the _highest_ number.

So, by default, the first page is named `99-Intro.md`.
</details>

## Watching the HTML page update live

The browser current shows a static page, just to confirm that your new tutorial has been created. If you make changes to the files in `docs/md/`, this view will not update automatically. You can close the page, and use a better way to observe your changes live.

1. In the Terminal, `cd` into the `Using-CSS-Counters` folder
2. Run the command `npm run watch`, so that Watchman will trigger Pandoc each time a file in `docs/md/` changes
3. In VS Code's Explorer panel, locate `Using-CSS-Counters/docs/index.html`
4. Right-click on this file and select `Open With Live Server` from the drop-down menu.

Any changes you make to the files in `docs/md/` will now appear in real time in your browser. See [Live Reload with Live Server and Watchman](https://htm-elves.github.io/Getting-Started/#live-reload) in the Getting Started tutorial for details.

<details class="pivot" open>
<summary>Smart linking</summary>
The `npm run new` command added a [YAML](https://en.wikipedia.org/wiki/YAML) block at the start of the `99-Intro.md` file, which tells the `index.html` what headers, subheaders and links to use. This is how the link to the GitHub repository is defined.

The next section explains how this YAML block works, and how to customize it.

</details>
</section>

