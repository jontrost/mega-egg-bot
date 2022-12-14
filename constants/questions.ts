import { ActionRowBuilder, ButtonBuilder, ButtonStyle, BaseMessageOptions } from "discord.js";
import { ButtonIds } from "../enums/button-ids.js";

export const QUESTIONS: BaseMessageOptions[] = [
    {
        content: "Which breakfast food do you enjoy the most?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q1A1).setLabel("Cereal").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q1A2).setLabel("Pancakes").setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId(ButtonIds.Q1A3)
                    .setLabel("Fruit & Yogurt")
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q1A4).setLabel("Eggs ๐คจ").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Which season is your favorite?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q2A1).setLabel("Spring ๐ท").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q2A2).setLabel("Summer ๐").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q2A3).setLabel("Fall ๐").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q2A4).setLabel("Winter โ๏ธ").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Which disease innoculated in chicken eggs is your favorite?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q3A1).setLabel("Influenza").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q3A2).setLabel("Chicken Pox").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q3A3).setLabel("Typhus").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q3A4).setLabel("Yellow Fever").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Which pet is your favorite?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q4A1).setLabel("Dog").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q4A2).setLabel("Cat").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q4A3).setLabel("Fish").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q4A4).setLabel("Reptile").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Which breed of chicken is your favorite?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q5A1).setLabel("Leghorn").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q5A2).setLabel("Ancona").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q5A3).setLabel("Sussex").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q5A4).setLabel("Barnevelder").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Which of Japan's four main islands is your favorite?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q6A1).setLabel("Hokkaido").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q6A2).setLabel("Honshu").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q6A3).setLabel("Shikoku").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q6A4).setLabel("Kyushu").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Which condiment is your favorite?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q7A1).setLabel("Ketchup").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q7A2).setLabel("Mustard").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q7A3).setLabel("Mayo").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q7A4).setLabel("Ranch").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "What is your favorite part of an egg to eat?",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q8A1).setLabel("White").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q8A2).setLabel("Yolk").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q8A3).setLabel("Shell").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q8A4).setLabel("Carton").setStyle(ButtonStyle.Primary)
            ])
        ]
    },
    {
        content: "Pick One.",
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents([
                new ButtonBuilder().setCustomId(ButtonIds.Q9A1).setLabel("Egg").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q9A2).setLabel("Egg").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q9A3).setLabel("Egg").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(ButtonIds.Q9A4).setLabel("Egg").setStyle(ButtonStyle.Primary)
            ])
        ]
    }
];
