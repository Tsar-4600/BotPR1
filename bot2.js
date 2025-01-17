const { Bot, InlineKeyboard } = require("grammy");

// Create a bot object
const bot = new Bot("8074470779:AAGHEAHnzA0hXmmSW6Nign3Vxoz_23mjF_g"); // <-- place your bot token in this string

// Register listeners to handle messages


// Команда /start
bot.command('start', (ctx)=> {
    const keyboard = new InlineKeyboard()
    .text('Опция 1', 'option1')
    .text('Опция 2', 'option2')
    .row()
    .text('Помощь',  'help');
    ctx.reply('Выберите одну из опций:', {reply_markup: keyboard});
});
// Обработка нажатий кнопок
bot.on('callback_query:data', (ctx) =>{
    const data = ctx.callbackQuery.data;
    switch(data)
    {
        case 'option1':
            ctx.answerCallbackQuery('Вы выбрали Опцию 1!');
            ctx.reply('Это содержание для Опции 1.');
            break;
        case 'option2':
            ctx.answerCallbackQuery('Вы выбрали Опцию 2!');
            ctx.reply('Это содержание для Опции 2.');
            break;
        case 'help':
            ctx.answerCallbackQuery('Выберите опцию для получения информации.');
            ctx.reply('Для получения информации выберите любую из опций.');
            break;
        default:
            break;
        
    }
});

bot.start();

console.log('Бот запущен...');