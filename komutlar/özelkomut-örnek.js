const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  message.channel.send('Sistem girişimi onayladı! \n Gerekli bilgiler gönderiliyor..')
  
  var embed1 = new Discord.MessageEmbed()
  .setTitle('**#1 Adım**')
.setDescription('**Hadi Başlayalım!** \n Öncelikle bir Özel Komut ekleyelim. \n **!özelkomut-ekle (ne yazılmalı?) (ne cevabı vermeli?)**')
  .setImage('https://media.discordapp.net/attachments/600312544938164251/619664738233614388/Ekran_Alnts.PNG')
  
 let embed2 = new Discord.MessageEmbed()
 .setTitle('**#2 Adım**')
 .setDescription('Evet! Başardık,Bir Özel Komut ekledik! Hadi onu **liste** Komutu ile,Kontrol edelim..')
 .setImage('https://media.discordapp.net/attachments/600312544938164251/619665455061139477/Ekran_Alnts2.PNG')
 
 
 let embed3 = new Discord.MessageEmbed()
 .setTitle('**#2 Adım Bilgilendirme**')
 .setDescription('Evet Özel Komutumuz sisteme işlendi! bu harika.. Hadi kalan Özel Komut hakkımıza bakalım:')
 .setImage('https://media.discordapp.net/attachments/600312544938164251/619666106814169107/Ekran_Alnts3.PNG') 
 
  let embed4 = new Discord.MessageEmbed()
 .setTitle('**#2 Adım Bilgilendirme**')
 .setDescription('Evet bir tane kullandık artık 4 hakkımız kaldı! Bu güzel..') 
  
    let embed5 = new Discord.MessageEmbed()
 .setTitle('**#3 Adım**')
 .setDescription('O da ne? Yazım hatası mı!? Olamaz! hemen silmeliyiz.')
 .setImage('https://media.discordapp.net/attachments/600312544938164251/619669658710310971/Ekran_Alnts5.PNG') 
    
      let embed6 = new Discord.MessageEmbed()
 .setTitle('**#3 Adım Bilgilendirme**')
 .setDescription('Evet! Galiba..**' + message.guild.name + '**Sunucumuz bir Premium sunucu değil! \n Hepsini silmek zorundayız!')
 .setImage('https://media.discordapp.net/attachments/600312544938164251/619670515845562394/Ekran_Alnts9.PNG')
      
      
          let embed7 = new Discord.MessageEmbed()
 .setTitle('**#3 Adım Bilgilendirme**')
 .setDescription('Hadi **OK** işaretine basıp,Şu işi bitirelim!')
 .setImage('https://media.discordapp.net/attachments/600312544938164251/619671409680973837/Ekran_Alnts11.PNG')
          
          
            let embed8 = new Discord.MessageEmbed()
 .setTitle('**#3 Adım Bilgilendirme**')
 .setDescription('Evet Başardık! İşte bu kadar..')
 .setImage('https://media.discordapp.net/attachments/600312544938164251/619671440299393034/Ekran_Alnts12.PNG')
  
  message.channel.send(embed1)
  message.channel.send(embed2)
  message.channel.send(embed3)
  message.channel.send(embed4)
  message.channel.send(embed5)
  message.channel.send(embed6)
  message.channel.send(embed7)
  message.channel.send(embed8)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'özelkomut-örnek',
  description: 'taslak',
  usage: 'özelkomut-örnek'
};
