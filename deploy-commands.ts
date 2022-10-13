import { REST, SlashCommandBuilder, Routes } from "discord.js";
import { CLIENT_ID, TOKEN } from "./config.js";

const commands = [
    new SlashCommandBuilder().setName("quiz").setDescription("Starts the egg quiz to determine your egg type")
].map((command) => command.toJSON());

const rest = new REST().setToken(TOKEN);

const response = await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
console.log(response);
