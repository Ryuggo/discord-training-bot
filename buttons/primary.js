const { ButtonComponent } = require('@discordjs/builders');

module.exports = {
    data: new ButtonComponent()
        .setCustomId('primary')
        .setLabel('primary'),
	async execute(interaction) {
        await interaction.update({ content: 'A button was clicked!', components: [] });
        /*
		const filter = i => i.customId === 'primary';

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
            if (i.customId === 'primary') {
                await i.update({ content: 'A button was clicked!', components: [] });
            }
        });
        */
	},
};