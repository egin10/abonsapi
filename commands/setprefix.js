const Discord   = require("discord.js");
const fs        = require("fs");

module.exports.run  = async (bot, message, args) => {
    /**
     * command
     * /setprefix <newprefix>
     * 
     * egin10
     */

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Maaf, kamu tidak memiliki izin.");
    let prefixes = JSON.parse(fs.readFileSync("./config/prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefix : args[0]
    };

    fs.writeFile("./config/prefixes.json", JSON.stringify(prefixes, null, 2), err => {
        if(err) console.log(err);
    });

    let sEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Pengaturan prefix!")
        .setDescription(`Prefix telah diatur menjadi **${prefixes[message.guild.id].prefix}**`);
    
    message.channel.send(sEmbed);

}

module.exports.help = {
    name :  "setprefix"
}