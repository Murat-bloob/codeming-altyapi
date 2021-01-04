const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

  


  let komut1 = db.fetch(`sunucuKomut_${message.guild.id}`)
  let komut2 = db.fetch(`sunucuKomut2_${message.guild.id}`)
  let komut3 = db.fetch(`sunucuKomut3_${message.guild.id}`)
  let komut4 = db.fetch(`sunucuKomut4_${message.guild.id}`)
  let komut5 = db.fetch(`sunucuKomut5_${message.guild.id}`)
  
  let hata2 = new Discord.MessageEmbed()
 .setTitle('Bir Hata oluştu :(! \n **' + message.member.user.username + '** komut ekleyebilmek için,"ADMINISTRATOR" yetkisine Sahip olman gerekiyor.')
 .setColor('000000')
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hata2)
  
  if (!komut1) {
    var hata = new Discord.MessageEmbed()
.setTitle('Hata!')
.setDescription('**' +  message.guild.name + '** Sunucusunda,Silinecek Eklenmiş Komut Bulunamadı!')
.setFooter('Hmm.. Bu kötü! birileri özelliklerimi kullanmamış gibi duruyor :(')    
.setColor('RED')
message.channel.send(hata)    
return
  }
if (!args[0]) {
    var hata = new Discord.MessageEmbed()
 .setDescription('**Hatalı Kullanım!** \n Silinecek komutu belirtmelisiniz!  \n **Örnek Kullanım:** \n !kullanım-temizle 1 \n Komutlarınıza: \n **!özelkomut-listesi** \n Komutu ile bakabilirsiniz! \n  ------------------------ \n **:gem:  PREMİUM! :gem:** olmayan sunucular,Sadece: \n **!kullanım-temizle hepsi** \n Kullanabilir.')
.setColor('FB00FF')
.setThumbnail(message.author.avatarURL())
  
message.channel.send(hata)    
    
  return
}
  
  
  
   if(args[0] === "1") {
  var hata = new Discord.MessageEmbed()
.setTitle('Hata!')
.setDescription('**' +  message.guild.name + '** Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil! \n **:gem:  PREMİUM! :gem:** Olmayan sunucular,Sadece **!kullanım-temizle hepsi** Kullanabilir.')
.setFooter('PREMİUM! Olmamak çok kötü! Oysa ki daha eğlenceli..')    
.setColor('RED')
  message.channel.send(hata)
   return
   }
     if(args[0] === "2") {
  var hata = new Discord.MessageEmbed()
.setTitle('Hata!')
.setDescription('**' +  message.guild.name + '** Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil! \n **:gem:  PREMİUM! :gem:** Olmayan sunucular,Sadece **!kullanım-temizle hepsi** Kullanabilir.')
.setFooter('PREMİUM! Olmamak çok kötü! Oysa ki daha eğlenceli..')    
.setColor('RED')       
 message.channel.send(hata)
  return
     }
   if(args[0] === "3") {
  var hata = new Discord.MessageEmbed()
.setTitle('Hata!')
.setDescription('**' +  message.guild.name + '** Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil! \n **:gem:  PREMİUM! :gem:** Olmayan sunucular,Sadece **!kullanım-temizle hepsi** Kullanabilir.')
.setFooter('PREMİUM! Olmamak çok kötü! Oysa ki daha eğlenceli..')    
.setColor('RED')       
 message.channel.send(hata)
  return
   }
     if(args[0] === "4") {
  var hata = new Discord.MessageEmbed()
.setTitle('Hata!')
.setDescription('**' +  message.guild.name + '** Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil! \n **:gem:  PREMİUM! :gem:** Olmayan sunucular,Sadece **!kullanım-temizle hepsi** Kullanabilir.')
.setFooter('PREMİUM! Olmamak çok kötü! Oysa ki daha eğlenceli..')    
.setColor('RED') 
  message.channel.send(hata)
  return
     }
     if(args[0] === "5") {
  var hata = new Discord.MessageEmbed()
.setTitle('Hata!')
.setDescription('**' +  message.guild.name + '** Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil! \n **:gem:  PREMİUM! :gem:** Olmayan sunucular,Sadece **!kullanım-temizle hepsi** Kullanabilir.')
.setFooter('PREMİUM! Olmamak çok kötü! Oysa ki daha eğlenceli..')    
.setColor('RED')  
  message.channel.send(hata) 
   return
     }
if(args[0] === "hepsi") {
let embed22 = new Discord.MessageEmbed()
.setTitle('Bütün **Özel Komutları** silmek istiyorsun öyle mi? Tamam.. öyle olsun! Aşağıda ki :white_check_mark: Bas bakalım!? Bakalım emin misin.') 
.setFooter('neden silyorsun ki! Bu beni üzdü :(')

	message.channel.send(embed22).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => sentEmbed.edit("**Süre Doldu..** İşlem iptal edildi!"));
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
let embed5 = new Discord.MessageEmbed()
.setTitle('**Başarılı!** <a:yess:602116858879148032> ') 
.setDescription('İşlem onaylandı! Özel Komutlar temizleniyor!.')
.setFooter('neden silyorsun ki! Bu beni üzdü :(')
.setColor('RED')
message.channel.send(embed5)
db.delete(`sunucuKomut_${message.guild.id}`)
 db.delete(`sunucuKomut2_${message.guild.id}`)
db.delete(`sunucuKomut3_${message.guild.id}`)
db.delete(`sunucuKomut4_${message.guild.id}`)
  db.delete(`sunucuKomut5_${message.guild.id}`)         
db.delete(`sunucuMesaj_${message.guild.id}`)
  db.delete(`sunucuMesaj2_${message.guild.id}`)
db.delete(`sunucuMesaj3_${message.guild.id}`)
db.delete(`sunucuMesaj4_${message.guild.id}`)
  db.delete(`sunucuMesaj5_${message.guild.id}`)
        }
      }
        
      )
  })
}

        
        

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanım-temizle',
  description: 'taslak',
  usage: 'kullanım-temizle'
};