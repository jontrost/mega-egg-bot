import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, GatewayIntentBits } from "discord.js";
import { TOKEN } from "./config.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
        // GatewayIntentBits.GuildMembers
    ]
});

client.once("ready", () => {
    console.log("Mega Egg Bot is ready");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    const { commandName } = interaction;

    if (commandName === "quiz") {
        const questionOneOptions = new ActionRowBuilder<ButtonBuilder>().addComponents([
            new ButtonBuilder().setCustomId("cereal").setLabel("Cereal").setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId("pancakes").setLabel("Pancakes").setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId("fruitYogurt").setLabel("Fruit & Yogurt").setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId("eggs").setLabel("Eggs 🤨").setStyle(ButtonStyle.Primary)
        ]);
        await interaction.reply({
            content: "Which breakfast food do you enjoy the most?",
            components: [questionOneOptions]
        });
    }
});

client.login(TOKEN);
