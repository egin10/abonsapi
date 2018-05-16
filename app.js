const botconfig = require('./config/bot.json');
const Discord   = require('discord.js');
const bot       = new Discord.Client({disableEveryone : true});
const fs        = require("fs");
bot.commands    = new Discord.Collection();

fs.readdir("./commands/", (err, file) => {
    if (err) console.log(err);
    
    let jsFile  = file.filter(f => f.split(".").pop() === "js" );
    if (jsFile.length <= 0) {
        console.log("Perintah tidak ditemukan!");
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on("ready", async () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    
    bot.user.setActivity(`a!help | ${bot.users.size} users in ${bot.guilds.size} servers.`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    
    let messageArray    = message.content.split(" ");
    let cmd             = messageArray[0];
    let args            = messageArray.slice(1);

    let commandFile     = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args);

    //greeting
    if(cmd === `${prefix}hai`) {
        return message.channel.send("Hai juga...");
    }

});

// bot.login(botconfig.token);

bot.login(process.env.TOKEN);
