import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
.setName("Ping")
.setDescription("Replies with pong!");

export async function excecute(interraction: CommandInteraction) {
  return interraction.reply("Pong!");
}
