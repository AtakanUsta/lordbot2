const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("ADMINIASTOR")) return message.channel.send(":warning: `Bunu Yapmaya Yetkin Yok!`");
        


        let kanal = message.guild.channels.find('name', `💬sohbet`);
        let kanal2 = message.guild.channels.find('name', `📷foto-video`);
        let kanal3 = message.guild.channels.find('name', `💥bot-komutları`);
        let kanal4 = message.guild.channels.find('name', `📢anket`);
        let kanal5 = message.guild.channels.find('name', `x_o_x-odası`);
        let kanal6 = message.guild.channels.find('name', `boksmakinesi`);
        let kanal7 = message.guild.channels.find('name', `1v1-odası`);
        let kanal8 = message.guild.channels.find('name', `slot_makinesi`);
        let kanal9 = message.guild.channels.find('name', `hikaye_oluşturma`);
        let kanal10 = message.guild.channels.find('name', `şarkılardan_sözler`);

        let rol = message.guild.roles.find('name', "o");

        let rol2 = message.guild.roles.find('name', "❌Takipçiler❌");
        let rol3 = message.guild.roles.find('name', "💚Konuşkan Üye💚");
        let rol4 = message.guild.roles.find('name', "🔥LORD - Takipçi🔥");
        let rol5 = message.guild.roles.find('name', "💛ATN - Takipçi💛");
        let rol6 = message.guild.roles.find('name', "🧡Ultra Takipçi🧡");
        let rol7 = message.guild.roles.find('name', "💜Nihai Takipçi💜");
        let rol8 = message.guild.roles.find('name', "💚Aktif Üye💚"); 
        let rol9 = message.guild.roles.find('name', "Ultra destekçi");
        let rol10 = message.guild.roles.find('name', "Destekçi");

            if(!kanal) return message.channel.send(":warning: `Kanalını Bulamıyorum!`")

            kanal.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
             
            kanal.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol3, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
        kanal10.overwritePermissions(rol4, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
             kanal10.overwritePermissions(rol5, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
kanal10.overwritePermissions(rol6, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol7, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal2.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal3.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal4.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal5.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal6.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal7.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal8.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal9.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
kanal10.overwritePermissions(rol8, {'SEND_MESSAGES': false,})


            kanal.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol9, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
kanal10.overwritePermissions(rol10, {'SEND_MESSAGES': false,})







            let sohpetiaçembed = new Discord.RichEmbed()
            .setAuthor("Tüm Server Sohpeti Kapatıldı !", `${message.author.avatarURL}`)
            .setDescription(`${message.author.username} Adlı Yetkili Server Sohpetini Kapattı!`)
            .setColor("#d10000")
            .setFooter("(c) LordBot Mustafa Eren Tarafından Kodlanmıştır")
            .setTimestamp()
            .addBlankField()
            .addField("Sohpet Tekrar Açılanakadar Konuşulamaz!", "Yetkilinin Sohpeti Açması İçin Yazması Gereken : .serversohpetiaç")
            .addBlankField()

            kanal.send(sohpetiaçembed)
            kanal2.send(sohpetiaçembed)
            kanal3.send(sohpetiaçembed)
            kanal4.send(sohpetiaçembed)
            kanal5.send(sohpetiaçembed)
            kanal6.send(sohpetiaçembed)
            kanal7.send(sohpetiaçembed)
            kanal8.send(sohpetiaçembed)
            kanal9.send(sohpetiaçembed)
            kanal10.send(sohpetiaçembed)
            

            



        //kod bitiş
}

module.exports.help = {
    name: "serversohpetikapat"
}