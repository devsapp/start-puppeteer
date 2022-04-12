#  阿里云函数计算 Puppeteer 网页截图案例

> 快速部署和体验 Serverless 架构下的 Puppeteer 网页截图案例

- [阿里云函数计算 Puppeteer 网页截图案例](#阿里云函数计算-puppeteer-网页截图案例)
  - [体验前准备](#体验前准备)
  - [代码](#代码)
  - [快速部署和体验](#快速部署和体验)
    - [在线快速体验](#在线快速体验)
    - [在本地部署体验](#在本地部署体验)
    - [调用函数](#调用函数)

## 体验前准备

该应用案例，需要您开通[阿里云函数计算](https://fcnext.console.aliyun.com/) 产品；并建议您当前的账号有权限存在`FCDefaultRole`。

## 代码

- [:octocat: 源代码](https://github.com/devsapp/start-puppeteer/tree/master/puppeteer-container/src)

## 快速部署和体验
### 在线快速体验

- 通过阿里云 **Serverless 应用中心**： 可以点击 [【🚀 部署】](https://fcnext.console.aliyun.com/applications/create?template=start-word2pdf) ，按照引导填入参数，快速进行部署和体验。

### 在本地部署体验

1. 下载安装 Serverless Devs：`npm install @serverless-devs/s` 
    > 详细文档可以参考 [Serverless Devs 安装文档](https://github.com/Serverless-Devs/Serverless-Devs/blob/master/docs/zh/install.md)
2. 配置密钥信息：`s config add`
    > 详细文档可以参考 [阿里云密钥配置文档](https://github.com/devsapp/fc/blob/main/docs/zh/config.md)
3. 初始化项目：`s init puppeteer-container -d puppeteer-container`
4. 进入项目并部署：`cd puppeteer-container && s deploy`

### 调用函数

直接使用 `s deploy` 步骤中使用生成的自定义域名访问函数:

![](https://img.alicdn.com/imgextra/i3/O1CN01zHn7rA26A0ie5k2NY_!!6000000007620-2-tps-945-123.png)

函数调用成功后，默认返回百度首页网页截图，如果想截图对指定 url 截图， 只需要在域名后面加上 query，比如 `url=https://www.taobao.com` 就实现对淘宝首页截图

通过 Serverless Devs 开发者工具，您只需要几步，就可以体验 Serverless 架构带来的降本提效的技术红利。

-----

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs   
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs   
> - Serverless Devs 钉钉交流群：33947367    
