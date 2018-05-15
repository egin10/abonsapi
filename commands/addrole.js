const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    /**
     * command
     * /addrole @member rolename
     * 
     * egin10
     */

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Maaf, kamu tidak memiliki izin.");
    
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("User tidak ada.");
    
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Masukan nama Role!");
    
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Role tidak ada.");

    if(rMember.roles.has(gRole.id)) return message.reply(`<@${rMember.id}> sudah memiliki Role tersebut.`);

    await(rMember.addRole(gRole.id));

    try{
        await rMember.send(`Selamat, kamu telah diberi role ${gRole.name} di server ${message.guild.name}`);
    }catch(e){
        message.channel.send(`Selamat <@${rMember.id}>, kamu telah di beli role ${gRole.name} di server ini.`);
    }
}

module.exports.help = {
  name: "addrole"
}