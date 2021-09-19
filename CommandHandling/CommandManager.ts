import BaseCommand from "./BaseCommand"

export default class CommandManager {
  private commands: Array<BaseCommand>;

  private addCommand(command: BaseCommand): void {
    commands.push(command);
  }

  constructor() {
  
  }
}