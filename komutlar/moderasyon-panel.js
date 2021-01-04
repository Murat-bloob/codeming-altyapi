
const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db')
exports.run = (client, message, args) => {

 let davetlog = JSON.parse(fs.readFileSync('./ayarlar/davetlog.json', 'utf8'));
let güvenlikkanal = db.fetch(`guvenlik${message.guild.id}`)

 let yazı;
  if (davetlog == null) yazı = 'Ayarlanmamış! :no_entry: '
else yazı = davetlog  

  
  
  let gyazı;
if (güvenlikkanal == null) gyazı = 'Ayarlanmamış! :no_entry: '
else gyazı = `<#${güvenlikkanal}>`



  
  let sunucu = message.guild.name
  
  var embed = new Discord.MessageEmbed()
  .setTitle('**' + sunucu + '** Mikasa Bot Ayarları')
  .addField('Davet LOG kanalı:', yazı, true)
  .addField('Güvenlik LOG Kanalı:', gyazı, true)
message.channel.send(embed)
            
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panel'],
  permLevel: 0
};

exports.help = {
  name: 'ayarlar',
  description: 'ayarlar bakmak',
  usage: 'ayarlar'
};

