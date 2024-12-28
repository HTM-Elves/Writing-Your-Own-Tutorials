<section
id="live-reload"
aria-labelledby="live-reload"
data-item="3. Live Reload"
>
<h2><a href="#live-server">Live Reload with Live Server and Watchman</a></h2>

VS Code Marketplace provides a vast collection of free extensions for VS Code. One of these is [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), by Ritwick Dey. Live Server is a local development server with live reload feature. When you change contents of an HTML page served by Live Server, your browser automatically reloads the modified HTML page.

To install Live Server:

1. Choose the menu item View > Extensions, or click on the Extensions icon in the Activity Bar, as shown in Figure 6 below.
2. Start typing `Live Server` in the Search Bar at the top of the Extensions panel
3. Click on Live Server by Ritwick Dey
4. Click on the blue Install button.

![Install Live Server](images/InstallLiveServer.webp)

<details class="alert" open>
<summary>The right installations</summary>
There is another extension with the name "Live Server (Five Server)", by Yannick. It has a very similar logo, but this is not the extension that I recommend.

**Be sure to select Live Server by Ritwick Dey.**

**You must also have [Meta's open source Watchman service](https://facebook.github.io/watchman/) installed before you continue.**

</details>

## Using Live Server with Watchman

If you modify the file at `docs/md/99-intro.md` now, nothing will change in your browser. You need to start the Watchman service, to trigger Pandoc when any Markdown files change, and you need to serve `docs/index.html` with Live Server, so that the browser will reload the page each time Pandoc updates `docs/index.html`.

To do this:

1. Open a Terminal window on the `The-Basics` directory (or whatever directory you have created for your new tutorial).
2. Run the command `npm run watch`
3. In the Explorer pane, Right-Click on the file at `The-Basics/docs/index.html`
4. In the contextual menu that opens, choose Open With Live Server

![Making the browser update live as you edit the Markdown files](images/WatchLive.webp)

A new tab should open in your favourite browser, with a live version of your tutorial. If you now edit `docs/md/99-intro.md`, you should see the changes immediately in your browser.

![As you edit the Markdown files, the browser reloads index.html](images/LiveUpdate.webp)

<details class="pivot" open>
<summary>Side by Side</summary>
Pandoc has some specific opinions about where blank lines are required. If you don't respect these opinions, Pandoc might not format your pages the way you expect. Also, the captions for images are numbered dynamically, and sometimes you may want to refer to a particular image by its number.

For these reasons, I like to work with the live browser preview open alongside the Markdown page that I am editing (as shown in Figure 8 above).

You'll see in the next steps how to edit the settings for the title, headers and links, and also how to format the text itself. 

</details>
</section>