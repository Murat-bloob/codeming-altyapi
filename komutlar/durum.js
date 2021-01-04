const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.author.id !== "419214688061227009") return message.channel.send("Sadece Sahibim durumumu görebilir!")
  var embed97 = new Discord.MessageEmbed()   
      .setTitle(`Ranger Test BOT - Durum`)
      .addField("**Durum:** :", 'Anlık Ping:** ' + client.ws.ping + '** \n Komut Sayısı:** ' + client.commands.size + '**')     
  .setColor("8B1578")
  
 message.channel.send(embed97)

let a = client.ws.ping
if (a > 120) {
  var embed9 = new Discord.MessageEmbed()   
      .setTitle(' <:warning:> **Yüksek Ping Uyarısı!**')
     .addField("Ping: ", client.ws.ping)
  .setColor("8B1578")
      .setFooter('Hayırr! Olamaz :(')  
 message.channel.send(embed9)  

message.channel.send(' <a:yukleniyor:600297875368443954> **Ranger Test BOT Yeniden başlıyor...**')
process.exit(0);
};


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durum'],
  permLevel: 0
};

exports.help = {
  name: 'durum',
  description: 'bot durumu',
  usage: 'durum'
};
