const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
			


 let gonderileceksey;
let komut;
       let hata1 = new Discord.MessageEmbed()
 .setTitle('**Hatalı Kullanım!** \n yazı ve gönderilecek şey içeriğinde olmalı \n **Örnek Kullanım:** \n !komutekle [destek-sunucumuz] [Hey Dostum! seni, www..discord.gg/kRV8aK4 Destek sunucumuza Bekliyoruz!]')
.setColor('FB00FF')
.setThumbnail(message.author.avatarURL())
  
 let hata2 = new Discord.MessageEmbed()
 .setTitle('Bir Hata oluştu :(! \n **' + message.member.user.username + '** komut ekleyebilmek için,"ADMINISTRATOR" yetkisine Sahip olman gerekiyor.')
 .setColor('000000')

 let bitti = db.fetch(`sunucuKomut5_${message.guild.id}`)
 if (bitti) {
   
   message.channel.send('Kullanım Hakkı dolmuş!,Detaylı bilgi gönderiliyor...')
   
      var bilgi = new Discord.MessageEmbed()
   .setTitle('Kullanım Bilgilendirmesi:')
   .setDescription('Selam Dostum,Ben Sunucu Bot sahibi,Anlaşılan kullanım haklarını bitirmişsin :) \n Öncelikle Sunucu BOT un Bu özelliğini,Kullandığın için teşekkürler.Daha fazla hak ve özel özellikler için Destek sunucumuza gelip,Benimle iletişime geçebilirsin!,Seni bekliyor olacağım.')
   .addField('**Davet Linkleri:**', '[Destek Sunucum!](https://discordapp.com/invite/kRV8aK4) \n [Davet Linkim!](https://discordapp.com/oauth2/authorize?client_id=601390109891231764&scope=bot&permissions=2146958847)')
message.channel.send(bilgi)
   return
 }
 //////////////////////////////
 
  let komut5 = db.fetch(`sunucuKomut4_${message.guild.id}`)
 if (komut5) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hata2)
       
 if (!args[0]) return message.channel.send(hata1)
  if (!args[1]) return message.channel.send(hata1) 
 
if (!args[0]) komut = ''; 
else komut = (args[0]); 
       
if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
else gonderileceksey = args.slice(1, 1000, args[1]).join(' ');       
       
 let başarılı = new Discord.MessageEmbed()
.setTitle(' :file_folder:  **Başarılı!** \n Komut Girişi,Başarılı.Detaylar gönderiliyor! <a:yess:602116858879148032> ')       
.setColor('GREEN')
 message.channel.send(başarılı)
                    db.set(`sunucuKomut5_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj5_${message.guild.id}`, gonderileceksey)     
  var detaylar = new Discord.MessageEmbed()
  .setTitle('**' + message.guild.name + ' Komut Giriş Detayları:**')
  .addField(' :inbox_tray: Kod Girişi (komut)', '**' + komut + '**', true)
  .addField(' :outbox_tray: Kod Çıkışı (cevap)', '**' + gonderileceksey + '**', true)
  .addField('Kalan Kullanım Hakkı', '**0** Evet.. Sanırım artık hakkımızın bittiğini anlamam gerekiyor.. Ama ben seni sevmiştim :persevere: ')
  message.channel.send(detaylar)   
  return  
 }
 ////////////////////////////////////////////////////////
 let komut4 = db.fetch(`sunucuKomut3_${message.guild.id}`)
 if (komut4) {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hata2)
       
 if (!args[0]) return message.channel.send(hata1)
  if (!args[1]) return message.channel.send(hata1) 
 
if (!args[0]) komut = ''; 
else komut = (args[0]); 
       
if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
else gonderileceksey = args.slice(1, 1000, args[1]).join(' ');       
       
 let başarılı = new Discord.MessageEmbed()
.setTitle(' :file_folder:  **Başarılı!** \n Komut Girişi,Başarılı.Detaylar gönderiliyor! <a:yess:602116858879148032> ')       
.setColor('GREEN')
 message.channel.send(başarılı)
                    db.set(`sunucuKomut4_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj4_${message.guild.id}`, gonderileceksey)     
  var detaylar = new Discord.MessageEmbed()
  .setTitle('**' + message.guild.name + ' Komut Giriş Detayları:**')
  .addField(' :inbox_tray: Kod Girişi (komut)', '**' + komut + '**', true)
  .addField(' :outbox_tray: Kod Çıkışı (cevap)', '**' + gonderileceksey + '**', true)
  .addField('Kalan Kullanım Hakkı', '**1** Olamazz.... Bu gerçekten son hakkımız mı? İnanmıyorum! :confused: ')
  message.channel.send(detaylar)   

   return
 }
   
 ////////////////////////////////////////////////////////
 let komut3 = db.fetch(`sunucuKomut2_${message.guild.id}`)
 if (komut3) {
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hata2)
       
 if (!args[0]) return message.channel.send(hata1)
  if (!args[1]) return message.channel.send(hata1) 
 
