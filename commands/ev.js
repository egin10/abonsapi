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
    const code = args.join(" ");
    
    // let eval = new Discord.RichEmbed()
    // .setTitle("**Evaluate JavaScript**")
    // .setColor("RANDOM")
    // .addField(":inbox_tray: **Input**", code)
    // .addField(":outbox_tray: **Output**", eval(toString(code)));
    
    // message.channel.send(eval);
    try {
        const evaled = eval(code);
        const clean = await bot.clean(bot, evaled);
        if (code) {
            const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setColor("RANDOM")
            .addField(":inbox_tray: **Input**", `${code}`)
            .addField(":outbox_tray: **Output**", `\`\`\`js\n${clean}\n\`\`\``)
            message.channel.send(embed);
        } else {
            const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setColor("RANDOM")
            .addField(":inbox_tray: **Input**", `none`)
            .addField(":outbox_tray: **Output**", `\`\`\`js\n${clean}\n\`\`\``)
            message.channel.send(embed);
        }
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${await bot.clean(bot, err)}\n\`\`\``);
    }
}

module.exports.help = {
    name : "ev"
}