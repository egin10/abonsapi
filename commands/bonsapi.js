const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let m = await message.channel.sendMessage('What ? :unamused: ');
    
    setTimeout((m) => {
        m.delete();
    }, 5000);
}

module.exports.help = {
    name: "bonsapi"
}