if (!args[0]) komut = ''; 
else komut = (args[0]); 
       
if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
else gonderileceksey = args.slice(1, 1000, args[1]).join(' ');       
       
 let başarılı = new Discord.MessageEmbed()
.setTitle(' :file_folder:  **Başarılı!** \n Komut Girişi,Başarılı.Detaylar gönderiliyor! <a:yess:602116858879148032> ')       
.setColor('GREEN')
 message.channel.send(başarılı)
                    db.set(`sunucuKomut3_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj3_${message.guild.id}`, gonderileceksey)     
  var detaylar = new Discord.MessageEmbed()
  .setTitle('**' + message.guild.name + ' Komut Giriş Detayları:**')
  .addField(' :inbox_tray: Kod Girişi (komut)', '**' + komut + '**', true)
  .addField(' :outbox_tray: Kod Çıkışı (cevap)', '**' + gonderileceksey + '**', true)
  .addField('Kalan Kullanım Hakkı', '**2** Biraz Hızlı azalıyor gibi Sen ne dersin? :interrobang: ')
  message.channel.send(detaylar)
   
 return  
 }
        ////////////////////////////////////////////////////////
 let komut2 = db.fetch(`sunucuKomut_${message.guild.id}`) 
if (komut2) {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hata2)
       
 if (!args[0]) return message.channel.send(hata1)
  if (!args[1]) return message.channel.send(hata1) 
 
if (!args[0]) komut = ''; 
else komut = (args[0]); 
       
if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
else gonderileceksey = args.slice(1, 1000, args[1]).join(' ');       
       
 let başarılı = new Discord.MessageEmbed()
.setTitle(' :file_folder:  **Başarılı!** \n Komut Girişi,Başarılı.Detaylar gönderiliyor! <a:yess:602116858879148032> ')       
.setColor('GREEN')
 message.channel.send(başarılı)
                    db.set(`sunucuKomut2_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj2_${message.guild.id}`, gonderileceksey)     
  var detaylar = new Discord.MessageEmbed()
  .setTitle('**' + message.guild.name + ' Komut Giriş Detayları:**')
  .addField(' :inbox_tray: Kod Girişi (komut)', '**' + komut + '**', true)
  .addField(' :outbox_tray: Kod Çıkışı (cevap)', '**' + gonderileceksey + '**', true)
  .addField('Kalan Kullanım Hakkı', '**3** Oow! Komut hakkımız azalıyor gibi :eyes: ')
  message.channel.send(detaylar)
  return
}
 
  ////////////////////////////////////////////////////////
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hata2)
       
 if (!args[0]) return message.channel.send(hata1)
  if (!args[1]) return message.channel.send(hata1) 
 
if (!args[0]) komut = ''; 
else komut = (args[0]); 
       
if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
else gonderileceksey = args.slice(1, 1000, args[1]).join(' ');       
       
 let başarılı = new Discord.MessageEmbed()
.setTitle(' :file_folder:  **Başarılı!** \n Komut Girişi,Başarılı.Detaylar gönderiliyor! <a:yess:602116858879148032> ')       
.setColor('GREEN')
 message.channel.send(başarılı)
                    db.set(`sunucuKomut_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj_${message.guild.id}`, gonderileceksey)     
  var detaylar = new Discord.MessageEmbed()
  .setTitle('**' + message.guild.name + ' Komut Giriş Detayları:**')
  .addField(' :inbox_tray: Kod Girişi (komut)', '**' + komut + '**', true)
  .addField(' :outbox_tray: Kod Çıkışı (cevap)', '**' + gonderileceksey + '**', true)
  .addField('Kalan Kullanım Hakkı', '**4** Oley! daha 4 hakımız var Eğlenebiliriz! <a:bits:601342956875808788> ')
  message.channel.send(detaylar)

     
     
   //////////////////////////////// <<<<>>>>>  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['özelkomutekle','özelkomut-ekle','özel-komutekle'],
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-ekle',
  description: 'Özel komut eklersiniz.',
  usage: 'özelkomut-ekle'
};