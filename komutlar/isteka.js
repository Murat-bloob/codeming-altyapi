const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
  
  let rol = message.mentions.roles.first()

  if(!rol) return message.reply('ayarlanacak rolü belirtmelisin.')
  
db.set(`rol_${message.guild.id}`, rol) 
  
  message.channel.send('Başarılı!,Kayıt rolü, '+rol+' olarak ayarlandı!')
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 3
};

exports.help = {
  name: 'taslak',
  description: 'taslak',
  usage: 'üyerolayarla'
};
