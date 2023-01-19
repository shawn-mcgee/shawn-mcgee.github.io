const eleventyNavigation      = require("@11ty/eleventy-navigation")
const eleventySyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/asset/**/*" )
  // eleventyConfig.addPassthroughCopy("./src/**/*.css")
  eleventyConfig.addPlugin(eleventyNavigation     )
  eleventyConfig.addPlugin(eleventySyntaxHighlight)
  eleventyConfig.addFilter("snippet", (value) => {
    return value.length > 144 ? value.substring(0, 144) + "..." : value
  })
  return { dir: { 
    input : './src/', 
    output: './dist/'
  }}
}