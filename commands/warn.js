const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./config/warnings.json", "utf8"));
let muteTime = JSON.parse(fs.readFileSync("./config/mutetime.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    /**
     * command
     * /warn @user reason
     * 
     * egin10
     */
    let info = new Discord.RichEmbed()
        .setTitle("Cara menggunakan perintah **warn**")
        .setColor("RANDOM")
        .addField("Contoh perintah", "a!warn @member alasan")
        .addField("Fungsi warn", "Melakukan Warning kepada user, warn 1 = peringatan, warn 2 = user akan di mute selama (setmutetime), warn 3 = user akan di kick.");
    if(args[0] == "help") return message.channel.send(info);

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Kamu tidak memiliki izin.");
    
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("User tidak ditemukan.");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Kamu tidak memiliki izin.");
    
    let reason = args.join(" ").slice(22);
    if(!reason) return message.reply("Alasan tidak boleh kosong!");

    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./config/warnings.json", JSON.stringify(warns, null, 2), (err) => {
      if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("User telah diwarning", `<@${wUser.id}>`)
    .addField("Warning di", message.channel)
    .addField("Jumlah warning", warns[wUser.id].warns)
    .addField("Alasan", reason);

    let warnchannel = message.guild.channels.find(`name`, "bot-abonsapi");
    if(!warnchannel) return message.reply("Tidak ada channel bot-abonsapi.");

    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 2){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.reply("Kamu tidak memiliki izin membuat Role tersebut.");

      let mutetime = muteTime[message.guild.id].time;
      await(wUser.addRole(muterole.id));
      message.channel.send(`<@${wUser.id}> telah di mute untuk selama ${mutetime}.`);

      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> telah di unmuted.`)
      }, ms(mutetime))
    }
    
    if(warns[wUser.id].warns == 3){
      message.guild.member(wUser).ban(reason);
      message.reply(`<@${wUser.id}> telah di banned.`)
    }

}

module.exports.help = {
  name: "warn"
}