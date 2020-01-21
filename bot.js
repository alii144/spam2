const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By snow_ghost");


client.on("ready", () => {
let channel =     client.channels.get("669117196148015117")
setInterval(function() {
channel.send(`هلا هلا هلا هلا هلا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
