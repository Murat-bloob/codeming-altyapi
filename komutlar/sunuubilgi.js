const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
let insanlar = message.guild.members.cache.filter(m => !m.user.bot).size;
let botlar = message.guild.members.cache.filter(m => m.user.bot).size

  let anakanal = message.guild.systemChannel
  let yazı;
  if (anakanal == null) yazı = 'Kanal Bulunamadı! :no_entry: '
else yazı = `<#${anakanal}>`
    
  let inganakanal = message.guild.systemChannel
  let ingyazı;
  if (inganakanal == null) ingyazı = 'Channel Not Found! :no_entry: '
else ingyazı = `<#${anakanal}>`    
    ////////////////////////////////////

let userlist = message.guild.fetchBans();
  let bansayısı;
  if (userlist == 0) bansayısı = 'Banlanan Kullanıcı Bulunamadı! :no_entry:'
else bansayısı = `<${userlist}>`

  
  
  
  let level = message.guild.verificationLevel
let level0yazı = '**Güvenlik Önlemi Yok! :warning:**'
let level1yazı = '**Güvenlik Önlemi Düşük! :unlock: **'
let level2yazı = '**Güvenlik Önlemi Orta! :closed_lock_with_key: **'
let level3yazı = '**Güvenlik Önlemi Yüksek! :lock: **'
let level4yazı = '**Güvenlik Önlemi Süper Yüksek! :white_check_mark:  **'
let level5yazı = '**Güvenlik Önlemi İnanılmaz! :regional_indicator_o: :regional_indicator_m: :regional_indicator_g:  **'

let seviye = message.guild.verificationLevel

let levelyazı;
  
  if (seviye === 0) {
  levelyazı = level0yazı
  }
 if (seviye === 1) {
  levelyazı = level2yazı
  }

   if (seviye === 2) {
  levelyazı = level3yazı
  }

    if (seviye === 3) {
  levelyazı = level4yazı

    }
   
     if (seviye === 4) {
  levelyazı = level5yazı
  }

  var codeming = new Discord.MessageEmbed()
 .setAuthor(message.guild.name + ' Sunucu Bilgileri ',message.guild.avatarURL() || message.guild.defaultURL)
 .addField('Sunucu İD:', ' **' + message.guild.id + '**', true)
 .addField('Ana Kanal:', '**' + yazı + '**' , true)
 .addField('Güvenlik Seviyesi:', '**(' + level + ')** **' + levelyazı + '**' , true)
  .addField('Kanal Sayısı:', '**[' + message.guild.channels.size + ']** \n 🔊**' + message.guild.channels.cache.filter(i => i.type == "voice").size + '** 💬**' + message.guild.channels.cache.filter(m => m.type == "text").size + '**', true)
 .addField('Üye Bilgisi:','**[' + message.guild.memberCount  + ']** \n 👤**' + insanlar + '** 🖥**' + botlar + '**', true)
  .addField('Sunucu Bölgesi:', '**🌍 ' + message.guild.region + '**', true)
 .addField('Ban Sayısı:', '**' + bansayısı + '**')
  .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')', true) 
 .setThumbnail(message.guild.iconURL() || message.guild.defaultURL)
  .setColor('#FFF300')
 message.channel.send(codeming)

   

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['serverinfo','server-info'],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: '..',
  usage: 'sunucubilgi'
};