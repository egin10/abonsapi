const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    /**
     * command
     * /jscode codeOfJs
     * 
     * egin10
     */
    let code = args.join(" ");

    let info = new Discord.RichEmbed()
        .setTitle("Cara menggunakan perintah **jscode**")
        .setColor("RANDOM")
        .addField("Contoh perintah", "a!jscode let a = 2;")
        .addField("Fungsi jscode", "Menampilkan pesan dalam bentuk linter code di discord chat (bukan eval()).");
    if(code == "help") return message.channel.send(info);

    try {
        message.channel.sendCode("js", clean(code));
    } catch(err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
    name : "jscode"
}

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}