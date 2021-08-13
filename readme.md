## Deploy Puppeteer on Serverless Functions with Serverless Devs

## Description

通过该应用，您可以简单快速的创建一个 Puppeteer 框架到阿里云函数计算服务。

    下载命令行工具：`npm install -g @serverless-devs/s`
    初始化一个模版项目：`s init devsapp/start-puppeteer`

## Deploy using Nodejs 12 with NAS

### Prerequisite

- 下载命令行工具：`npm install -g @serverless-devs/s`
- 在 aliyun 控制台启用 NAS, 与 serverless 函数服务

### Deployment

```
cd nodejs12
s build --use-docker
s nas upload -r -n ./.s/build/artifacts/puppeteer-nodejs12/html2png/.s/root /mnt/auto/root
s nas upload -r -n ./.s/build/artifacts/puppeteer-nodejs12/html2png/node_modules  /mnt/auto/node_modules
s local start
```

Expected output is

```
[2021-08-11T11:03:46.053] [INFO ] [FC-LOCAL-INVOKE] - HttpTrigger httpTrigger of puppeteer-nodejs12/html2png was registered
	url: http://localhost:7928/2016-08-15/proxy/puppeteer-nodejs12/html2png/
	methods: GET,POST,PUT
	authType: anonymous

Tips for next step
======================
* Deploy Resources: s deploy
fc-puppeteer-nodejs12-html2png:
  status: succeed

function compute app listening on port 7928!
```

Then access the url given by the output via your browser

In a successful local run, check the example image at `.s/tmp/local/puppeteer-nodejs12/html2png/example`, the image of `www.baidu.com` will be shown -- that means the local run has been successful and it readly to be deployed.

Then deploy

```
s build --use-docker
s deploy
```

Similarly, a url in the output is where the http trigger is. Access the url via your browser and it goes like this:

![alt text](https://github.com/devsapp/start-puppeteer/blob/master/src/demo.png?raw=true)

## Deploy using Container

### Prerequisite

- 下载命令行工具：`npm install -g @serverless-devs/s`
- 在本地环境安装 docker 工具
- 在 aliyun 控制台启用 ACR, NAS, 与 serverless 函数服务

首先需要开通阿里云容器镜像(ACR), 并且**创建镜像仓库(repo)，创建命名空间(namespace)**。

然后修改 s.yaml 中 customContainerConfig 一项，将原本的`image: registry.cn-shenzhen.aliyuncs.com/${your_namespace}/${your_repo}:${version}`中，`${your_namespace}`替换为您创建的命名空间，将`${your_repo}`替换为您创建的镜像仓库名称，将`${version}`替换为构建后容器镜像版本（通过 docker images 查询）。

然后

```
cd custom-container
s build --use-docker --dockerfile ./src/Dockerfile
s deploy --push-registry acr-internet --use-local -y
```

这样本地构建的镜像可以直接自动上传到 aliyun 容器镜像服务里。打开 deploy 后产生的 url，可以访问已经部署的函数服务。
