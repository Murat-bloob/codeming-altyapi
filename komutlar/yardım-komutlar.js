const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {


   let embed = new Discord.MessageEmbed()   
   .setTitle(`Mikasa BOT -  Komutlar Yardım Menüsü`)
      .setThumbnail('https://images-ext-1.discordapp.net/external/Y9MJ814JrRBiii1oXBCFo1bJDFVIq6PrDcd7so0OSNU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/601390109891231764/611b3b930fe3fc9cbb6091cb75caa53e.png?width=473&height=473')
   .addField("!özelkomut-ekle :", "Sunucunuza Özel komutlar ekleyin!")     
   .addField("!komutlar-örnek :", "Resimli kullanış yardım göstergesi!") 
   .addField('!özelkomut-listesi', 'Sunucu da eklenen özel komutları gösteren ve kaç hakkınızın kaldığını gösteren menü.')        
  .addField('!kullanım-temizle', 'Özel Komutlar ı temizler.')
   .setTimestamp()
      .setFooter(`${message.author.username} Senin için yardım menüsünü gönderdim!`, message.author.avatarURL())  
      .setColor('#FFFFFF') 
           message.channel.send(embed)
     
 

  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımkomutlar'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar-yardım',
  description: 'komutlar yardım',
  usage: 'yardım-komutlar'
};
