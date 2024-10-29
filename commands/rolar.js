const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rolar")
    .setDescription("Sorteia um número entre 1 e o limite fornecido.")
    .addIntegerOption(option => option.setName("limite").setDescription("Limite do sorteio").setRequired(true)),

  async execute(interaction) {
    const limite = interaction.options.getInteger("limite");

    if (limite < 1) {
      await interaction.reply("O limite deve ser maior ou igual a 1.");
      return;
    }

    const resultado = Math.floor(Math.random() * (limite + 1));

    await interaction.reply(`Entre 1 e ${limite}, você sorteou: ${resultado}`);
  },
};
