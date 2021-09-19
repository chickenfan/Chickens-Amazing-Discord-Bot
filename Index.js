"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client();
client.on('ready', function () {
    console.log('Bot up!');
});
client.on('message', function (msg) {
    if (msg.toString() == '!shutdown')
        client.destroy();
});
client.login(process.env.TOKEN);


