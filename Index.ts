import {Client, GuildMember} from 'discord.js';

import CommandManager from "./CommandHandling/CommandManager"

const client = new Client();

var cmdManager: CommandManager;

export default class Utility {
  getClient(): Client {
    return client;
  }
}

client.on('ready', () => {
  console.log('Bot up!');
  cmdManager = new CommandManager();
});

client.on('message', msg => {
  cmdManager.getCommands().forEach(cmd => {
    if(msg.toString() == cmd.getCommand(true))
      cmd.execute(msg.member as GuildMember);
  });
});

client.login(process.env.TOKEN);