const fs = require('fs');
const ayarlar = require("../ayarlar.json");
const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (bot, message, args) => {

 let davetlog = JSON.parse(fs.readFileSync('./ayarlar/davetlog.json', 'utf8'));
  let kanalid = message.channel.id,
    guildID = message.guild.id,
    davetlkanal;

  if (guildID in davetlog) davetlkanal = bot.channels.cache.get(davetlog[guildID]).name;
  else davetlkanal = "Ayarlanmamış";
    var embed1 = new Discord.MessageEmbed()
  .setTitle('**Hata!** \n Bir Kanal ya da Durum belirtmen gerekiyor! \n **----------------------------------------------------** \n Örnek Kullanımlar: \n **!ayar davetlog #davet-log** // Davet Log Kanalı ayarlar. \n **!ayar davetlog kapat** // Davet Log kanalını kapatır')
   .setFooter(`Şuan ki Davet Log Kanalı: ${davetlkanal} (${davetlog[guildID] == undefined ? "" : davetlog[guildID]}) `)
  .setColor('RED')
  if (!args[0]) 
return message.channel.send(embed1)


  switch (args[0]) {
    case "davetk":
    case "davetkanal":
    case "davetlog":
      if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send('You must have **"ADMİNİSTRATOR"** permission to use this command!');
      if (!args[1]) return message.channel.send("Davet LOG Ayarlanacak kanalı etiketlemelisin!");
      if (args[1].toLowerCase() == "kapat") {
        delete davetlog[guildID];
        fs.writeFile('./ayarlar/davetlog.json', JSON.stringify(davetlog), (err) => {
          if (err) console.log(err);
        });
        message.channel.send("Davet LOG Kanalı Devre dışı bırakıldı!");
      } else {
        if (!message.mentions.channels.first()) return message.channel.send("Davet LOG Ayarlanacak kanalı etiketlemelisin!");
        davetlog[guildID] = message.mentions.channels.first().id;
        fs.writeFile('./ayarlar/davetlog.json', JSON.stringify(davetlog), (err) => {
          if (err) console.log(err);
        });
    const embedyardim = new Discord.MessageEmbed()
 .setTitle(`Başarılı! \n Davet LOG kanalı,**<#${davetlog[guildID]}>** Olarak ayarlandı!`)
  .setColor('000000')
        message.channel.send(embedyardim)
      }
   
  }

//CodEming /Yasin..
}



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["regulation"],
  permLevel: 3
};

module.exports.help = {
  name: 'ayar',
  description: '',
  usage: 'davet'
};