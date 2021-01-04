const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
      
let komut1 = db.fetch(`sunucuKomut_${message.guild.id}`) 


  let yazı1;
  let yazı2;
  let yazı3;
  let yazı4;
  let yazı5;
    let cevap1;
  let cevap22;
  let cevap33;
  let cevap44;
  let cevap55;
  if (komut1 == undefined) yazı1 = 'Kullanılmamış! :no_entry: '
 else yazı1 = komut1
////////

let komut2 = db.fetch(`sunucuKomut2_${message.guild.id}`) 
  if (komut2 == undefined) yazı2 = 'Kullanılmamış! :no_entry: '
 else yazı2 = komut2
let komut3 = db.fetch(`sunucuKomut3_${message.guild.id}`) 
  if (komut3 == undefined) yazı3 = 'Kullanılmamış! :no_entry: '
 else yazı3 = komut3
  let komut4 = db.fetch(`sunucuKomut4_${message.guild.id}`) 
  if (komut4 == undefined) yazı4 = 'Kullanılmamış! :no_entry: '
 else yazı4 = komut4

  let komut5 = db.fetch(`sunucuKomut5_${message.guild.id}`) 
  if (komut5 == undefined) yazı5 = 'Kullanılmamış! :no_entry: '
 else yazı5 = komut5
  
  let cevap = db.fetch(`sunucuMesaj_${message.guild.id}`)
  if (cevap == undefined) cevap1 = 'Kullanılmamış! :no_entry: '
 else cevap1 = cevap

  
  let cevap2 = db.fetch(`sunucuMesaj2_${message.guild.id}`)
  if (cevap2 == undefined) cevap22 = 'Kullanılmamış! :no_entry: '
 else cevap22 = cevap2

  
  let cevap3 = db.fetch(`sunucuMesaj3_${message.guild.id}`)
if (cevap3 == undefined) cevap33 = 'Kullanılmamış! :no_entry: '
 else cevap33 = cevap3
let cevap4 = db.fetch(`sunucuMesaj4_${message.guild.id}`)
if (cevap4 == undefined) cevap44 = 'Kullanılmamış! :no_entry: '
 else cevap44 = cevap4
let cevap5 = db.fetch(`sunucuMesaj5_${message.guild.id}`) 
if (cevap5 == undefined) cevap55 = 'Kullanılmamış! :no_entry: '
 else cevap55 = cevap5

if (komut5) {
    var liste = new Discord.MessageEmbed()
.setTitle(message.guild.name + ' Özel Komut Listesi')
.setDescription('**1.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı1 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap1 + '** \n **---------------** \n **2.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı2 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap22 + '** \n **---------------** \n **3.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı3 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap33 + '** \n **---------------** \n **4.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı4 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap44 + '** \n **---------------** \n **5.Hakkınız:** \n :inbox_tray:  Komut Girişi: **' + yazı5 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap55 + '**')
.addField(' <a:sabitle:600298981205082125> Kullanılmayan Hakkınız:', '**0 Kullanım Hakkı Tükendi! :no_entry:**')
.addField('**:gem:  PREMİUM! :gem: (+♾)**', message.guild.name + ' Sunucusu,Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil!')
    message.channel.send(liste)
  return
}
  
  
  
  
  if (komut4) {
    var liste = new Discord.MessageEmbed()
.setTitle(message.guild.name + ' Özel Komut Listesi')
.setDescription('**1.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı1 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap1 + '** \n **---------------** \n **2.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı2 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap22 + '** \n **---------------** \n **3.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı3 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap33 + '** \n **---------------** \n **4.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı4 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap44 + '** \n **---------------** \n **5.Hakkınız:** \n :inbox_tray:  Komut Girişi: **' + yazı5 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap55 + '**')
.addField(' <a:sabitle:600298981205082125> Kullanılmayan Hakkınız:', '**1**')
.addField('**:gem:  PREMİUM! :gem: (+♾)**', message.guild.name + ' Sunucusu,Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil!')
    message.channel.send(liste)
  return
}
  
  
  
  
  if (komut3) {
    var liste = new Discord.MessageEmbed()
.setTitle(message.guild.name + ' Özel Komut Listesi')
.setDescription('**1.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı1 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap1 + '** \n **---------------** \n **2.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı2 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap22 + '** \n **---------------** \n **3.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı3 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap33 + '** \n **---------------** \n **4.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı4 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap44 + '** \n **---------------** \n **5.Hakkınız:** \n :inbox_tray:  Komut Girişi: **' + yazı5 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap55 + '**')
.addField(' <a:sabitle:600298981205082125> Kullanılmayan Hakkınız:', '**2**')
 .addField('**:gem:  PREMİUM! :gem: (+♾)**', message.guild.name + ' Sunucusu,Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil!')
    message.channel.send(liste)
  return
}
  
  
  
  if (komut2) {
    var liste = new Discord.MessageEmbed()
.setTitle(message.guild.name + ' Özel Komut Listesi')
.setDescription('**1.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı1 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap1 + '** \n **---------------** \n **2.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı2 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap22 + '** \n **---------------** \n **3.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı3 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap33 + '** \n **---------------** \n **4.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı4 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap44 + '** \n **---------------** \n **5.Hakkınız:** \n :inbox_tray:  Komut Girişi: **' + yazı5 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap55 + '**')
.addField(' <a:sabitle:600298981205082125> Kullanılmayan Hakkınız:', '**3**')
  .addField('**:gem:  PREMİUM! :gem: (+♾)**', message.guild.name + ' Sunucusu,Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil!')
    message.channel.send(liste)
  return
}
  
  
 if (komut1) {
    var liste = new Discord.MessageEmbed()
.setTitle(message.guild.name + ' Özel Komut Listesi')
.setDescription('**1.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı1 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap1 + '** \n **---------------** \n **2.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı2 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap22 + '** \n **---------------** \n **3.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı3 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap33 + '** \n **---------------** \n **4.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı4 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap44 + '** \n **---------------** \n **5.Hakkınız:** \n :inbox_tray:  Komut Girişi: **' + yazı5 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap55 + '**')
.addField(' <a:sabitle:600298981205082125> Kullanılmayan Hakkınız:', '**4**')
   .addField('**:gem:  PREMİUM! :gem: (+♾)**', message.guild.name + ' Sunucusu,Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil!')
    message.channel.send(liste)
  return
}
  
  
  
  
  
  
  var liste = new Discord.MessageEmbed()
.setTitle(message.guild.name + ' Özel Komut Listesi')
.setDescription('**1.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı1 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap1 + '** \n **---------------** \n **2.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı2 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap22 + '** \n **---------------** \n **3.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı3 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap33 + '** \n **---------------** \n **4.Hakkınız:** \n :inbox_tray: Komut Girişi: **' + yazı4 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap44 + '** \n **---------------** \n **5.Hakkınız:** \n :inbox_tray:  Komut Girişi: **' + yazı5 + '** \n :outbox_tray: Komut Çıkışı: **' + cevap55 + '**')
.addField('<a:sabitle:600298981205082125> Kullanılmayan Hakkınız:', '**5**')
 .addField('**:gem:  PREMİUM! :gem: (+♾)**', message.guild.name + ' Sunucusu,Bir **:gem:  PREMİUM! :gem:** Sunucusu Değil!')
  message.channel.send(liste)




};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['özelkomutlistesi','özelkomut-listesi','liste'],
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-listesi',
  description: 'Özel komutların listesini gösterir.',
  usage: 'özelkomutlistesi'
};