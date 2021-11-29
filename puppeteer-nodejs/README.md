# Puppeteer App

该项目模板是一个基于 puppeteer 的截图 Web 应用

- 初始化项目：`s init puppeteer-nodejs`

- 进入项目：`cd puppeteer-nodejs`

- 构建项目：`s build --use-docker`

- 部署项目：`s deploy`

部署成功, 还需要记得将依赖项上传到 NAS:

```bash
s nas upload -r -n ./.s/build/artifacts/puppeteer-test/html2png/.s/root /mnt/auto/root
s nas upload -r -n ./.s/build/artifacts/puppeteer-test/html2png/node_modules  /mnt/auto/node_modules
```

> puppeteer 安装包很大, 同时依赖一些 apt-get 包, 打包到代码很大，在这里， 将 apt-get 的安装包和 nodejs 的包 node_modules 上传到 NAS, 这个时候代码包大大瘦身， 同时 s deploy 能自动设置如下环境，使得函数能正常访问 puppeteer

```json
{
  "LD_LIBRARY_PATH": "/mnt/auto/root/usr/local/lib:/mnt/auto/root/usr/lib:/mnt/auto/root/usr/lib/x86_64-linux-gnu:/mnt/auto/root/usr/lib64:/mnt/auto/root/lib:/mnt/auto/root/lib/x86_64-linux-gnu:/mnt/auto/root/python/lib/python2.7/site-packages:/mnt/auto/root/python/lib/python3.6/site-packages:/code/.s/root/usr/local/lib:/code/.s/root/usr/lib:/code/.s/root/usr/lib/x86_64-linux-gnu:/code/.s/root/usr/lib64:/code/.s/root/lib:/code/.s/root/lib/x86_64-linux-gnu:/code/.s/root/python/lib/python2.7/site-packages:/code/.s/root/python/lib/python3.6/site-packages:/code:/code/lib:/usr/local/lib",
  "NODE_PATH": "/mnt/auto/node_modules:/usr/local/lib/node_modules:/code/node_modules",
  "PATH": "/code/.s/root/usr/local/bin:/code/.s/root/usr/local/sbin:/code/.s/root/usr/bin:/code/.s/root/usr/sbin:/code/.s/root/sbin:/code/.s/root/bin:/code:/code/node_modules/.bin:/code/.s/python/bin:/code/.s/node_modules/.bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/sbin:/bin",
  "PYTHONUSERBASE": "/code/.s/python"
}
```

## 访问函数

直接使用 `s deploy` 步骤中使用生成的自定义域名访问函数:

![](https://img.alicdn.com/imgextra/i3/O1CN01zHn7rA26A0ie5k2NY_!!6000000007620-2-tps-945-123.png)
