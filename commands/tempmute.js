const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    /**
     * command
     * /tempmute @user waktu
     * 
     * egin10
     */
    let info = new Discord.RichEmbed()
        .setTitle("Cara menggunakan perintah **tempmute**")
        .setColor("RANDOM")
        .addField("Contoh perintah", "a!tempmute @member waktu")
        .addField("Fungsi tempmute", "Melakukan mute pada user agar tidak dapat melakukan chat dan join voice channel selama waktu yang telah tentukan.");
    if(args[0] == "help") return message.channel.send(info);

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("User tidak ditemukan.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Kamu tidak memiliki izin!");
    let muterole = message.guild.roles.find(`name`, "muted");

    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#b7000f",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
      
    }

    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("Berikan waktu yang jelas!");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> telah di **mute** selama ${ms(ms(mutetime))}`);

    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> telah di unmuted!`);
    }, ms(mutetime));

}

module.exports.help = {
  name: "tempmute"
}