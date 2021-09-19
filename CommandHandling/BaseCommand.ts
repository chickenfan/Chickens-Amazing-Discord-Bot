import {Permissions} from 'discord.js'

export default abstract class BaseCommand {
  private command: String;
  private args: String[];
  private perm: String;

  constructor(command: String, args: String[], perm: String) {
    this.command = command;
    this.args = args;
    this.perm = perm;
  }

  protected getCommand(): String {
    return this.command;
  }
  protected getArgs(): String[] {
    return this.args;
  }
  protected getPerm(): String {
    return this.perm;
  }

  public abstract execute(): void;
}