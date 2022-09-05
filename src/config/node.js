import { path } from "@vuepress/utils";

export default (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-anchor-right",
      clientConfigFile: path.resolve(__dirname, "./client.js")
    }
  };
};
