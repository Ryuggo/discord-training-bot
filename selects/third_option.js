const { SelectMenuComponent } = require('@discordjs/builders');

module.exports = {
    data: new SelectMenuComponent()
        .setCustomId('third_option'),
    async execute(interaction) {
        await interaction.update({ content: 'Last one'/*, components: []*/ });
    },
};