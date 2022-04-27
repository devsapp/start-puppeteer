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
     \n`)
}

module.exports = {
    postInit,
    preInit
}
