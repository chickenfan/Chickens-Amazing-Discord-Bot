import {Permissions, GuildMember, Message} from 'discord.js'

export default abstract class BaseCommand {
  private command: String;
  private perm: number;

  constructor(command: String, perm: number) {
    this.command = command;
    this.perm = perm;
  }

  public getCommand(withPrefix: boolean): String {
    if(withPrefix) 
      return '!' + this.command;
    else 
      return this.command;
  }
  public getPerm(): number {
    return this.perm;
  }

  public abstract execute(member: GuildMember, args: String[], msg: Message): void;
}