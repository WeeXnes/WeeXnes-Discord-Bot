import { Command } from "../../structures/Command";
import config from "../../../config/downloads.json";
import fetch from "node-fetch";




export default new Command({
    name: 'steamswitcher',
    description: 'Sends you the link to the SteamSwitcher Download',
    run: async ({interaction}) => {

        interaction.followUp("Current Version: " + config.steamswitcher.currentVersion + " | Check your DMs!");
        interaction.member.createDM().then(channel => {
            channel.send("Here's your download: " + config.steamswitcher.downloadUrl);
        });
    }
});