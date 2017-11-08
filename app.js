const Discord = require('discord.js');
const client = new Discord.Client();
var general = "373683685775376386"
var cessnabotlog = "377912394946445313"
client.on('ready',() => {
  console.log('Cessna Bot Online')
  client.user.setGame('Type -help for help!')
})
client.on('messageDelete', function(m){
  let ch = m.channel
	let guild = ch.guild
	guild.channels.get(cessnabotlog).send({embed: {
	    color: 3447003,
	    author: {
	      name: m.author.username,
	      icon_url: m.author.avatarURL
	    },
	    title: "Message Deleted",
	    description: "**Message Deleted Logs**",
	    fields: [{
	        name: "Message",
	        value: ("Message: ***\"" + m + "\"***")
	      },
	      {
	        name: "Author",
	        value: ("Author: ***"+ m.author.username+"***")
	      },
	      {
	        name: "Channel",
	        value: ("Channel: "+ ch)
	      }
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "©Cessna Of RBLX Bot Logs"
	    }
	  }
	});
})

client.on('guildMemberAdd',member =>{
	let guild = member.guild;
	guild.channels.get(general).send(`Welcome, ${member.user.username} to Cessna RBLX Official Discord! Have a good time here! :wink:`)
})
client.on('guildMemberRemove',member =>{
	let guild = member.guild;
	guild.channels.get(general).send(`Well, ${member.user.username} just left the Discord.. :sob:`)
})

client.on('messageUpdate', function(oldm,newm){
	if(oldm.content === newm.content) return;
  let ch = oldm.channel
	let guild = oldm.guild
	guild.channels.get(cessnabotlog).send({embed: {
	    color: 3447003,
	    author: {
	      name: oldm.author.username,
	      icon_url: oldm.author.avatarURL
	    },
	    title: "Message Edited",
	    description: "**Message Update Logs**",
	    fields: [{
	        name: "Old Message",
	        value: ("Old Message: ***\"" + oldm + "\"***")
	      },
				{
		        name: "New Message",
		        value: ("New Message: ***\"" + newm + "\"***")
		      },
	      {
	        name: "Author",
	        value: ("Author: ***"+ oldm.author.username+"***")
	      },
	      {
	        name: "Channel",
	        value: ("Channel: "+ ch)
	      }
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "© Cessna Of RBLX Bot Logs"
	    }
	  }
	});
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
      message.channel.send({embed: {
        color: 3447003,
        title: "Basic Commands",
        description: "All commands must begin with the prefix (-)",
        fields: [{
       name: "help",
       value: "Gives you this menu!"
     },
     {
       name: "urban",
       value: "Search your definition on the Urban Dictionary! -urban [definition]"

     },
     {
       name: "ping",
       value: "Pong!"

     },
     {
       name: "invite",
       value: "Gives you the invite code to the server!"

     },
     {
       name: "???",
       value: "??? (coming soon)"
     }]
      }})
    } else
    if(message.content.startsWith(prefix+'ping')) {
message.channel.send('Pinging!').then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
    } else
	if(message.content.startsWith(prefix + 'urban')){
		let question = args[1];
		if(!question) return message.channel.send("You must provide something to search!")
		message.reply("The definition for, " + args[1] + ' is this: http://www.urbandictionary.com/define.php?term='+ args[1])
} else
  if(message.content.startsWith(prefix+'invite')){
    message.reply("The Discord invite code is: https://discord.gg/pcwKKEr")
  }

});

client.login(process.env.BOT_TOKEN);
