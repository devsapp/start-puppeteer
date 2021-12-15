async function preInit(inputObj) {
    console.log(`\n     _______  __   __  _______  _______  _______  _______  _______  _______  ______   
    |       ||  | |  ||       ||       ||       ||       ||       ||       ||    _ |  
    |    _  ||  | |  ||    _  ||    _  ||    ___||_     _||    ___||    ___||   | ||  
    |   |_| ||  |_|  ||   |_| ||   |_| ||   |___   |   |  |   |___ |   |___ |   |_||_ 
    |    ___||       ||    ___||    ___||    ___|  |   |  |    ___||    ___||    __  |
    |   |    |       ||   |    |   |    |   |___   |   |  |   |___ |   |___ |   |  | |
    |___|    |_______||___|    |___|    |_______|  |___|  |_______||_______||___|  |_|
                                        `)
}

async function postInit(inputObj) {

    console.log(`\n    Welcome to the puppeteer-app application
     This application requires to open these services: 
         FC  : https://fc.console.aliyun.com/
         ACR : https://cr.console.aliyun.com/
     
     * 额外说明：
        1. 在s.yaml中配置了部分自动化流程，使用的时候可以根据自身需求进行删除和变更
            - 部署之前，进行了项目的构建：s build --use-docker --dockerfile ./src/Dockerfile，要求您需要在当前环境安装好docker
        2. 进入项目，对s.yaml进行更新，将customContainerConfig字段下的镜像地址替换自己ACR服务中成目标镜像地址；
        3. 通过s deploy进行项目的部署；
     \n`)
}

module.exports = {
    postInit,
    preInit
}
