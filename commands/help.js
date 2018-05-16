const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /help
     * 
     * egin10
     */

    let help = new Discord.RichEmbed()
    .setTitle("**Hai! Saya AbonSapi.** :blush:")
    .setDescription("Dibawah ini adalah beberapa perintah yang bot AbonSapi ketahui.")
    .addField("AbonSapi", "`help, ping, botinfo, avatar, jscode`")
    .addField("Server", "`tempmute, warn, warnlevel, setmutetime, serverinfo, addrole, removerole`")
    .addField("Info Perintah", "a!<perintah> help")
    .addField("Invite Link", "[Invite](https://discordapp.com/api/oauth2/authorize?client_id=443858296781144065&permissions=451995702&scope=bot)")
    .setFooter("Terimakasih");
    
    message.channel.send(help);
    
}

module.exports.help = {
    name : "help"
}