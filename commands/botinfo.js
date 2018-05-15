const Discord = require("discord.js");
const botconfig = require("./../config/bot.json");

module.exports.run  = async (bot, message, args) => {

    /**
     * command
     * /serverinfo
     * 
     * egin10
     */
    _prefix          = botconfig.prefix;
        if(botconfig[message.guild.id]){
            _prefix  = botconfig[message.guild.id].prefix;
        }

    let bicon       = bot.user.displayAvatarURL;
    let botEmbed    = new Discord.RichEmbed()
        .setDescription("**Informasi Server**")
        .setColor("#d802e8")
        .setThumbnail(bicon)
        .addField("Nama Bot", bot.user.username)
        .addField("Dibuat pada", bot.user.createdAt)
        .addField("Prefix", _prefix)
        .addField("Dibuat oleh", "It'sMe#0184");

    message.channel.send(botEmbed);
}

module.exports.help = {
    name : "botinfo"
}