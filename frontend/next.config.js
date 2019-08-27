const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
	/* config options here */
});
const cssConfig = {
	cssModules: false,
	url: false
};
module.exports = withCSS({
	...cssConfig
});
