# Puppeteer App

> 快速部署和体验Serverless架构下的Puppeteer应用

- [Puppeteer App](#puppeteer-app)
  - [体验前准备](#体验前准备)
  - [代码与预览](#代码与预览)
  - [快速部署和体验](#快速部署和体验)
    - [在线快速体验](#在线快速体验)
    - [在本地部署体验](#在本地部署体验)
  - [项目使用注意事项](#项目使用注意事项)
  - [应用详情](#应用详情)

## 体验前准备

该应用案例，需要您开通[阿里云函数计算](https://fcnext.console.aliyun.com/) 产品；并建议您当前的账号有一下权限存在`FCDefaultRole`。

## 代码与预览

- [:octocat: 源代码](https://github.com/devsapp/start-puppeteer/tree/master/puppeteer-nodejs/src)
- [:earth_africa: 效果预览](https://img.alicdn.com/imgextra/i4/O1CN01SIbofO1QhFdtCN6IB_!!6000000002007-2-tps-3316-1890.png)

## 快速部署和体验
### 在线快速体验

- 通过阿里云 **Serverless 应用中心**： 可以点击 [【🚀 部署】](https://fcnext.console.aliyun.com/applications/create?clone_url=https://github.com/huangfushan/hfs-test-5.git) ，按照引导填入参数，快速进行部署和体验。

<!-- mark, cloudshell 不支持 s build - 通过阿里云 **CloudShell**：可以点击 [【🏄 部署】](https://api.aliyun.com/new#/tutorial?action=git_open&git_repo=https://github.com/devsapp/devsapp-cloudshell-example.git&tutorial=tutorial/start-puppeteer-nodejs.md) ，按照引导填入参数，快速进行部署和体验。 -->


### 在本地部署体验

1. 下载安装 Serverless Devs：`npm install @serverless-devs/s` 
    > 详细文档可以参考 [Serverless Devs 安装文档](https://github.com/Serverless-Devs/Serverless-Devs/blob/master/docs/zh/install.md)
2. 配置密钥信息：`s config add`
    > 详细文档可以参考 [阿里云密钥配置文档](https://github.com/devsapp/fc/blob/main/docs/zh/config.md)
3. 初始化项目：`s init puppeteer-nodejs -d puppeteer-nodejs`
4. 进入项目并部署：`cd puppeteer-nodejs && s deploy`

> 在本地使用该项目时，不仅可以部署，还可以进行更多的操作，例如查看日志，查看指标，进行多种模式的调试等，这些操作详情可以参考[函数计算组件命令文档](https://github.com/devsapp/fc#%E6%96%87%E6%A1%A3%E7%9B%B8%E5%85%B3) ;

## 项目使用注意事项

项目Yaml中，声明了`actions`， 其对应的命令作用是初始化生成一个 NAS（多次执行， 会复用这个 default 生成的NAS）， 并且将依赖库上传到 NAS，执行函数的时候，执行实例通过设置的环境变量准确找到 /mnt/auto/ 上的依赖库。 

> puppeteer 安装包很大, 同时依赖一些 apt-get 包, 打包到代码很大，在这里， 将 apt-get 的安装包和 nodejs 的包 node_modules 上传到 NAS, 这个时候代码包大大瘦身， 同时 s deploy 能自动设置如下环境，使得函数能正常访问 puppeteer

```json
{
  "LD_LIBRARY_PATH": "/mnt/auto/root/usr/local/lib:/mnt/auto/root/usr/lib:/mnt/auto/root/usr/lib/x86_64-linux-gnu:/mnt/auto/root/usr/lib64:/mnt/auto/root/lib:/mnt/auto/root/lib/x86_64-linux-gnu:/mnt/auto/root/python/lib/python2.7/site-packages:/mnt/auto/root/python/lib/python3.6/site-packages:/code/.s/root/usr/local/lib:/code/.s/root/usr/lib:/code/.s/root/usr/lib/x86_64-linux-gnu:/code/.s/root/usr/lib64:/code/.s/root/lib:/code/.s/root/lib/x86_64-linux-gnu:/code/.s/root/python/lib/python2.7/site-packages:/code/.s/root/python/lib/python3.6/site-packages:/code:/code/lib:/usr/local/lib",
  "NODE_PATH": "/mnt/auto/node_modules:/usr/local/lib/node_modules:/code/node_modules",
  "PATH": "/code/.s/root/usr/local/bin:/code/.s/root/usr/local/sbin:/code/.s/root/usr/bin:/code/.s/root/usr/sbin:/code/.s/root/sbin:/code/.s/root/bin:/code:/code/node_modules/.bin:/code/.s/python/bin:/code/.s/node_modules/.bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/sbin:/bin",
  "PYTHONUSERBASE": "/code/.s/python"
}
```

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

此时，打开url, 就可以得到百度首页的截图：

![图片alt](https://img.alicdn.com/imgextra/i4/O1CN01TshrnO1VMFYl6nzyJ_!!6000000002638-2-tps-1539-892.png)

-----

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs   
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs   
> - Serverless Devs 钉钉交流群：33947367    