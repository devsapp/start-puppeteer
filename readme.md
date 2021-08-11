## Deploy Puppeteer on Serverless Functions with Serverless Devs

## Description

通过该应用，您可以简单快速的创建一个 Laravel 框架到阿里云函数计算服务。

    下载命令行工具：`npm install -g @serverless-devs/s`
    初始化一个模版项目：`s init devsapp/start-puppeteer`
    进入项目后部署项目：`cd nodejs12 && s deploy` or `cd custom-container && s deploy`


## Prerequisites

* Install Docker
* Activate CRS, NAS and serverless services in your Aliyun account


## Deploy using Nodejs 12 with NAS


```
cd nodejs12
s build --use-docker
s nas upload -r -n ./.s/build/artifacts/puppeteer-nodejs12/html2png/.s /mnt/auto/
s local start
# then access the url via your browser
```

In case of a successful local run, check the example image by `xdg-open .s/tmp/local/puppeteer-nodejs12/html2png/example`

Then deploy
```
s build --use-docker
s deploy
# access the url via your browser
```

![alt text](https://github.com/devsapp/start-puppeteer/blob/master/src/demo.png?raw=true)

## Deploy using Container

首先需要开通阿里云容器镜像(CRS), 并且**创建镜像仓库(repo)，创建命名空间(namespace)**。

然后修改s.yaml中customContainerConfig一项，将原本的`image: registry.cn-shenzhen.aliyuncs.com/puppeteer_namespace/puppeteer_repo:latest`中，`puppeteer_namespace`替换为您创建的命名空间，将`puppeteer_repo`替换为您创建的镜像仓库名称.

然后
```
cd custom-container
s build --use-docker
s deploy
```


