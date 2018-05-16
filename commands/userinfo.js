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

    let status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline"
    }
    
    user = user ? user : author;
    let uEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("ID", user.id, true)
    .addField("Username", user.username, true)
    .addField("Status", status[user.presence.status], true)
    .addField("Bot ?", user.bot ? `yap` : `bukan`, true);

    message.channel.send(uEmbed);
    
}

module.exports.help = {
    name : "userinfo"
}