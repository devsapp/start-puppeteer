# start-puppeteer 帮助文档

<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=start-puppeteer&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=start-puppeteer" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=start-puppeteer&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=start-puppeteer" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=start-puppeteer&type=packageDownload">
  </a>
</p>

<description>

> ***该项目模板是一个基于 puppeteer 的截图 Web 应用***

</description>

<table>



</table>

<codepre id="codepre">

</codepre>

<deploy>

## 部署 & 体验

<appcenter>

-  :fire:  通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=start-puppeteer) ，
[![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=start-puppeteer)  该应用。 

</appcenter>

- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
    - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://www.serverless-devs.com/fc/config) ；
    - 初始化项目：`s init start-puppeteer -d start-puppeteer`   
    - 进入项目，并进行项目部署：`cd start-puppeteer && s deploy -y`

</deploy>

<appdetail id="flushContent">

# 应用详情

## 注意事项

项目Yaml中，声明了`actions`， puppeteer 安装包很大, 同时依赖一些底层 lib, s deploy 将相关的底层 lib 和 npm 包统一打包到代码包， 并自动设置好相应的环境变量 LD_LIBRARY_PATH 和 NODE_PATH

## 应用详情

Puppeteer 是一个 Node 库，它提供了高级的 API 并通过 DevTools 协议来控制 Chrome(或Chromium)。通俗来说就是一个 headless chrome 浏览器 (也可以配置成有 UI 的，默认是没有的), 可以完成很多自动化的事情， 比如：

- 生成网页截图或者 PDF

- 抓取单页应用(SPA)执行并渲染

- 做表单的自动提交、UI的自动化测试、模拟键盘输入等

- 用浏览器自带的一些调试工具和性能分析工具帮助我们分析问题

- 在最新的无头浏览器环境里做测试、使用最新浏览器特性

- ...

本应用是将 Puppeteer 生成网页截图的示例部署到阿里云函数计算（FC)。

通过 Serverless Devs 开发者工具，您只需要几步，就可以体验 Serverless 架构，带来的降本提效的技术红利。

部署完成之后，您可以看到系统返回给您的案例地址，例如：

![图片alt](https://img.alicdn.com/imgextra/i3/O1CN01zHn7rA26A0ie5k2NY_!!6000000007620-2-tps-945-123.png)

此时，打开url, 就可以得到 Serverless Devs 官网首页的截图:

![图片alt](https://img.alicdn.com/imgextra/i2/O1CN01DK9mJH1wxLHCDXO5e_!!6000000006374-0-tps-1200-5998.jpg)


</appdetail>

<devgroup>

## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
|--- | --- | --- |
| <center>微信公众号：`serverless`</center> | <center>微信小助手：`xiaojiangwh`</center> | <center>钉钉交流群：`33947367`</center> | 

</p>

</devgroup>