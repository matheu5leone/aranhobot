const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nickname')
    .setDescription('Change the nickname of all members')
    .addStringOption(option => 
      option.setName('newnickname')
      .setDescription('The new nickname for all members')
      .setRequired(true)
    ),
  
  async execute(interaction) {
    console.log('Command executed');
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      console.log('User lacks administrator permissions');
      return interaction.reply('Você não tem permissão para usar este comando.');
    }

    const newNickname = interaction.options.getString('newnickname');
    console.log(`New nickname: ${newNickname}`);

    await interaction.deferReply();  // Adiar a resposta para evitar expiração

    try {
      const guild = interaction.client.guilds.cache.get(interaction.guild.id);
      const queries = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];  // Várias consultas para cobrir todos os membros
      let members = new Map();

      for (const query of queries) {
        const fetchedMembers = await guild.members.search({ query, limit: 1000 });
        fetchedMembers.forEach(member => members.set(member.id, member));
      }

      console.log(`Fetched ${members.size} unique members`);

      for (const member of members.values()) {
        try {
          await member.setNickname(newNickname);
          console.log(`Changed nickname for ${member.user.tag} to ${newNickname}`);
        } catch (error) {
          console.error(`Failed to change nickname for ${member.user.tag}:`, error);
        }
      }

      await interaction.editReply(`Changed nickname for all members to ${newNickname}`);
    } catch (error) {
      console.error('Error fetching members:', error);
      await interaction.editReply('Houve um erro ao tentar mudar os apelidos.');
    }
  },
};
