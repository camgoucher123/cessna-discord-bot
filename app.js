const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('Cessna Bot Online')
  client.user.setGame('Type -help for help!')
})


var prefix = "-"
client.on('message', message => {
    let args = message.content.split(' ');
    var argsresult = args.join(' ');

    if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;

    if (message.channel.type === "dm"){
      message.channel.send("Please use the Cessna Of RBLX Discord for commands")
      return
    };

    if(message.content.startsWith(prefix+'help')){
      message.reply("Sorry! The bot is currently being developed, come back later!")
    } else
    if(message.content.startsWith(prefix+'ping')) {
message.channel.send('Pinging!').then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
    } else
	if(message.content.startsWith(prefix + 'urban')){
		let question = args[1];
		if(!question) return message.channel.send("You must provide something to search!")
		message.reply("The definition for, " + args[1] + ' is this: http://www.urbandictionary.com/define.php?term='+ args[1])
}

});


client.login(process.env.BOT_TOKEN);
