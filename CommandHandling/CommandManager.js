"use strict";
exports.__esModule = true;
var ShutdownCommand_1 = require("./Commands/ShutdownCommand");
var CommandManager = /** @class */ (function () {
    function CommandManager() {
        this.addCommand(new ShutdownCommand_1.ShutdownCommand());
    }
    CommandManager.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    CommandManager.prototype.getCommands = function () {
        return this.commands;
    };
    return CommandManager;
}());
exports["default"] = CommandManager;
