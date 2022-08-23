const { path } = require("@vuepress/utils");

module.exports = (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-anchor-right",
      clientConfigFile: path.resolve(__dirname, "./client.js"),
      onInitialized(app) {
        app.pages.forEach(element => {
          element.contentRendered = `<div class="anchor-right"></div>${element.contentRendered}`;
        });
      },
    };
  };
};
