import { Command } from "../../structures/Command";
import config from "../../../config/downloads.json";
import fetch from "node-fetch";




export default new Command({
    name: 'r6downloader',
    description: 'Sends you the link to the r6downloader Download',
    run: async ({interaction}) => {

        interaction.followUp("Current Version: " + config.r6downloader.currentVersion + " | Check your DMs!");
        interaction.member.createDM().then(channel => {
            channel.send("Here's your download: " + config.r6downloader.downloadUrl);
        });
    }
});