const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sorteio')
    .setDescription('Inicia um sorteio entre os membros que reagirem a uma mensagem específica'),
  
  async execute(interaction) {
    console.log('Sorteio iniciado');
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      console.log('User lacks administrator permissions');
      return interaction.reply('Você não tem permissão para usar este comando.');
    }

    // Envia a mensagem para reagir
    const sorteioMessage = await interaction.reply({
      content: 'REAGA PARA PARTICIPAR DO SORTEIO',
      fetchReply: true
    });

    // Adiciona uma reação à mensagem
    const reactionEmoji = '🎉';  // Escolha o emoji de reação
    await sorteioMessage.react(reactionEmoji);

    // Espera um tempo ou um comando adicional para finalizar o sorteio
    setTimeout(async () => {
      // Coleta as reações na mensagem
      const reaction = sorteioMessage.reactions.cache.get(reactionEmoji);
      if (!reaction) {
        return interaction.followUp('Ninguém reagiu à mensagem.');
      }

      const users = await reaction.users.fetch();
      const participants = users.filter(user => !user.bot);

      if (participants.size === 0) {
        return interaction.followUp('Nenhum participante válido.');
      }

      // Sorteia um participante
      const winner = participants.random();
      interaction.followUp(`O vencedor do sorteio é: ${winner.username}!`);
    }, 60000);  // Espera 60 segundos antes de sortear, ajuste conforme necessário
  },
};
