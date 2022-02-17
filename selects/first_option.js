const { SelectMenuComponent } = require('@discordjs/builders');

module.exports = {
    data: new SelectMenuComponent()
        .setCustomId('first_option'),
    async execute(interaction) {
        await interaction.update({ content: 'Something was selected!' });
    },
};