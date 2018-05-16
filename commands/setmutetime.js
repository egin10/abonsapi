const Discord = require('discord.js');
const fs      = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /setmutetime <time>
     * 
     * egin10
     */
    let info = new Discord.RichEmbed()
        .setTitle("Cara menggunakan perintah **setmutetime**")
        .setColor("RANDOM")
        .addField("Contoh perintah", "a!setmutetime waktu")
        .addField("Fungsi setmutetime", "Melakukan setting waktu untuk role mute.");
    if(args[0] == "help") return message.channel.send(info);

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Kamu tidak memiliki izin.");
    let mutetime = JSON.parse(fs.readFileSync("./config/mutetime.json", "utf8"));

    if(!args[0]) return message.channel.send("Kamu belum memasukan waktu (s/m/d)");

    mutetime[message.guild.id] = {
        time : ms(ms(args[0]))
    };

    fs.writeFile("./config/mutetime.json", JSON.stringify(mutetime, null, 2), (err) => {
        if (err) console.log(err)
    });
    
    message.channel.send(`Waktu mute member telah di set menjadi ${ms(ms(args[0]))}.`);
}

module.exports.help = {
    name : "setmutetime"
}