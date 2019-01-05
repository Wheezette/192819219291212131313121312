const Discord = require("discord.js");

const db = require('quick.db');

const bot = new Discord.Client();

//const ascii = require("ascii-art");

const moment = require("moment");

//const randomstring = require("randomstring");

//const fs = require("fs");

//const ms = require("ms");

moment.locale('pl');

  

  bot.on("ready", e => {

	  bot.user.setActivity("Życie");
    bot.user.setStatus("dnd");

  });

//bot.on('message', async message => {

    //let prefix = "$";

    //let prefix = konfiguracja.prefix;

    //let messageArray = message.content.split(" ");

    //let cmd = messageArray[0];

    //let msg = message.content.startsWith;

    //let args = messageArray.slice(1);

	



//});



bot.login(process.env.TOKEN);
