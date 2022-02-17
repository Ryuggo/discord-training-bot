const { SelectMenuComponent } = require('@discordjs/builders');

module.exports = {
    data: new SelectMenuComponent()
        .setCustomId('second_option'),
    async execute(interaction) {
        await interaction.update({ content: 'Something else was selected!' });
    },
};