import BaseCommand from "./BaseCommand"
import {ShutdownCommand} from "./Commands/ShutdownCommand"
import {HelloCommand} from "./Commands/HelloCommand"

export default class CommandManager {
  private commands: Array<BaseCommand>;

  private addCommand(command: BaseCommand): void {
    this.commands.push(command);
  }

  public getCommands(): Array<BaseCommand> {
    return this.commands;
  }

  constructor() {
    this.commands  = [new ShutdownCommand()];
    this.addCommand(new HelloCommand());
  }
}