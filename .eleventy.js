module.exports = function (eleventyConfig) {
  //eleventyConfig.setUseGitIgnore(false);
  //eleventyConfig.addWatchTarget("./src/_includes/css/");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.setTemplateFormats(["md", "liquid", "css", "html"]);
  //#eleventyConfig.addShortcode("version", function () {
  //#  return new Date().toDateString();
  //#});
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  }
};
