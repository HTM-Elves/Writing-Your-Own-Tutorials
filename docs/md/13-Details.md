<section
id="details"
aria-labelledby="details"
data-item="Details"
>
<h2><a href="#details">Details</a></h2>

As you may have noticed, I like to include coloured blocks which you can collapse and ignore if you are in a hurry. These are handled by HTML `<details>` elements. The icons they use can be found in `MyTutorials.github.io/public/svg/`.

To create one, type the Markdown prefix `ddd` (for **d**etails). You'll be asked to choose one of the following styles:

![The dialog for the Details snippet](images/Details.webp)


## What the different `details` classes look like

<details class="note" open>
<summary>Note</summary>
This is a note.

</details>

<details class="feedback" open>
<summary>Feedback</summary>
This is a request for feedback.

</details>

<details class="tip" open>
<summary>Tip</summary>
This is a tip.

</details>

</details>
<details class="warn" open>
<summary>Warn</summary>
This is a warning.

</details>

<details class="alert" open>
<summary>Alert</summary>
This is a alert.

</details>

<details class="question" open>
<summary>Question</summary>
This is a question, to make you think ahead.

</details>

<details class="challenge" open>
<summary>Challenge</summary>
This is a challenge. You will be asked to find your own way to deal with a task before you reveal the solution.

<details class="solution">
<summary>Solution</summary>
You'll find the solution here.

</details>
</details>

<details class="tldr">
<summary>TL;DR</summary>
This is a deep dive into a topic. It's usually not open.

</details>

<details class="pivot" open>
<summary>Pivot</summary>
This concludes a section and introduces the next topic.

</details>

## Styling
The colours for the `<details>` elements are defined in the `:root` section of `MyTutorials.github.io/public/styles/`.

```css-#33
  /* Details */
  --alert:     #600;
  --challenge: #609;
  --env:       #069;
  --feedback:  #064;
  --note:      #040;
  --pivot:     #03c;
  --question:  #907;
  --solution:  #4069;
  --tip:       #960;
  --tldr:      #004;
  --warn:      #630;
```

The `background-color`s are generated using the newly available `color-mix` functional notation:

```css-#664
  background-color: color-mix(
    in oklab,
    var(--bg-color),
    var(--darker)
  );
```

In older browsers, the backgrounds should just appear plain.


</section>
