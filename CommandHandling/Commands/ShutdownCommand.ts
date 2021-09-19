import BaseCommand from "../BaseCommand"
import Lib from "../Lib"


class ShutdownCommand extends BaseCommand {
constructor() {
    super('shutdown', ['', ''], 'ADMINISTRATOR'); 
  }

  execute(): void {
    var lib = new Lib();
    lib.getUtility().getClient().destroy();
  }
}