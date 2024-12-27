const { resolve } = require('path')

const path = resolve("/Users/james/MERNCraft/HTM-Elves", "HTM-Elves.github.io", ".env")
require('dotenv').config({ path })

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

if (GITHUB_TOKEN) {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': 'Bearer %'.replace("%", GITHUB_TOKEN),
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  }

  const body = JSON.stringify({
    source: {
      "branch":"main",
      "path":"/docs"
    }
  })

  const URL = "https://api.github.com/repos/HTM-Elves/02-Writing-Your-Own-Tutorials/pages"

  fetch(URL, {
    method: 'POST',
    headers,
    body,
  })
    .then(response => response.json())
    .then(showResponse)
    .catch(error => console.error("GH-Pages Error:", error));

  function showResponse(response) {
    const { status, message, html_url } = response
    if (message) {
      console.log("GitHub Pages says:%n status:  %s%nmessage: %m"
      .replaceAll("%n", "\n")
      .replace("%s", status)
      .replace("%m", message)
      )
    } else {
      console.log(
        "Page will soon be available at %url"
        .replace("%url", html_url)
      )
    }
  }
}
