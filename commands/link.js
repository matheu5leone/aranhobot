const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('link')
    .setDescription('Mostra o link da loja oficial.'),
  async execute(interaction) {
    try {
      await interaction.reply('🛒 Confira nossa loja: https://minhaloja.com.br');
    } catch (error) {
      console.error('Erro ao executar /link:', error);

      try {
        if (interaction.deferred || interaction.replied) {
          await interaction.editReply('Houve um erro ao enviar o link da loja!');
        } else {
          await interaction.reply('Houve um erro ao enviar o link da loja!');
        }
      } catch (err) {
        console.error('Erro ao responder após falha no comando /link:', err);
      }
    }
  },
};
