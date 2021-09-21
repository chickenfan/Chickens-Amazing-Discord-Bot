import {Permissions, GuildMember, Message} from 'discord.js'
import BaseCommand from "../BaseCommand"

export class HelloCommand extends BaseCommand {
  constructor() {
    super('hello', Permissions.FLAGS.SEND_MESSAGES);
  }

  public execute(member: GuildMember, args: String[], msg: Message): void {
    msg.channel.send('Hello ' + member.displayName);
  }
}