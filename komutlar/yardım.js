const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**» Botun Ana Komutları**", `a!yardım = BOT Komutlarını Atar. \na!bilgi = BOT Kendisi Hakkında Bilgi Verir. \na!ping = BOT Gecikme Süresini Söyler. \na!davet = BOT Davet Linkini Atar. \na!site  = BOT Site Linki Atar. \na!sunucutanıt = Sunucunuzu tanıtır. \na!destekgrup = Botun destek sunucusunun davet linkini atar.`)
  .addField("**» Eğlence Komutları**",`a!gif = Gifleri gösterir.`)
  .setFooter('Alpha Bot Güncel Sürüm [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'a!yardım [komut]'
};
