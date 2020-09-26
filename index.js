// Ты что тут забыл? А ну пиздуй отсюда!
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
// bot cmds lmfao :D

if (command === 'ping') {
  message.channel.send('Pong.');

} else if (command === 'help') {
  message.channel.send('Bot commands\n.ping\n.about');
    
} else if (command === 'about') {
  message.channel.send('about.');

}	else if (command === '.avatar') {
			if (!message.mentions.users.size) {
				return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
			}
	};
}); 

client.login(token);