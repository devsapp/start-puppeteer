async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _______  __   __  _______  _______  _______  _______  _______  _______  ______   
    |       ||  | |  ||       ||       ||       ||       ||       ||       ||    _ |  
    |    _  ||  | |  ||    _  ||    _  ||    ___||_     _||    ___||    ___||   | ||  
    |   |_| ||  |_|  ||   |_| ||   |_| ||   |___   |   |  |   |___ |   |___ |   |_||_ 
    |    ___||       ||    ___||    ___||    ___|  |   |  |    ___||    ___||    __  |
    |   |    |       ||   |    |   |    |   |___   |   |  |   |___ |   |___ |   |  | |
    |___|    |_______||___|    |___|    |_______|  |___|  |_______||_______||___|  |_|
                                        `)
    console.log(`\n    Welcome to the puppeteer-app application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         CR : https://cr.console.aliyun.com/
     This application can help you quickly deploy the puppeteer-app project.
         Full yaml configuration : https://github.com/devsapp/fc/blob/jiangyu-docs/docs/zh/yaml.md
     The application homepage: https://github.com/devsapp/start-puppeteer\n`)
}

module.exports = {
    postInit,
    preInit
}
