const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /ava @member
     * 
     * egin10
     */
    let user = message.mentions.users.first();
    let author = message.author;
    
    user = user ? user : author;
    let uEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setColor("RANDOM")
    .setImage(user.displayAvatarURL)
    .addField("url", toString(user.displayAvatarURL));

    message.channel.send(uEmbed);
    
}

module.exports.help = {
    name : "ava"
}