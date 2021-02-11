const fs = require('fs');
const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log();
 
});



client.once('message', message =>{
    if(message.content == '!time') {
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send('ORA ATTUALE :alarm_clock: ' + ora + ':' + minuto);
    }
});
client.login("process.emv.token")