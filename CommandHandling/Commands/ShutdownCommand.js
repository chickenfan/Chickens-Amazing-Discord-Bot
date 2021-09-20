"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ShutdownCommand = void 0;
var BaseCommand_1 = require("../BaseCommand");
var Lib_1 = require("../Lib");
var discord_js_1 = require("discord.js");
var ShutdownCommand = /** @class */ (function (_super) {
    __extends(ShutdownCommand, _super);
    function ShutdownCommand() {
        return _super.call(this, 'shutdown', ['', ''], discord_js_1.Permissions.FLAGS.ADMINISTRATOR) || this;
    }
    ShutdownCommand.prototype.execute = function (member) {
        var lib = new Lib_1["default"]();
        if (member.has(this.getPerm()))
            lib.getUtility().getClient().destroy();
    };
    return ShutdownCommand;
}(BaseCommand_1["default"]));
exports.ShutdownCommand = ShutdownCommand;
