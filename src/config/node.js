import { path } from "@vuepress/utils";

const __dirname = path.resolve('node_modules/vuepress-plugin-anchor-right');
export default (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-anchor-right",
      clientConfigFile: path.resolve(__dirname, "./src/config/client.js")
    }
  };
};
