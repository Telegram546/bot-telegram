const TelegramApi = require('node-telegram-bot-api')
const token = '5383230774:AAGoTZm1-AX9uLycwhTe_LqeDsJI9IFADik'
const bot = new TelegramApi(token, {polling: true})

const start = () =>{
    bot.setMyCommands([
        {command: '/start', description:'Начальное приветствие'},
        {command: '/info', description:'Инвормация о пользователи'},
    ])
    
    bot.on('message', async msg=>{
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
            return bot.sendMessage(chatId, `Добро пожаловать в телеграмм бота.`)
        }
        if(text === '/info'){
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}` )
        }
        return bot.sendMessage (chatId, 'Я тебя не понимаю, попробуй еще раз!')
    })
}
start()