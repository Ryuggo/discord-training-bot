const { ButtonComponent } = require('@discordjs/builders');

module.exports = {
    data: new ButtonComponent()
        .setCustomId('emoji')
        .setLabel('emoji'),
    async execute(interaction) {
        const emoji = interaction.client.emojis.cache.find(emoji => emoji.name === "WindowsDark"); // Not Working
        await interaction.update({ content: ':eggplant:' });
    },
};