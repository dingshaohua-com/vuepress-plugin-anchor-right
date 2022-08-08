import { path } from "@vuepress/utils";

module.exports = (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-anchor-right",
      clientConfigFile: path.resolve(__dirname, "./client.ts"),
      onInitialized(app) {
        app.pages.forEach(element => {
          element.contentRendered = `<div class="anchor-right"></div>${element.contentRendered}`;
        });
      },
    };
  };
};
