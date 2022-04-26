import { Command } from "../../structures/Command";
import config from "../../../config/weexneshub.json";

export default new Command({
    name: 'weexneshub',
    description: 'Sends you the link to the WeexnesHub Download',
    run: async ({interaction}) => {
        interaction.followUp("Current Version: " + config.currentVersion + " | Check your DMs!");
        interaction.member.createDM().then(channel => {
            channel.send("Here's your download: " + config.downloadUrl);
        });
    }
});