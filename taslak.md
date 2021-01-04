const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('TOKEN', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  message.channel.send('sa')


     } else {
        message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/BOTUNID/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
      }
  })
 
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'taslak',
  description: 'taslak',
  usage: 'taslak'
};
