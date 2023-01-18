const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const eleventySyntaxHighlight  = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/style.css")
  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(eleventySyntaxHighlight )

  return {
    dir: { input: './src/', output: './dist/' }
  }
}