const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Display a message with buttons'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('secondary')
					.setLabel('Secondary')
					.setStyle('SECONDARY'),
				new MessageButton()
					.setCustomId('success')
					.setLabel('Success')
					.setStyle('SUCCESS')
					.setDisabled(true),
				new MessageButton()
					.setLabel('Link')
					.setStyle('LINK')
					.setURL("https://www.google.com"),
				new MessageButton()
					.setCustomId('emoji')
					.setStyle('DANGER')
					.setEmoji(interaction.client.emojis.cache.find(emoji => emoji.name === "WindowsDark")),
			);

		await interaction.reply({ content: 'Pong!', ephemeral: true, components: [row] });
	},
};