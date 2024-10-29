const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lupa")
    .setDescription("Chegue mais perto"),

  async execute(interaction) {
    try {
      await interaction.reply({
        content: "🕸 O-olá...    não chegue muito perto...",
        files: [{
          attachment: 'D:\\Projetos\\discord-bot\\assets\\aranhobot.jpg',
          name: 'aranhobot.jpg'
        }]
      });
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    }
  }
};