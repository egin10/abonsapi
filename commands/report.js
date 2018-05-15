const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    /**
     * command
     * /report @member reason
     * 
     * egin10
     */

    let rUser   = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("User tidak ditemukan!");
    let rReason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("**Laporan**")
        .setColor("RANDOM")
        .setThumbnail(rUser.displayAvatarURL)
        .addField("User dilaporkan", `${rUser} dengan ID: ${rUser.id}`)
        .addField("Dilaporkan oleh", `${message.author} dengan ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Waktu", message.createAt)
        .addField("Alasan", rReason);
        
    let reportsChannel  = message.guild.channels.find(`name`, "bot-abonsapi");
    if(!reportsChannel) return message.channel.send("Tidak, dapat menemukan Channel bot-abonsapi.");

    let m = message.delete().catch(O_o => {});
    reportsChannel.send(reportEmbed);
}

module.exports.help = {
    name : "report"
}