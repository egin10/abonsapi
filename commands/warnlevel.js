const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warn = JSON.parse(fs.readFileSync("./config/warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    /**
     * command
     * /warnlevel @user
     * 
     * egin10
     */
    let info = new Discord.RichEmbed()
      .setTitle("Cara menggunakan perintah **warnlevel**")
      .setColor("RANDOM")
      .addField("Contoh perintah", "a!warnlevel @member")
      .addField("Fungsi warnlevel", "Melihat jumlah warning pada user yang di mention/tag.");
    if(args[0] == "help") return message.channel.send(info);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Kamu tidak memiliki izin.");

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("User tidak di temukan.");

    let warnlevel = warn[wUser.id].warns;

    message.reply(`<@${wUser.id}> telah memiliki ${warnlevel} peringatan.`);

}

module.exports.help = {
  name: "warnlevel"
}