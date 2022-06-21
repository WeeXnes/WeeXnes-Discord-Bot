import { Command } from "../../structures/Command";
import config from "../../../config/downloads.json";
import fetch from "node-fetch";




export default new Command({
    name: 'weexnessuite',
    description: 'Sends you the link to the WeexnesSuite Download',
    run: async ({interaction}) => {

        interaction.followUp("Current Version: " + config.weexnessuite.currentVersion + " | Check your DMs!");
        interaction.member.createDM().then(channel => {
            channel.send("Here's your download: " + config.weexnessuite.downloadUrl);
        });
    }
});