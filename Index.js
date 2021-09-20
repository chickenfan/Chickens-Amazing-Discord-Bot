"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var CommandManager_1 = require("./CommandHandling/CommandManager");
var client = new discord_js_1.Client();
var cmdManager;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.getClient = function () {
        return client;
    };
    return Utility;
}());
exports["default"] = Utility;
client.on('ready', function () {
    console.log('Bot up!');
    cmdManager = new CommandManager_1.CommandManager();
});
client.on('message', function (msg) {
    cmdManager.getCommands().foreach(function (cmd) {
        if (msg.toString() == cmd.getCommand())
            cmd.execute(msg.author);
    });
});
client.login(process.env.TOKEN);
