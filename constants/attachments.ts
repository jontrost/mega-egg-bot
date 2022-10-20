import { AttachmentBuilder } from "discord.js";
import { EggTypes } from "../enums/egg-types.js";

export const ATTACHMENTS = new Map([
    [EggTypes.Scrambled, new AttachmentBuilder("./assets/scrambled-egg.png", { name: "scrambled-egg.png" })],
    [EggTypes.Fried, new AttachmentBuilder("./assets/fried-egg.png", { name: "fried-egg.png" })],
    [EggTypes.Deviled, new AttachmentBuilder("./assets/deviled-egg.png", { name: "deviled-egg.png" })],
    [EggTypes.Dinosaur, new AttachmentBuilder("./assets/dinosaur-egg.png", { name: "dinosaur-egg.png" })],
    [EggTypes.Nelli, new AttachmentBuilder("./assets/nelli-egg.png", { name: "nelli-egg.png" })]
]);
