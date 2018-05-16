const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /ev codeOfJs
     * 
     * egin10
     */

    if(message.author.id !== '378940242876432396') return message.channel.send("Maaf, Kamu bukan Owner ku!");
    
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

    // let eval = new Discord.RichEmbed()
    // .setTitle("**Evaluate JavaScript**")
    // .setColor("RANDOM")
    // .addField(":inbox_tray: **Input**", code)
    // .addField(":outbox_tray: **Output**", eval(toString(code)));
    
    // message.channel.send(eval);
}

module.exports.help = {
    name : "ev"
}