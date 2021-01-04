const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

           var embed = new Discord.MessageEmbed()    
      .setTitle(`Mikasa BOT - Yardım Menüsü`)
      .setThumbnail('https://i0.wp.com/www.asistech.in/wp-content/uploads/2018/01/server.png?w=512&ssl=1')
   .addField("!yardım-genel :", "Sunucu BOT,Genel komutları yardım menüsü")     
   .addField("!yardımhazır :", "Hazır Sunucu komutları yardım menüsü") 
   .addField('!yardımkomutlar', 'Kendi komutlarınızı oluşturduğunuz komutların,Komut menüsü')
  .addField('!yardım-moderasyon', 'moderasyon komutları yardım menüsü.')
  .setTimestamp()
      .setFooter(`${message.author.username} Senin için yardım menüsünü gönderdim!`, message.author.avatarURL())  
      .setColor('#FFFFFF') 
           message.channel.send(embed)

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım menüsü',
  usage: 'yardım'
};
