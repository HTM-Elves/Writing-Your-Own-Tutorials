<!-- 6. Activating Markdown Snippets -->
<section
  id="activating-markdown-snippets"
  aria-labelledby="activating-markdown-snippets"
  data-item="6. Activating Snippets"
>
<h2><a href="#activating-markdown-snippets">Activating Markdown Snippets</a></h2>

If you create a new file in VS Code, save it with the Markdown extension `.md`, and then type `sss` into it, nothing special will happen.

First you need two things:

1. To activate `quicksuggestions` for Markdown files
2. A file named `markdown.json` with some useful snippets.

## Activate `quicksuggestions` for Markdown files

To activate `quicksuggestions` for Markdown files, you need to:

1. Open the VS Code's Command Palette. The lazy way is to use the menu item `View > Command Palette`, but that means that you have to move your hands away from your keyboard, which wastes time. Instead, use the keyboard shortcut `Ctrl-Shift-P`, or simply `F1`.
2. Start typing some part of "Preferences: Configure Language Specific Settings". (I find that "Lang Set" is enough to bring the appropriate command to the top of the list.)

![Configure Language Specific Settings](images/LanguageSettings.webp)

3. Press Enter. You will see a list of all the languages that VS Code can handle. Start typing "Markdown", then press Enter when Markdown appears at the top of the list.

![Markdown Settings](images/MarkdownSettings.webp)

4. In the Search bar, `@lang:markdown` will already appear. Start adding the word `quicksuggestions`, until the entry "Editor: **Quick Suggestions**" appears.

![Editor: Quick Suggestions](images/quickSuggestions.webp)

5. For the item "other" click on the Pencil icon, which appears when you hover your mouse in the right place, then use the contextual menu to select `on`.
6. Click OK.

![Caption](images/ActivateQuickSuggestions.webp)


## Install some useful snippets

Now you can install some useful snippets in a special file called `markdown.json`. To open this file:

1. 1. Open the VS Code's Command Palette (`Ctrl-Shift-P`, or simply `F1`).
2. Start typing "snippets", until the command "Snippets: Configure Snippets" is at the top of the list.

![Caption](images/ConfigureSnippets.webp)

3. Press Enter.
4. You'll see a list of all the languages that VS Code can provide snippets for. Start typing "Markdown" until `markdown.json` is at the top of the list.

![Caption](images/MarkdownSnippets.webp)

5. Press Enter.
6. A file named `markdown.json` will open. It's not exactly a JSON file, because it supports JavaScript-like comments. It's probably just got comments in it and no snippets.
7. Copy the JSON from the code listing below and use this to replace the current contents of the file.

<details class="warn" open>
<summary>Summary</summary>
If there are already some Markdown snippets in the file, simply add the snippets from the code listing below, rather than replacing everything.

</details>

Here are the Markdown snippets that I use regularly in connection with HTM-Elves:

```json-w
{
	// Place your snippets for markdown here. Each snippet is
	// defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the 
	// snippet and the body will be expanded and inserted. Possible
	// variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and
	// ${1:label}, ${2:another} for placeholders. Placeholders with
	// the same ids are connected.

	// For more details, see
	// https://code.visualstudio.com/docs/editor/userdefinedsnippets

	"numbered section":{
		"body": [
			"<!-- ${1:${TM_FILENAME/(^(0*)([0-9]+)([0-9 _.-]*))|(\\..{1,4}$)|('(?:[a-z]|re|ve)(?=(?:[\\s_.-]|$)))|([a-z0-9]+)|([\\s-_.-]+)|(.)/$3${3:+. }$6${7:/capitalize}${8:+ }$9/gi}} -->\n<section\n  id=\"${2:${1/(^[0-9. ]+)|([a-z0-9]+)|([\\s_.-]+)|(.)/${2:/downcase}${3:+-}/gi}}\"\n  aria-labelledby=\"$2\"\n  data-item=\"${3:${1/(^[0-9. ]+)|([\\s_\\.-]+)|('(?:[a-z]|re|ve)(?=(?:[\\s_.-]|$)))|(\\w+)/$1${2:+ }$3${4:/capitalize}/g}}\"\n>\n  <h2><a href=\"#$2\">${4:${3/(^[0-9. ]+)|([_\\.-]+)|('(?:[a-z]|re|ve)(?=(?:[\\s_.-]|$)))|(\\w+)/${2:+ }$3${4:/capitalize}/g}}</a></h2>\n  $0\n\n</section>"
		],
		"prefix": "sss",
		"description": "id+data-item+header from file name"
	},
	// See Open VS Code Issue: #112362
	// https://github.com/microsoft/vscode/issues/112362#issuecomment-947556633
	"section": {
		"prefix": "section",
		"body": [
			"<section\n  id=\"${1:section-id}\"\n  aria-labelledby=\"$1\"\n  data-item=\"${2:Title for Menu}\"\n>\n  <h2><a href=\"#$1\">${3:$2}</a></h2>\n  $0\n</section>"
		],
		"description": "Customize id, data-item and header. Add content."
	},
	"details": {
		"prefix": "ddd",
		"body": [
			"<details class=\"${1|alert,challenge,env,feedback,note,pivot,question,tip,tldr,warn|}\"${2: open}>\n<summary>${3:Summary}</summary>\n${4:$TM_SELECTED_TEXT}\n\n</details>"
		],
		"description": "details element"
	},
	"javascript code block": {
		"prefix": "js",
		"body": [
			"```javascript\n$1\n```\n$0"
		],
		"description": "javascript code block"
	},
	"json code block": {
		"prefix": "json",
		"body": [
			"```json\n$1\n```\n$0"
		],
		"description": "json code block"
	},
	"html code block": {
		"prefix": "html",
		"body": [
			"```html\n$1\n```\n$0"
		],
		"description": "html code block"
	},
	"md code block": {
		"prefix": "md",
		"body": [
			"```md\n$1\n```\n$0"
		],
		"description": "markdown code block"
	},
	"css code block": {
		"prefix": "css",
		"body": [
			"```css\n$1\n```\n$0"
		],
		"description": "css code block"
	},
	"bash code block": {
		"prefix": "bash",
		"body": [
			"```bash-#w\n$1\n```\n$0"
		],
		"description": "bash code block without numbering"
	},
	"insert image": {
		"prefix": "img",
		"body": [
			"![${2:Caption}](images${1:/filename})"
		],
		"description": "insert image"
	}
}
```

<details class="pivot" open>
<summary>Taking time to save time</summary>
It's taken you several minutes to set up Markdown snippets, and you haven't actually typed any of the content for your tutorial yet. It's not obvious yet that these snippets will save you time. But trust me: once you see their power, you will want to create your own snippets for all the languages that you work with.

Check out the official [VS Code Snippet documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets) for more details.

Next, you'll see how I use a well-crafted snippet to generate a new `<section>` from each Markdown page I create.

</details>

</section>
