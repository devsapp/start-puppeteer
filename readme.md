## Deploy Puppeteer on Serverless Functions with Serverless Devs


## Prerequisites

* Install serverless devs via `npm install  @serverless-devs/s -g` 
* Docker
* Activate CRS, NAS and serverless services in your Aliyun account

## Deploy using Nodejs 12 with NAS


#### Set Vpc configs
```
cd src/nodejs12
vim s.yaml
# edit vpc config as your aliyun NAS shows
```

![alt text](https://github.com/devsapp/start-puppeteer/blob/master/src/vpc.png?raw=true)

#### local test

```
sudo s build --use-docker
sudo s local start
# then access the website from browser locally
```

![alt text](https://github.com/devsapp/start-puppeteer/blob/master/src/demo.png?raw=true)


#### Deploy

```
sudo s build --use-docker
sudo s deploy
```

## Deploy using Container

```
cd src/custom-container
sudo s build --use-docker
sudo s deploy
```


