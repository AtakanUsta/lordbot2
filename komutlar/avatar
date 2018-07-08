const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kisi = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!kisi) return message.reply(":warning: `Lütfen Avatarına Bakmak İstediğin Kullanıcınında İsmini Yaz`");

        let usericon = kisi.user.avatarURL
        let bilgilerimembed = new Discord.RichEmbed()
            .setAuthor(`${kisi.user.username} Adlı Kişinin Avatarı`)
            .setColor("#00ff08")
            .setImage(usericon)


        message.channel.send(bilgilerimembed);
    

}

module.exports.help = {
    name: "avatar"
}
