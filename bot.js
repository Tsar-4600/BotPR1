const { Bot } = require("grammy");

// Create a bot object
const bot = new Bot("8074470779:AAGHEAHnzA0hXmmSW6Nign3Vxoz_23mjF_g"); // <-- place your bot token in this string

// Register listeners to handle messages
// bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));
bot.command('start', (ctx)=> {
    ctx.reply('Привет! Я просто бот. Напиши /help, чтобы узнать, что я умею!');
});
bot.command('help', (ctx)=>{
    ctx.reply('/start - приветствие\n/help - помощь\n/echo - повторить сообщение\n/joke - расскажи шутку');
})
bot.command('echo', (ctx)=>{
    const message = ctx.message.text.split('').slice(1).join('');
    ctx.reply(message || 'Пожалуйста, введите сообщение для повторения');
})
bot.command('joke', async (ctx)=>{
    const jokes = [
        '-Вчера долго пыталась объяснить бабуле, что работаю программистом. \n -Удалось? \n Короче, сошлись на том, что чиню телевизоры и развожу мышей.',
        '"Цирковая дочь" К девушке на дискотеке подходит парень и говорит: - Девушка, вашей маме зять не нужен?" Девушка издает звук утки. Давид испуганно отскакивает. Подходит второй парень со словами: - почему такая красивая девушка танцует одна? Девушка издает звук дельфина. паернь пугается, отходит, озираясь настороженно на странную девушку. Попытку предпринимает третий парень: - Девушка, позвольте угостить вас коктейлем? Девушка издает звук индюка (парень в страхе убегает) и звонит отцу: - Алле, пап, забери меня отсюда, вокруг одни животные, лезут и лезут'
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    await ctx.reply(randomJoke);
})
// Start the bot (using long polling)
bot.start();

console.log('Бот запущен...');