const { SlashCommandBuilder } = require("discord.js");
const path = require("node:path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nada")
    .setDescription("Será que tem algo aqui????"),

  async execute(interaction) {
    try {
      const imagePath = path.join(__dirname, "..", "assets", "nada-aqui.png");
      await interaction.reply({
        content: "Acho que não tinha **NADA** aqui...",
        files: [{
          attachment: imagePath,
          name: 'nada-aqui.jpg'
        }]
      });
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    }
  }
};
