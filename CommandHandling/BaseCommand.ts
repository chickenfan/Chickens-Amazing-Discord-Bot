import {Permissions, GuildMember} from 'discord.js'

export default abstract class BaseCommand {
  private command: String;
  private args: String[];
  private perm: number;

  constructor(command: String, args: String[], perm: number) {
    this.command = command;
    this.args = args;
    this.perm = perm;
  }

  public getCommand(): String {
    return this.command;
  }
  public getArgs(): String[] {
    return this.args;
  }
  public getPerm(): number {
    return this.perm;
  }

  public abstract execute(member: GuildMember): void;
}