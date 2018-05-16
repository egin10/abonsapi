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
    try {
        let code = args.join(" ");
        let evaled  = eval(code);

        if(typeof evaled === "string")
            evaled = require("util").inspect(evaled);
        
        let ev = new Discord.RichEmbed()
            .setTitle("Evaluate")
            .setColor("RANDOM")
            .addField(":inbox_tray: Input", evaled)
            .addField(":outbox_tray: Output", clean(evaled));
        
        message.channel.send(ev);
    } catch(err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
    name : "ev"
}

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}