const { ButtonComponent } = require('@discordjs/builders');

module.exports = {
    data: new ButtonComponent()
        .setCustomId('secondary')
        .setLabel('secondary'),
	async execute(interaction) {
        await interaction.update({ content: 'SECONDARY' });
	},
};