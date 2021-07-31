/*
This discord bot was first conceptualized by Tarrabyte and
was cleaned up by AaronRules5!
Have fun!
*/

 const Discord = require("discord.js");
 const client = new Discord.Client();

 client.on("ready", () => {client.user.setUsername("IsabelleBot");
  console.log(`Logged in as ${client.user.tag}!`);
 });


 var prefix = ">";

 if (prefix.length != 1){
   console.log("Error! Command prefix character length is not equal to 1! This may cause problems! Exiting...")
   return false;
 }
 
 function uploadFile(msg,path,string){
   if (!string) string = "";
   msg.reply(string,{files:[path]});
 }
 

 function changeStatus(msg){
  if (msg.author.id == 90814302981754880){
    client.user.setGame(msg.content.split(" ")[1]);
    }
    else {
      msg.channel.send("Ask Tarra to set it. You don't have the permission!");
    }
}


  /*
 The name of the command, and the message sent by the bot are in "key" : "value" pairs.

 The "key" being the command name, and the "value" being the message the bot replies with.
 For example...

 "ping" : "Pong!",

 "ping" is the key... (the command name)
 "Pong!" is the value... (the reply)

 You can also have a FUNCTION be the value instead of just a normal reply, and the function will be called instead!
 The function will be called with the original message as the parameter.

 Setting values to functions is especially useful when trying to do complicated things such as uploading files!
 Example: "surprised" : function(msg){uploadFile(msg,"./isabelle/isabelle shocked.png")},

 Quotes and commands are pretty much the same thing except commands CANNOT have spaces, and they MUST start with a ">" or whatever the prefix variable is set to.
 This is done in case parameters are added to commands in the future...

 Oh also in a value you can do "@" and an existing key name to copy a value from that key name.

*/
 var messageList = {
  
  "quotes" : {
    "0" : "@help",
    "invite" : "https://discord.gg/KG39sSM6CZ",
    "OwO whats dis?" : "cancer. Thats what you are.",
    "Isabelle needs a bath" : function(msg){uploadFile(msg,"./isabelle/isabelle shocked.png", ";_; no bath for yello dog!")},
    "surprised" : function(msg){uploadFile(msg,"./isabelle/isabelle shocked.png")},
    "Dad can I" : "go ask your mother",

    "hi" : "y̪͟ó̪̭̬u͈͇͔͙̜͈̤̻͚̗r̗e͇̹̱̦̯͟ͅ ͔a̭͇͕͠ͅl̜̪̩l̙̫̥ ̱̘̞͇͘g͓̘͖oi̱͠n̵̻͇͔͕̠̰̠g͙͓̞̜̰ͅ ̙͝to͉͈͓̕ ̟͉d̨͖̠̼̗̹͙͖i̯̩e̞͠!̥͍͈",

    "xD" : "Y̧̩͍͚̤o̶͖̘̥͖̟̪ͅuṟ̦͢ẹ ́f͈͇͖u̟c̶̰̼̜̞k̺̼͇͇͠ị̣̲̻̠́ṋ̫͉̜̱͓͙g̥ ̯̙͇̹̟̼c̗̥̦͓͍̦͎a͉̹̝̼̳n̮c̞̼͍er̘͉̰̬͔",

    "ayy" : "LMAO",
    "FML" : "I know how you feel. I too wish I could die.",
    "Good girl" : "`*Meows*`",
    "test" : "I am online.",
    "Who's the admin?" : "Tarrabyte, Tarra Sama. He's really nice to most people. Be nice to him and he'll be nice to you! You can ask him anything you want! He doesn't mind!",
    "Issy, what are you?" : "Tarra's horny little slut ♥",
    "Issy is a thot" : "Tarra's thot ♥",

  }, 

  "commands" : {
    "getping" : function(msg){msg.reply(`Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)},
    "ping" : "Pong!",
    "what-is-discord" : "**__What is Discordapp?__** \n Discord app is a client that allows you to talk to a lot of different users at once. It allows you to communicate with several different people at once. Ever been on an IRC chat? AIM? AOL or Compuserve chat rooms? Or even Skype. Think that. It's alot easier. Anyone can set up a server, set it's region, and so forth.\n **__Why should you use Discord over?__** \n Discordapp is based on servers. You could be in the middle of the desert or the ocean and still be able to talk to the server you're in as long as you have a stable connection to that sattelite! \n Discordapp was originally meant for gamers all over for PC but it turned into more. It turned into people using it as the new chatroom method, making friendships and making their own personal groups! Discord has so many different uses. I suggest checking out discord.me for more groups! Even asking people in other servers what they think!",
    "ibot" : "My name is Isabelle. My initial creator is Tarrabyte, and I was edited by AaronRules5. I was created as a welcome bot, but my functions may go beyond that in the future. Lets see what all I do!",
    "isabellbot" : "@ibot",
    "isabellebot" : "@ibot",
    "help" : "**__If you want to use a command, use > then use coms. The commands don't have spellcheck so make sure to get them right.__**",
    "tags" : "**__Tags for Isabelle__**\n Ask a @mod to make you to tag you! Curret tags are @furries @creator @artist that you can pick up!",
    "getting-started" : "**__So you wanna sell here eh?__**\n So you've come here to ask for a space in the server? That's cool! Our goal here with this server is to help people find work, make some extra money even trade if they wish! \n To get a Category and channels of your own, please show to the admins that you have at least 1 website that you host your content too. This can be any social media, Etsy, or directly! \n",
    "coms" : "**__Commands!__** \n __Commands can be used by using the `>` and then any of the known commands.__ \n Isabelle swag \n invite`*` \n help \n tags \n what is discord \n ping \n coms (commands) \n hi \n Dad can I \n w - Welcome \n xD`*` \n DDLC \n MHA - My Hero Acadamia \n lc - lewd images \n nintendo \n OwO whats dis?`*` getting-started \n",
    "monika" : function(msg){uploadFile(msg,"./DDLC/monika.jpg")},
    "sayori" : function(msg){uploadFile(msg,"./DDLC/sayori_death.jpg")},
    "yuri" : function(msg){uploadFile(msg,"./DDLC/yuri_death.png")},
    "natsuki" : function(msg){uploadFile(msg,"./DDLC/natsuki.png")},
    "puke" : function(msg){uploadFile(msg,"./DDLC/puke.png")},
    "deku1" : function(msg){uploadFile(msg,"./mha/deku_excite.gif")},
    "tea" : function(msg){uploadFile(msg,"./AIW/tea_time.jpg")},
    "lewd" : function(msg){uploadFile(msg,"./lewd/lewd.jpg")},
    "tits" : function(msg){uploadFile(msg,"./naughty/tits.jpg")},
    "boobies" : function(msg){uploadFile(msg,"./naughty/boobies.jpg")},
    "ass" : function(msg){uploadFile(msg,"./naughty/ass.jpg")},
    "pussy" : function(msg){uploadFile(msg,"./naughty/pussy.jpg")},
    "faggotree" : function(msg){uploadFile(msg,"./naughty/faggot_tree.jpg")},
    "black-cock" : function(msg){uploadFile(msg,"./naughty/black cock.jpg")},
    "1" : function(msg){uploadFile(msg,"./1/go away 1.gif")},
    "nintendo" : "**__Nintendo Commands__** \n adding-player \n",
    "isabelle-swag" : "**_Isabelle Commands__** \n These are a lost of commands that you can use on me, _Isabelle.  \n _Isabelle\n tea \n _Isabelle, what are you?",
    "MHA" : "**__My Hero Acadamia Commands__** \n deku1 \n",
    "naughty" : "**__Naughty commands__** \n  tits \n boobies \n black-cock \n pussy \n ass \n",
    "lc" : "**__Lewds__** \nLewd \n naughty",
    "implying" : " ```css\n >FAGGOT!```",
    "DDLC" : "**__Doki Doki literature Club Commands__** \n natsuki \n yuri \n monika \n sayori \n puke \n ",
    "w" : " **__Welcome!__** \n```FIX\nYou have entered Furville Mall! What is this place? It's a furry creator mall of sorts! Do you create art? Fursuits? Paws? Tails?Ears? feet? Anything of that nature is welcome here!You are welcome to talk about things in #Just-A-chat to others. Please make sure to read the #rules, the #readme is optional, but helpful. A small reminder to mute the channels you don't wish to use. For a list of commands please type >help and I will assist you with what I can!\n``` \nTo get started type in **>getting started** to get the help you need here!",
    "adding-player" : "**__How to add a person to the Nintendo Switch__** \n \n1. Goto the icon at the top left corner of your Switch's home screen. Here you will see where all your user main info. **Profile, Friend List, Friend Suggestions, Add friends, User settings**. \n \n1b. By clicking on your profile, you will your username which is editable, your current game, whether or your online or not,  your **friend code** and then your list of games you've played \n\n2. Click the **Add Friend** function, this will will allow you to type in another person's friend code as well.\nFor any other help, please ask in the Nintendo chat.",
    "status" : function(msg){changeStatus(msg)},
  },
}

//Let's hope this works...
for (var x in messageList["commands"]){
  if(messageList.hasOwnProperty(x) && x.indexOf(" ") != -1){
    console.log("WARNING: messageList commands contains a command key with a space: \"" + x + "\"! Automatically moving to quotes list!");
    messageList["quotes"][x] = messageList["commands"][x];
    delete messageList["commands"][x];
  }
}


//This getKeyValue function I made is a straight up MIRACLE...
//AND it should work if parameters are ever added to commands!!! :D
function getKeyValue(object,key){
  var objectKeys = Object.keys(object);
  for (var i = 0; i < objectKeys.length; i++){
    if (objectKeys[i].toLowerCase() == key.toLowerCase()){
      return object[objectKeys[i]];
    }
    if (typeof(object[objectKeys[i]]) == "object"){
      var result = getKeyValue(object[objectKeys[i]],key);
      if (result != null) return result;
    }
  }
  return null;
}

client.on('message', msg => {

  var quoteGrab = getKeyValue(messageList["quotes"],msg.content);

  if (msg.content.startsWith(">") && !quoteGrab){
    var comGrab = getKeyValue(messageList["commands"],msg.content.substr(1).split(" ")[0])
  }
  
  var mergeGrab = quoteGrab || comGrab;

  if (!mergeGrab){
    return true;
  }

  if (typeof(mergeGrab) == "string"){
  if (mergeGrab.startsWith("@")) mergeGrab = getKeyValue(messageList,mergeGrab.substr(1));
  msg.reply(mergeGrab);
  return true;
  }
 
  if (typeof(mergeGrab == "function")){
    mergeGrab(msg);
    return true;
  }
  
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name == "main");
  if (!channel){
    return false;
  }
channel.send(" **__Welcome!__** \n```FIX\nYou have entered Furville Mall! What is this place? It's a furry creator mall of sorts! Do you create art? Fursuits? Paws? Tails?Ears? feet? Anything of that nature is welcome here! We will try to help you sell! Ask how! You are welcome to talk about things in #Just-A-chat to others. Please make sure to read the #rules, the #readme is optional, but helpful. A small reminder to mute the channels you don't wish to use. For a list of commands please type >help and I will assist you with what I can!```\n \nTo get started type in **>getting started** to get the help you need here!"
);
});

client.login("ENTER-DISCORD-TOKEN-HERE");

 