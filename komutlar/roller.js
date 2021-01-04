	const Discord = require('discord.js')
exports.run = (client, message, args) => {
const db = require('quick.db')
  
 

    
  	 try {
           const embed = new Discord.MessageEmbed()
	
      .setTitle('Sunucu da bulunan roller atılıyor.. \n Eğer çok fazla rol varsa bot hata verecektir!')
			.setColor('GREEN')
			.setTimestamp()
		message.channel.send(embed)

  
  		const embed2 = new Discord.MessageEmbed()
	
      .addField(`${message.guild.name} Sunucusunda ki Roller: \n`, message.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' , '))
			.setColor('GREEN')
			.setTimestamp()
		message.channel.send(embed2)
  
  } catch (err) {
		const embed = new Discord.MessageEmbed()
			.setTitle('**Hata** \n Sunucuda çok fazla rol var bot atamıyor!')
			.setColor('RED')
			.setTimestamp()
		message.channel.send({embed})
	}
    
    

}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 0
}
exports.help = {
	name: 'roller',
	description: 'sunucuda bulunan rolleri listeler',
	usage: 'roller'
}
