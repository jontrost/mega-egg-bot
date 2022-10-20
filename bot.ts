import { ButtonInteraction, ChatInputCommandInteraction, Client, GatewayIntentBits } from "discord.js";
import { TOKEN } from "./config.js";
import Keyv from "keyv";
import { QuizData } from "./models/quiz-data.js";
import { QUESTIONS } from "./constants/questions.js";
import { EggTypes } from "./enums/egg-types.js";
import { ButtonIds } from "./enums/button-ids.js";
import { ANSWERS } from "./constants/answers.js";
import { ATTACHMENTS } from "./constants/attachments.js";
import { EMBEDS } from "./constants/embeds.js";

const keyv = new Keyv();
keyv.on("error", (error) => console.error("Keyv connection error:", error));

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once("ready", () => {
    console.log("Mega Egg Bot is ready");
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
        handleSlashCommand(interaction);
    } else if (interaction.isButton()) {
        handleButton(interaction);
    }
});

client.login(TOKEN);

async function handleSlashCommand(interaction: ChatInputCommandInteraction) {
    const quizData: QuizData = {
        quizOwner: interaction.user.id,
        questionsAnswered: 0,
        deviledEggScore: 0,
        scrambledEggScore: 0,
        friedEggScore: 0,
        dinosaurEggScore: 0
    };
    await keyv.set(interaction.id, quizData);
    interaction.reply(QUESTIONS[0]);

    setTimeout(
        async (interaction) => {
            if ((await keyv.get(interaction.id)) !== undefined) {
                interaction.deleteReply();
            }
        },
        180000,
        interaction
    );
}

async function handleButton(interaction: ButtonInteraction) {
    const quizData: QuizData = await keyv.get(interaction.message.interaction?.id ?? "");
    if (quizData === undefined) {
        handleError(interaction);
        return;
    }

    if (interaction.user.id === quizData.quizOwner) {
        const updatedQuizData = await processQuestionAnswer(interaction, quizData);
        if (updatedQuizData.questionsAnswered < QUESTIONS.length) {
            interaction.update(QUESTIONS[updatedQuizData.questionsAnswered]);
        } else {
            determineEggType(interaction, updatedQuizData);
        }
    }
}

async function determineEggType(interaction: ButtonInteraction, quizData: QuizData) {
    if (interaction.user.username === "MugiwaraNoNelli") {
        interaction.update({
            content: null,
            components: [],
            embeds: [EMBEDS.get(EggTypes.Nelli)!],
            files: [ATTACHMENTS.get(EggTypes.Nelli)!]
        });
    } else {
        const highestEggScore = Math.max(
            quizData.scrambledEggScore,
            quizData.friedEggScore,
            quizData.deviledEggScore,
            quizData.dinosaurEggScore
        );
        switch (highestEggScore) {
            case quizData.scrambledEggScore:
                interaction.update({
                    content: null,
                    components: [],
                    embeds: [EMBEDS.get(EggTypes.Scrambled)!],
                    files: [ATTACHMENTS.get(EggTypes.Scrambled)!]
                });
                break;
            case quizData.friedEggScore:
                interaction.update({
                    content: null,
                    components: [],
                    embeds: [EMBEDS.get(EggTypes.Fried)!],
                    files: [ATTACHMENTS.get(EggTypes.Fried)!]
                });
                break;
            case quizData.deviledEggScore:
                interaction.update({
                    content: null,
                    components: [],
                    embeds: [EMBEDS.get(EggTypes.Deviled)!],
                    files: [ATTACHMENTS.get(EggTypes.Deviled)!]
                });
                break;
            case quizData.dinosaurEggScore:
                interaction.update({
                    content: null,
                    components: [],
                    embeds: [EMBEDS.get(EggTypes.Dinosaur)!],
                    files: [ATTACHMENTS.get(EggTypes.Dinosaur)!]
                });
                break;
            default:
                break;
        }
    }
    if (interaction.message.interaction?.id === undefined) {
        handleError(interaction);
    } else {
        await keyv.delete(interaction.message.interaction.id);
    }
}

async function processQuestionAnswer(interaction: ButtonInteraction, quizData: QuizData) {
    quizData.questionsAnswered += 1;
    const eggType = ANSWERS.get(interaction.customId as ButtonIds);
    switch (eggType) {
        case EggTypes.Scrambled:
            quizData.scrambledEggScore += 1;
            break;
        case EggTypes.Fried:
            quizData.friedEggScore += 1;
            break;
        case EggTypes.Deviled:
            quizData.deviledEggScore += 1;
            break;
        case EggTypes.Dinosaur:
            quizData.dinosaurEggScore += 1;
            break;
        default:
            break;
    }
    if (interaction.message.interaction?.id === undefined) {
        handleError(interaction);
    } else {
        await keyv.set(interaction.message.interaction.id, quizData);
    }
    return quizData;
}

function handleError(interaction: ButtonInteraction) {
    interaction.update({
        content: "An error occurred :(",
        components: []
    });
}
