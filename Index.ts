import {Client} from 'discord.js';

const client = new Client();


export default class Utility {
  getClient(): Client {
    return client;
  }
}

client.on('ready', () => {
  console.log('Bot up!');
});

client.on('message', msg => {
  if (msg.toString() == '!shutdown')
    client.destroy();
});

client.login(process.env.TOKEN);