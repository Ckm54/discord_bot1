import { Client } from "discord.js";
import { commands } from "./commands";
import { config } from "./config";
import { deployCommands } from "./deploy-commands";

// initialize client and set intents to events that the bot will receive information about
// i.e about guilds, guildMessages and direct messages.
const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

// log to console when bot is ready
client.once("ready", () => {
  console.log("Discord bot is ready! 🤖");
});

// Deploy the commands when new guild has been created
client.on("guildCreate",async (guild) => {
  await deployCommands({ guildId: guild.id });
});

// Run corresponding command when user interraction has been created
client.on("interactionCreate",async (interraction) => {
  if(!interraction.isCommand()) {
    return;
  }
  const { commandName } = interraction;
  if(commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].excecute(interraction);
  }
});

// login to the client using your token
client.login(config.DISCORD_TOKEN);

