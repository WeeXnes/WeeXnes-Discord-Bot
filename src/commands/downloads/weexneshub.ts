import { Command } from "../../structures/Command";
import config from "../../../config/downloads.json";
import fetch from "node-fetch";





export default new Command({
    name: 'weexnessuite',
    description: 'Sends you the link to the WeexnesSuite Download',
    run: async ({interaction}) => {
        let version:String;
        let downloadUrl:String;
        fetch("http://www.weexnes.com:5169/", {
            method: 'GET'
        }).then(res => res.json())
            .then(json => {
                console.log(json.tag_name)
                version = json.tag_name;
                downloadUrl = json.download_url;
                interaction.followUp("Current Version: " + version + " | Check your DMs!");
                interaction.member.createDM().then(channel => {
                    channel.send("Here's your download: " + downloadUrl);
                });
            })
            .catch(err => {
                console.log(err)
                interaction.followUp("An error has occured!");
            });

    }
});