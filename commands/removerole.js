const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    /**
     * command
     * /removerole @member rolename
     * 
     * egin10
     */

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Maaf, kamu tidak memiliki izin.");
    
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("User tidak ditemukan.");
    
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Masukan nama Role!");
    
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Role tidak ditemukan.");

    if(!rMember.roles.has(gRole.id)) return message.reply(`<@${rMember.id}> tidak memilik Role tersebut.`);
    await(rMember.removeRole(gRole.id));

    try{
        await rMember.send(`Sorry, you lost the ${gRole.name} role in ${message.guild.name}.`)
    }catch(e){
        message.channel.send(`Sorry <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
    }
}

module.exports.help = {
  name: "removerole"
}