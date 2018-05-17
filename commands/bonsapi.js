const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let m = await message.channel.sendMessage('What ? :unamused: ');
    m.delete();
}

module.exports.help = {
    name: "bonsapi"
}