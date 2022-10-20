import { EmbedBuilder } from "discord.js";
import { EggTypes } from "../enums/egg-types.js";

export const EMBEDS = new Map([
    [
        EggTypes.Scrambled,
        new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Result")
            .addFields({
                name: "Scrambled Egg",
                value: "Like a scrambled egg, you're a timeless classic. You'll never go out of style."
            })
            .setImage("attachment://scrambled-egg.png")
    ],
    [
        EggTypes.Fried,
        new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Result")
            .addFields({
                name: "Fried Egg",
                value: "Like a fried egg, you're known by many and loved by all. No one has anything bad to say about you."
            })
            .setImage("attachment://fried-egg.png")
    ],
    [
        EggTypes.Deviled,
        new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Result")
            .addFields({
                name: "Deviled Egg",
                value: "Like a deviled egg, you're bold and daring. You often go against the grain."
            })
            .setImage("attachment://deviled-egg.png")
    ],
    [
        EggTypes.Dinosaur,
        new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Result")
            .addFields({
                name: "Dinosaur Egg",
                value: "Like a dinosaur egg, you are an anomaly in modern times. You might even consider therapy."
            })
            .setImage("attachment://dinosaur-egg.png")
    ],
    [
        EggTypes.Nelli,
        new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Result")
            .addFields({
                name: "N̺̻̔̆ͅẹ̿͋̒̕l̙͖̑̾ͣl̙͖̑̾ͣỉ͔͖̜͌ Ḛͭ̉̇͟ĝ̽̓̀͑ĝ̽̓̀͑",
                value: "Ỵ̛̖͋͢o̯̱̊͊͢ư̡͕̭̇ ā̤̓̍͘r̴̨̦͕̝ẹ̿͋̒̕ ā̤̓̍͘ N̺̻̔̆ͅẹ̿͋̒̕l̙͖̑̾ͣl̙͖̑̾ͣỉ͔͖̜͌ Ḛͭ̉̇͟ĝ̽̓̀͑ĝ̽̓̀͑"
            })
            .setImage("attachment://nelli-egg.png")
    ]
]);
