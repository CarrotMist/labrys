const { MessageEmbed } = require('discord.js');

module.exports = {
	names: ['invite'],
	usage: 'INVITE',
	description: 'Invite Labrys to your server.',
	execute: (message, args) => {
		return message.client.generateInvite({ permissions: [
			'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_CHANNEL',
			'SEND_MESSAGES', 'MANAGE_MESSAGES', 'ATTACH_FILES',
			'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'MANAGE_ROLES'
		] })
			.then((invite) => message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.INFO)
				.setDescription(`Invite Labrys to your server: ${invite}`)
				.setTitle('Invite')
				.setURL(invite)
			))
			.catch((error) => console.log)
	}
};