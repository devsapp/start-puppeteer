# Puppeteer项目在阿里云函数计算的实践

本仓库提供了两个应用案例，分别是通过函数计算Node.js运行时部署Puppeteer项目，以及通过Container形式将Puppeteer项目部署到阿里云函数计算：

- [Puppeteer项目在阿里云函数计算的实践](#puppeteer项目在阿里云函数计算的实践)
  - [基于Nodejs运行时](#基于nodejs运行时)
  - [基于Container运行时](#基于container运行时)

## 基于Nodejs运行时

该项目模板是一个基于 puppeteer 的截图 Web 应用

- 初始化项目：`s init puppeteer-nodejs`
- 进入项目：`cd puppeteer-nodejs`
- 部署项目：`s deploy`

> 上述过程已经默认集成到了Yaml的action中，所以可以忽略

详细文档可以参考[puppeteer-nodejs案例文档](./puppeteer-nodejs/src)

## 基于Container运行时

该项目模板是一个基于 puppeteer 的截图 Web 应用

- 初始化项目：`s init puppeteer-container`
- 进入项目：`cd puppeteer-container`
- 在阿里云控制台启用 ACR（并且**创建镜像仓库(repo)，创建命名空间(namespace)**。）, NAS, 与 serverless 函数服务
- 修改 s.yaml 中 customContainerConfig 一项，将原本的`image: registry.cn-hangzhou.aliyuncs.com/${your_namespace}/${your_repo}:${version}`中，`${your_namespace}`替换为您创建的命名空间，将`${your_repo}`替换为您创建的镜像仓库名称，将`${version}`替换为构建后容器镜像版本（通过 docker images 查询）。
- 部署项目：`s deploy --use-local -y`

详细文档可以参考[puppeteer-container案例文档](./puppeteer-container/src)
