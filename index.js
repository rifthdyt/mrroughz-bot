const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
    console.log("DER SUCUK BOT GEHT AN AMK")
bot.user.setActivity('MrRoughZ',{type: 'WATCHING'});

});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'willkommen');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Du gehörst zur Generation Azzlack. HAYVAN!', `WILLKOMMEN IM SERVER, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Du bist jetzt ein member!', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

    channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'willkommen');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Hat den Server verlassen', ';(')
        .addField('Siktir git AMK richtig 31er move. :(', 'SCHANDE DAS DU GEGANGEN BIST')
        .addField('Member Insgesamt', `${member.guild.memberCount}` + " Member Insgesamt")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

    channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}youtube`) {
        message.channel.send("https://www.youtube.com/channel/UCljJ-XKZFuV1_J5TKTMm2EA");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}invite`) {
        message.channel.send("https://discordapp.com/invite/uacJNnA");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}mrroughz`) {
        message.channel.send("MrRoughZ? Youtube? Ah komm halt dein Maul gib mir Para amk. :moneybag: ");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}instagram`) {
        message.channel.send("https://www.instagram.com/mrroughz/");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}ausrüstung`) {
    var emebed = new Discord.RichEmbed()
    .addField("▬▬▬▬▬▬▬▬Ausrüstung▬▬▬▬▬▬▬▬", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    .addField("▶ Aufnahmegerät:", "Samsung S6 Edge")
    .addField("▶ Aufnahmeprogramm:", "AZ Screen Recorder")
    .addField("▶ Schneideprogramm:", "Powerdirectors Pro")
    .setColor(0xff0000)
   message.channel.sendEmbed(emebed);
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}kanaltrailer`) {
        message.channel.send("https://youtu.be/e5qy0vepBwA");
    }

});

bot.on("message", async message => {

            if (message.author.bot) return;
            if (message.channel.type === "dm") return;

            let prefix = '?';
            let messageArray = message.content.split(" ");
            let cmd = messageArray[0];
            let args = messageArray.slice(1);

            if (cmd === `${prefix}help`) {
            const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setTitle("Command Liste:")
                .addField("?help", "zeigt dir eine liste mit allen commands")
                .addField("?youtube", "zeigt MrRoughZ Youtube Kanal")
                .addField("?instagram ", "MrRoughZ Instagram Account")
                .addField("?owner ", "HIER WIRD ERZÄHLT WER DER OWNER VON DIESESM BOT IST")
                .addField("?mrroughz", "probier es doch aus ツ")
                .addField("?kanaltrailer", "zeigt den Kanal Trailer von Mr RoughZ")
                .addField("?ausrüstung", "zeigt die ausrüstung von Mr RoughZ")
                .addField("?invite", "lädt dich in Mr RoughZ´s Discord Server ein")
            message.channel.send({
            embed
            })
            }

            });

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}owner`) {
        message.channel.send("RIFT aka TRIXE HAT DIESEN GEILEN BOT PROGRAMMIERT LOL https://www.youtube.com/channel/UC3eNoCP3P0-ngIZqAoF2ytw");
    }

});

bot.login(process.env.token);
