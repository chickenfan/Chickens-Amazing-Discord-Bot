import {Client, GuildMember} from 'discord.js';

import CommandManager from "./CommandHandling/CommandManager"

const client = new Client();

var cmdManager: CommandManager;
var utils: Utility;

export default class Utility {
  getClient(): Client {
    return client;
  }

  equalsIgnoreCase(string1: String, string2: String): boolean {
    if (string1.toString().toLowerCase() == string2.toString().toLowerCase())
      return true;
    else
      return false;
  }
}

client.on('ready', () => {
  console.log('Bot up!');
  cmdManager = new CommandManager();
  utils = new Utility();
});

client.on('message', msg => {
  cmdManager.getCommands().forEach(cmd => {
    if(utils.equalsIgnoreCase(msg.toString(), cmd.getCommand(true)))
      cmd.execute(msg.member as GuildMember, [''], msg);
  });
});

client.login(process.env.TOKEN);