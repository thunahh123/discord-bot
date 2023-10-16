const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pna')
		.setDescription('Retrieve audio pronunciation of an English word.')
		.addStringOption(option => option.setName('word').setDescription('The word to retrieve audio pronunciation')),
	async execute(interaction) {
		const value = interaction.options.getString('word');
        if (value){
            //fetch audio pronunciation
            let first_letter = 'v';
            let audio_title = 'volumi02';
            const attachment = await new AttachmentBuilder(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${first_letter}/${audio_title}.mp3`, {name:`${value}.mp3`});
            interaction.reply({files:[attachment]});
        }
        else{
            return interaction.reply('No word was provided!');
        }
	},
};