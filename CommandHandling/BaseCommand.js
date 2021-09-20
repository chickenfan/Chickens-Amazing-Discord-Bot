"use strict";
exports.__esModule = true;
var BaseCommand = /** @class */ (function () {
    function BaseCommand(command, args, perm) {
        this.command = command;
        this.args = args;
        this.perm = perm;
    }
    BaseCommand.prototype.getCommand = function () {
        return this.command;
    };
    BaseCommand.prototype.getArgs = function () {
        return this.args;
    };
    BaseCommand.prototype.getPerm = function () {
        return this.perm;
    };
    return BaseCommand;
}());
exports["default"] = BaseCommand;
