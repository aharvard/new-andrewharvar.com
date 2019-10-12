const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(inclusiveLangPlugin);
};
