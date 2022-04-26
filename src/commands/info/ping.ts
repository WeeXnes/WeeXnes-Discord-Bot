import { Command } from "../../structures/Command";

export default new Command({
    name: 'ping',
    description: 'Replies with pong!',
    run: async ({interaction}) => {
        interaction.followUp('pong!');
        interaction.member.createDM().then(channel => {
            channel.send('pong!');
        });
    }
});