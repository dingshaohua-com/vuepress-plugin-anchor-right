<div align="center"> 
<h1>vuepress-plugin-anchor-right</h1>

![](https://img.shields.io/badge/vuepress_plugin_anchor_right-v0.0.1-brightgreen)
<br> <br>
vuepress-plugin-anchor-right一款用于vuepress2.x的插件。     
用于生成右侧导航目录锚点的功能！

![img](https://github.com/dingshaohua-cn/vuepress-plugin-anchor-right/blob/main/preview/img.jpg?raw=true)

![img](https://github.com/dingshaohua-cn/vuepress-plugin-anchor-right/blob/main/preview/img.gif?raw=true)

简体中文 | [English](./README-en.md)
</div>



## 🔨 使用

先安装

```shell
npm install -d vuepress-plugin-anchor-right
```

再引入你的项目

```js
// docs/.vuepress/config.js
const vuepressPluginAnchorRight = require ('vuepress-plugin-anchor-right') ;

module.exports = {
  ...,
  plugins: [
    [vuepressPluginAnchorRight()],
  ]
};
```

## 🤝 谢谢
如果这个项目对你有帮助，请帮忙点一个 Star。    
作者想进大厂需要有好的项目，期望您的一个赞帮我筑梦成功！