const Discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {
    
    /**
     * command
     * /serverinfo
     * 
     * egin10
     */

    let sicon       = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setDescription("**Informasi Server**")
        .setColor("#610768")
        .setThumbnail(sicon)
        .addField("Nama Server", message.guild.name)
        .addField("Dibuat pada", message.guild.createdAt)
        .addField("Kamu masuk pada", message.guild.joinedAt)
        .addField("Pemilik Server", message.guild.owner)
        .addField("Total Anggota", message.guild.memberCount);

    message.channel.send(serverEmbed);
}

module.exports.help = {
    name : "serverinfo"
}