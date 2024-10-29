const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("odio")
    .setDescription("Calcula o ódio entre dois membros.")
    .addUserOption(option => option.setName("membro1").setDescription("Primeiro membro").setRequired(true))
    .addUserOption(option => option.setName("membro2").setDescription("Segundo membro").setRequired(true)),

  async execute(interaction) {
    const membro1 = interaction.options.getMember("membro1");
    const membro2 = interaction.options.getMember("membro2");

    // Gere uma porcentagem aleatória entre 0 e 100 para simular a compatibilidade
    const porcentagem = Math.floor(Math.random() * 101);

    const emoji = porcentagem <= 1 ? "🙂" : porcentagem < 33 ? "🙄" : porcentagem < 66 ? "😡" : porcentagem < 100 ? "🤬" : "💩💀👹💀💩"

    await interaction.reply({
      content: `O ÓDIO entre ${membro1} e ${membro2} é ${porcentagem}%\n ${emoji}`
    });
  },
};
