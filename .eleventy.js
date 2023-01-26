const eleventyNavigation      = require("@11ty/eleventy-navigation")
const eleventySyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/**/*" )
  // eleventyConfig.addPassthroughCopy("./src/**/*.css")
  eleventyConfig.addPlugin(eleventyNavigation     )
  eleventyConfig.addPlugin(eleventySyntaxHighlight)
  eleventyConfig.addFilter("article", (value) => {
    return `
    <head>
      <link href="/assets/css/style.css" rel="stylesheet" />
      <script src="https://unpkg.com/phosphor-icons"></script>
      <title>{{ title }}</title>
    </head>
    <article class="prose">
      ${ value }
    </article>`
  })
  return { dir: { 
    input : './src/', 
    output: './dist/'
  }}
}