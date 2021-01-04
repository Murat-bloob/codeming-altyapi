const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message) => {

  let c = message.mentions.channels.first()

       
    var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** \n Güvenik Kayıt logları`nın Gönderileceği kanalı etiketlemelisin!') 
   .setFooter('Örnek Kullanım: !güvenlik #kanal')
  .setColor('RED')
   if (!c) return message.channel.send(embed)
   db.set(`guvenlik${message.guild.id}`, c.id)
   var embed2 = new Discord.MessageEmbed()
  .setTitle('**Başarılı!** \n Güvenlik Kanalı **' + c.name + '** Olarak ayarlandı!') 
 .setColor('GREEN')
message.channel.send(embed2)

   
   

   }


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','security'],
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik',
  description: 'güvenlik',
  usage: 'güvenlik'
};