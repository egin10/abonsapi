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
        
        message.channel.sendCode("xl", clean(evaled));
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