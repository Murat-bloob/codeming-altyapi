const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

     let user = message.mentions.users.first()  
 
  let hata3 = new Discord.MessageEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ', \n :white_small_square:  Anlaşılan Birileri yaramazlık Yapmış:interrobang: Ama kim yapmış! \n **!ban <kullanıcı>** şeklinde olmalı!')
 .setColor('000000')
 .setThumbnail('https://images-ext-1.discordapp.net/external/Y9MJ814JrRBiii1oXBCFo1bJDFVIq6PrDcd7so0OSNU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/601390109891231764/611b3b930fe3fc9cbb6091cb75caa53e.png?width=473&height=473')

  let hata4 = new Discord.MessageEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ',Hopss! Bir admini banlamaya çalışıyorsun.. Eğlenceli gibi görünüyor,Ama yapamazsın!')
 .setColor('000000')
.setFooter('Ne kadar tuhaf dimi?')
.setThumbnail('https://images-ext-1.discordapp.net/external/Y9MJ814JrRBiii1oXBCFo1bJDFVIq6PrDcd7so0OSNU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/601390109891231764/611b3b930fe3fc9cbb6091cb75caa53e.png?width=473&height=473')



let hata2 = new Discord.MessageEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' Sunucudan Birini yasaklamak için,**"ÜYELERİ ENGELLE"** Yetkisine,sahip olman gerekiyor.')
 .setColor('000000')
 .setThumbnail('https://images-ext-1.discordapp.net/external/Y9MJ814JrRBiii1oXBCFo1bJDFVIq6PrDcd7so0OSNU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/601390109891231764/611b3b930fe3fc9cbb6091cb75caa53e.png?width=473&height=473')
 


///////////////////////////////////////////////////ing


if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(hata2) 
if (message.mentions.users.cache.size < 1) return message.channel.send(hata3)    
if (message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.channel.send(hata4)      
    

     

 message.react('✅');    
    message.channel.send('**' + user + '**,**' + message.member.user.username + '** Tarafından Yasaklandı!')
 message.guild.members.ban(user, 2);
    
  
  

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'ban atmak',
  usage: 'ban'
};
