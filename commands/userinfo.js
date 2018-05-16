const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /userinfo @member
     * 
     * egin10
     */
    let user = message.mentions.users.first();
    let author = message.author;
    
    user = user ? user : author;
    let uEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("ID", user.id, true)
    .addField("Username", user.username, true)
    .addField("Status", user.presence.status, true)
    .addField("Bot ?", user.bot, true);

    message.channel.send(uEmbed);
    
}

module.exports.help = {
    name : "userinfo"
}