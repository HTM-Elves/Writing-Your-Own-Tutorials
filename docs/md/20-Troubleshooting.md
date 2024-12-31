<section
  id="troubleshooting"
  aria-labelledby="troubleshooting"
  data-item="Troubleshooting"
>
  <h2><a href="#troubleshooting">Troubleshooting</a></h2>
    
### Blank lines
As I've mentioned before, Pandoc expects different elements to be separated by blank lines. If you find that the formatting in your browser looks strange, check if adding a blank line won't fix it.

### Invalid Markdown
Watchman asks Pandoc to convert your Markdown files while you are editing your Markdown pages. As a result, your Markdown might sometimes be in an invalid state, which causes Pandoc to exit with an error.

If you notice that the browser version of your tutorial has stopped updating, return to the Terminal window where you ran `npm run pandoc` and execute the command again, if necessary.

### Reordering sections
Sections will be treated in alphabetical order. The best way to ensure they are treated in the order you want is to use zero-padded numbers for the file names, like `02-Things-to-do.md` and `03-Working-hands-free.md`

If you need to insert a section between two existing sections, you don't need to renumber everything. You can simply use a decimal point to add an intermediate number, like `02.5-Your-site-is-live.md`.

<details class="feedback" open>
<summary>Other issues</summary>
If you find any other issues with HTM-Elves, [create an issue](https://github.com/HTM-Elves/HTM-Elves.github.io/issues/new) for me on GitHub, and I will get back to you as soon as I can.

</details>

## _Enjoy!_

</section>