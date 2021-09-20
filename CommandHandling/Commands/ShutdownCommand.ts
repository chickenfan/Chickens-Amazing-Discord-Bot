import BaseCommand from "../BaseCommand"
import Lib from "../Lib"

import {Permissions, GuildMember} from 'discord.js'


export class ShutdownCommand extends BaseCommand {
constructor() {
    super('shutdown', ['', ''], Permissions.FLAGS.ADMINISTRATOR); 
  }

  execute(member: GuildMember): void {
    var lib = new Lib();
    
    if (member.guild.me!.hasPermission(this.getPerm()))
      lib.getUtility().getClient().destroy();
  }
}