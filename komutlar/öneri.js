const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!User) return message.reply(":warning: `Kullanım : l!öner @[öneren kişi] [önerin]`");
        let öneri = args.join(" ").slice(22);
        if(!öneri) return message.reply(":warning: `Kullanım : l!öner @[öneren kişi] [önerin]`")

        let kanal = message.guild.channels.get("465219721784983603");


                let icon = message.author.avatarURL

        let embed = new Discord.RichEmbed()
        .setAuthor("Öneri Sistemi", icon)
        .setDescription(`${message.author.username} Adlı Kullanıcının Önerisi`)
        .setColor("#ffa100")
        .setFooter("LordBot Öneri Sistemi")
        .setTimestamp()
        .addBlankField()
        .addField("Öneride Bulunan Kişi", `${message.author.username}`)
        .addBlankField()
        .addField("Önerisi", `${öneri}`)
        .addBlankField()
        .addField("Önerim Nerde Gözüküyor?", `Önerin **https://discord.gg/eaPEC8f** Bu Serverda Öneriler Kanalında Gözükür`)
        .addBlankField()
        
        // let kullanici = message.author
        
        let embed2 = new Discord.RichEmbed()
        .setAuthor("Öneri Sistemi", icon)
        .setDescription(`${message.author.username} Adlı Kullanıcının Önerisi`)
        .setColor("#ffa100")
        .setFooter("LordBot Öneri Sistemi")
        .setTimestamp()
        .addBlankField()
        .addField("Öneride Bulunan Kişi Bilgileri", `**Kullanıcı Adı :** ${message.author.username} \n**Kullanıcının Bulunduğu Server :** ${message.guild.name} \n**Kullanıcının Bulunduğu Kanal :**${message.channel}`)
        .addBlankField()
        .addField("Önerisi", `${öneri}`)
        .addBlankField()

        

                message.channel.send(embed).then(msg => { msg.delete(10000) } );
                
        
        
                bot.channels.get("465219721784983603").send(embed2)


        //kod bitiş
}

module.exports.help = {
    name: "öner"
}
