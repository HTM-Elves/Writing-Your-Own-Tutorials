<section
  id="minimum-tweaks"
  aria-labelledby="minimum-tweaks"
  data-item="Minimum Tweaks"
>
  <h2><a href="#minimum-tweaks">Minimum Tweaks to the Other Content</a></h2>

You probably want to redesign your home page entirely. My black and white minimalism may not suit you. In that case, you can just skim through this section to see how not to break anything.

I'll simply describe the least amount of changes you can make to make this page your own.

## Remove auto-generated text

The HTM-Elves don't know which name you chose for the GitHub organization which will be hosting your tutorials. The best they can do is read the `location` of the site where your home page is hosted, and use the `hostname` from there as their educated guess. 

They do this in the file at `MyTutorials/MyTutorials.github.io/private/script.js`:

```js
;(function useRepositoryNameForTitle() {
  const locations = Array.from(
    document.getElementsByClassName("location")
  )

  let { protocol, hostname, pathname } = location
```
```js-s
// 7 lines skipped //
```
```js-#17
  locations.forEach( location => location.innerText = hostname)

  const link = `https://github.com/orgs/${hostname}/repositories`
  const repoAnchor = document.querySelector("footer a")
  repoAnchor.href = link
})()
```

This function does two things that you won't need any more. You can remove it... but you'll need to make a couple of manual changes to your `index.html` file so that it works just as well without the `useRepositoryNameForTitle()` function. 

## Set your own Title and Header

The `useRepositoryNameForTitle()` function looks for elements in your `index.html` file which have the class `"location"`, and it replaces the content of those elements with the `hostname` that it read from the page's `location`.

You don't need this any more. In your `index.html` file, you can look for the `<title>` and `<header><h1>` tags, and replace their content with whatever you want to show.  In other words:

1. Remove the chunks that are highlighted in the code listing below:

```html
<i><!DOCTYPE html>
<html lang="en">
<head></i>
```
```html-s
<!-- lines skipped -->
```
```html-#11
<i>  <title </i><b>class="location"</b><i>>Title</title>
</head>
<body>
  <main>
    <header>
      <h1>Welcome to </i><b><span class="location"></b><i>Title</i><b></span></b></i>!</h1>
    </header></i>
```
```html-s
<!-- lines skipped -->
```
```html-#30
<i>  </main>
</body>
</html></i>
```

2. Use your own `title` and `header`:

```html
<i><!DOCTYPE html>
<html lang="en">
<head></i>
```
```html-s
<!-- lines skipped -->
```
```html-#11
<i>  <title></i><b>Your own Title</b><i></title>
</head>
<body>
  <main>
    <header>
      <h1></i><b>Whatever Welcome message you want</b><i></h1>
    </header></i>
```
```html-s
<!-- lines skipped -->
```
```html-#30
<i>  </main>
</body>
</html></i>
```

## Set the link to your GitHub repository

If you remove the `useRepositoryNameForTitle()` function, you should also manually set the `href` link for your GitHub repository in the footer.

1. Remove the `#` character

```html-#24
    <i><footer>
      <span>Updated December 2024</span>
      <a href="</i><b>#</b><i>">
        <img src="public/svg/github.svg" alt="GitHub">
       </a>
    </footer></i>
```
2. Replace it with the actual link to the GitHub repository of your organization:

```html-#24
    <i><footer>
      <span>Updated December 2024</span>
      <a href="</i><b>https://github.com/orgs/YourOrganizationName/repositories</b><i>">
        <img src="public/svg/github.svg" alt="GitHub">
       </a>
    </footer></i>
```

**After you have made these changes, you can delete the `useRepositoryNameForTitle()` function from `MyTutorials/MyTutorials.github.io/private/script.js`.**


## Customize your Overview message

The HTM-Elves added a paragraph (`<p id="replace"></p>`) to suggest how to customize your home page. You can remove this paragraph. 

```html-#15
    <i><header>
      <h1>Welcome to <span class="location">Title</span>!</h1>
    </header>
    <div class="overview">
      </i><b><p>Use this area to give an overview of your tutorials.</p></b><i>
    </div>
    <s><p id="replace"></p></s>
    <ul id="tutorials"></ul></i>
```

You can also edit the text inside the Overview div (`<div class="overview">`), to explain what the reader should expect.

```html-#15
    <i><header>
      <h1>Whatever Welcome message you want</h1>
    </header>
    <div class="overview">
      </i><b><p>Tutorials on the MERN stack</p>
      <p>HTML, CSS, SASS, JavaScript, NodeJS and more</p></b><i>
    </div>
    <ul id="tutorials"></ul></i>
```

## Styling

By default, `private/styles.css` will make the first paragraph slightly bigger and bolder. But you can edit `private/styles.css` to impose your own style

</details>

</section>