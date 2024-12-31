---
title: Writing Your Own Tutorials
subtitle: to learn better and build your online reputation
month: December 2024
organization: HTM-Elves
repo: Writing-Your-Own-Tutorials
---
<section
id="intro"
aria-labelledby="intro"
data-item="Introduction"
>
<h2><a href="#intro">Introduction</a></h2>

This is the second article about using the HTM-Elves workflow to write your own tutorials. I am assuming that you have already read [Getting Started with HTM-Elves](https://htm-elves.github.io/Getting-Started), and that you have already:

- [x] Created your own GitHub Organization where you can publish tutorials
- [x] Forked the HTM-Elves repository, to use as the root of your tutorial   organization
- [x] Published your forked repository
- [x] Cloned your fork of the HTM-Elves repository to your local computer
- [x] Generated a GitHub personal access token and saved it in a `.env` file
- [x] Installed Pandoc and Watchman and a set of Node modules
- [x] Used HTM-Elves to generate a Demo tutorial 
- [x] Published the Demo tutorial in your GitHub tutorial organization.
- [x] Installed the Live Server VS Code extension
- [x] Activated VS Code's Markdown snippets, and installed a set of useful snippets

If not, read [Getting Started with HTM-Elves](https://htm-elves.github.io/Getting-Started) first, and follow the instructions step-by-step.

## What you'll find here

In this article, you will:

1. Create a new tutorial from scratch, in Markdown
2. Learn how to customize the HTML template
3. Review basic formatting techniques in Markdown
4. Use Markdown snippets to display code listings with syntax highlighting
5. Discover advanced syntax-highlighting and line-numbering tricks
6. See how to insert images with customized captions
7. Update the index for your tutorials.

## A mini tutorial

Over the following pages, I will be writing a mini tutorial which illustrates the main techniques that you can use with HTM-Elves. You can find the completed mini tutorial [here](https://htm-elves.github.io/Using-CSS-Counters/).

<details class="tip" open>
<summary>Setting sights on the goal</summary>
I suggest that you **[open the completed mini tutorial in a separate window](https://htm-elves.github.io/Using-CSS-Counters/){target="htm-elves"}**, alongside this tutorial, so that you can see what your own work should look like as you follow each step.

If the link above opens in a new tab in the same browser window, select the new tab and drag it downwards, to create a new browser window, then rearrange your browser windows side-by-side.

</details>

<details class="pivot" open>
<summary>An Organization by any other name...</summary>
In the text that follows, I've imagined that you:

* Created a GitHub organization called `MyTutorials`
* Cloned a fork of [HTM-Elves.github.io](https://github.com/HTM-Elves/HTM-Elves.github.io) into your GitHub organization
* Named your fork to match the name of your organization (e.g.: `MyTutorials.github.io`)
* Created a folder on your development computer with the same name as your GitHub organization (e.g.: `MyTutorials`)
* Cloned you fork of HTM-Elves, named `MyTutorials.github.io`, into your `MyTutorials` folder.

In fact, you will have chosen a different name for your GitHub organization, so please use your own name everywhere that you see `MyTutorials`.

</details>
</section>
