const eleventyNavigation      = require("@11ty/eleventy-navigation")
const eleventySyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { JSDOM } = require('jsdom')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/asset/**/*" )
  // eleventyConfig.addPassthroughCopy("./src/**/*.css")
  eleventyConfig.addPlugin(eleventyNavigation     )
  eleventyConfig.addPlugin(eleventySyntaxHighlight)
  eleventyConfig.addFilter("article", (value) => {
    const DOM = new JSDOM(value)
    const article =
      DOM.window.document.querySelector("article")?.innerHTML ||
      DOM.window.document.body.innerHTML ||
      ''
    return `
    <head>
      <link href="/asset/css/style.css" rel="stylesheet" />
      <script src="https://unpkg.com/phosphor-icons"></script>

      <title>{{ title }}</title>
    </head>
    <div class="prose">
      ${ article }
    </div>`
  })
  return { dir: { 
    input : './src/', 
    output: './dist/'
  }}
}