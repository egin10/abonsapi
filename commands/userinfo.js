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
        online: "<:online:435163118591672343> Online",
        idle: "<:away:435163118692335616> Idle",
        dnd: "<:dnd:435163118444871691> Do Not Disturb",
        offline: "<:offline:435163118750924830> Offline"
    }
    
    user = user ? user : author;
    let uEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("ID", user.id, true)
    .addField("Username", user.username, true)
    .addField("Status", status[user.presence.status], true)
    .addField("Bot ?", user.bot ? `yap \:robot\:` : `bukan`, true);

    message.channel.send(uEmbed);
    
}

module.exports.help = {
    name : "userinfo"
}