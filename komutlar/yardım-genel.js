const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
let dil = db.fetch(`dil_${message.guild.id}`)
     
           var embed = new Discord.MessageEmbed()    
      .setTitle(`Mikasa BOT - Genel Komutlar Yardım Menüsü`)
      .setThumbnail(message.guild.iconURL())
   .addField("!güvenlik :", "Sunucuya giren kullanıcılar`ın,Güvenlik seviyelerine bakar.Seçilen kanala gönderir.")     
   .addField("!dil :", "Bot dilini değiştirme,İngilizce ve Türkçe destekler.")          
 .addField("!ping :", "Bot mesaj gecikme Süresi!")
    .addField("!sunucubilgi :", message.guild.name + ' Sunucu bilgisi.')
      .addField("!davet :", 'Sunucuya katılanların kimin tarafından davet ettiğini,Eden kişi nin kaç daveti olduğunu gösterir')
          .addField("!roller :", 'Sunucudaki rolleri listeler.')
           .setTimestamp()
      .setFooter(`${message.author.username} Senin için yardım menüsünü gönderdim!`, message.author.avatarURL())  
      .setColor('#FFFFFF') 
message.channel.send(embed)

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['helpgeneral'],
  permLevel: 0
};

exports.help = {
  name: 'yardım-genel',
  description: 'yardım menüsü',
  usage: 'yardım-genel'
};
