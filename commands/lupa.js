const { SlashCommandBuilder } = require("discord.js");
const path = require("node:path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lupa")
    .setDescription("Chegue mais perto"),

  async execute(interaction) {
    try {
      const imagePath = path.join(__dirname, "..", "assets", "aranhobot.jpg");
      await interaction.reply({
        content: "🕸 O-olá...    não chegue muito perto...",
        files: [{
          attachment: imagePath,
          name: 'aranhobot.jpg'
        }]
      });
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    }
  }
};