# Puppeteer App

该项目模板是一个基于 puppeteer 的截图 Web 应用

- 初始化项目：`s init puppeteer-container`
- 进入项目：`cd puppeteer-container`
- 在阿里云控制台启用 ACR（并且**创建镜像仓库(repo)，创建命名空间(namespace)**。）, NAS, 与 serverless 函数服务
- 修改 s.yaml 中 customContainerConfig 一项，将原本的`image: registry.cn-shenzhen.aliyuncs.com/${your_namespace}/${your_repo}:${version}`中，`${your_namespace}`替换为您创建的命名空间，将`${your_repo}`替换为您创建的镜像仓库名称，将`${version}`替换为构建后容器镜像版本（通过 docker images 查询）。
- 构建项目：`s build --use-docker --dockerfile ./src/Dockerfile`
- 部署项目：`s deploy --use-local -y`


这样本地构建的镜像可以直接自动上传到 aliyun 容器镜像服务里。打开 deploy 后产生的 url，可以访问已经部署的函数服务。


## 访问函数

直接使用 `s deploy` 步骤中使用生成的自定义域名访问函数:

![](https://img.alicdn.com/imgextra/i3/O1CN01zHn7rA26A0ie5k2NY_!!6000000007620-2-tps-945-123.png)
