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
        if(!code) return;

        let evaled  = eval(code);

        if(typeof evaled === "string")
        evaled = require("util").inspect(evaled, {dept : 0});
        
        let ev = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setTitle("Evaluate")
            .setColor("RANDOM")
            .addField(":inbox_tray: Input", `\`\`\`js\n${code}\`\`\``)
            .addField(":outbox_tray: Output", `\`\`\`js\n${evaled}\`\`\``);
        
        message.channel.send(ev);
    } catch(err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
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