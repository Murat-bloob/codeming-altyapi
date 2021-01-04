const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const db = require('quick.db');
exports.run = (client, message, args) => {

    const embedyardim = new Discord.MessageEmbed()
        .setColor("GREEN")
 .setTitle('**Mikasa BOT,**Anlık ping durumu: **' + client.ws.ping + '**')
  .setColor('000000')
    .setThumbnail('https://images-ext-1.discordapp.net/external/Y9MJ814JrRBiii1oXBCFo1bJDFVIq6PrDcd7so0OSNU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/601390109891231764/611b3b930fe3fc9cbb6091cb75caa53e.png?width=473&height=473')
    .setFooter('Sunucu BOT Keyifli kullanımlar diler.') 
    message.channel.send(embedyardim)

    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pong","gecikme","servis"],
    permLevel: 0
};

exports.help = {
    name: 'ping',
};