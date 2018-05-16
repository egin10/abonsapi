const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /ev codeOfJs
     * 
     * egin10
     */

    if(message.author.id !== '378940242876432396') return;

    // let eval = new Discord.RichEmbed()
    // .setTitle("**Evaluate JavaScript**")
    // .setColor("RANDOM")
    // .addField(":inbox_tray: **Input**", code)
    // .addField(":outbox_tray: **Output**", eval(toString(code)));
    
    message.channel.send(args);
}

module.exports.help = {
    name : "ev"
}