const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
 let dil = db.fetch(`dil_${message.guild.id}`)
  
let embed = new Discord.MessageEmbed()
 
.setTitle('Mikasa BOT -  Moderasyon Yardım Menüsü')
.addField('!ban', 'Belirlenen kullanıcıyı sunucudan yasaklamanızı sağlar.')
.addField('!kick', 'Belirtilen kullanıcıyı sunucudan atmanızı sağlar.')
.setThumbnail('https://images-ext-1.discordapp.net/external/Y9MJ814JrRBiii1oXBCFo1bJDFVIq6PrDcd7so0OSNU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/601390109891231764/611b3b930fe3fc9cbb6091cb75caa53e.png?width=473&height=473')
.setFooter(`${message.author.username} Senin için yardım menüsünü gönderdim!`, message.author.avatarURL())  
      .setColor('#FFFFFF') 


  
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help-moderation'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'moderasyon yardım menüsü',
  usage: 'yardım-moderasyon'
};