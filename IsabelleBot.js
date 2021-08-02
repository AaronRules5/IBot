
// This discord bot was first conceptualized by Tarrabyte and was edited by AaronRules5!

 const Discord = require("discord.js");
 const client = new Discord.Client();
 const fs = require('fs');

 var defaultGuildID = "870370270551105556";
 var defaultBotChannelID = "870918616764268595";
 var DISCORD_TOKEN = "";
 var prefix = ">";

 if (prefix.length != 1){
   console.log("Error! Command prefix character length is not equal to 1! This may cause problems! Exiting...")
   process.exit(1);
 }

 var creatorIDs = [
  "90814302981754880", //Tarra
  "305454678316154900" //Aaron >:D
 ];

 function sendMessageToChannelID(channelID,msg){
  return client.channels.fetch(channelID).then(channel => channel.send(msg));
 }

 client.on("ready", () => {
   client.user.setUsername("IsabelleBot");
   console.log(`Logged in as ${client.user.tag}!`);
   sendMessageToChannelID(defaultBotChannelID, "I have been activated!");
 });

 client.on("guildMemberAdd", member => {
   if (member.user == client.user) return true;
   member.createDM(true).then(newDM => {
   newDM.send("**__Welcome " + member.user.username + "!__** \n```FIX\nYou have entered Furville Mall! What is this place? It's a furry creator mall of sorts! Do you create art? Fursuits? Paws? Tails?Ears? feet? Anything of that nature is welcome here! We will try to help you sell! Ask how! You are welcome to talk about things in #Just-A-chat to others. Please make sure to read the #rules, the #readme is optional, but helpful. A small reminder to mute the channels you don't wish to use. For a list of commands please type >help and I will assist you with what I can!```\n \nTo get started type in **>getting-started** to get the help you need here!");
   });
 });


 function hasCreatorID(id){
   for (var i = 0; i < creatorIDs.length; i++){
     if (id == creatorIDs[i]) return true;
   }
   return false;
 }
 
 function uploadFile(msg,path,string){
   if (!string) string = "";
     msg.reply(string,{files:[path]}).then(value=>{return value},reason=>{
       console.log("Warning! File not found! \"" + path + "\"!")
     });
 }

 function changeStatus(msg){
  if (!hasCreatorID(msg.author.id)){
    msg.channel.send("Ask Tarra to set it. You don't have the permission!");
    return false;
  }
  
  client.user.setGame(msg.content.split(" ").shiftFor(1).join(" "));
 }

 var messageList;

 function readMessageList(){
  var fileData = fs.readFileSync("./messageList.json").toString();

  if (!fileData){
    console.log("ERROR: Could not read messageList.json! Exiting...");
    process.exit(1);
  }

  try{
    messageList = JSON.parse(fileData);
  }
  catch(e){
    console.log("Could not successfully parse messageList file contents into a JSON! Exiting...");
    process.exit(1);
  }

  if (typeof(messageList) != "object"){
    console.log("ERROR: messageList is not of type object... somehow! Exiting...");
    process.exit(1);
  }

  console.log("Successfully loaded messageList.json!");
  return true;
}

 readMessageList();

 function addToMessageList(key,value){

   var keyType = "!quotes!";
   var newKey = key;

   if (key.startsWith(prefix)){
     keyType = "!commands!";
     newKey = key.substr(1);
   }

   try{
     messageList[keyType][newKey] = value;
   }
   catch(e){
     console.log("ERROR! Could not set messageList " + keyType + " with key: \"" + newKey + "\" and value: \"" + value + "\"!");
     return false;
   }

  var fileData = fs.readFileSync("./messageList.json").toString();
  var indexOfEdits = fileData.indexOf("\n",fileData.indexOf(keyType)) + 1;
  var editString = fileData.substr(0,indexOfEdits) + "\"" + newKey + "\" : \"" + value + "\",\n" + fileData.substr(indexOfEdits);
  fs.writeFileSync("./messageList.json",editString);

  console.log("Successfully added command and updated messageList.json!");
  return true;
}

function dumpMessageList(){
  try {
  var fileData = Buffer.from(JSON.stringify(messageList),"utf8");
  fs.writeFileSync("./dump.json",fileData);
  }
  catch(e){
    console.log("ERROR! Could not dump internal messageList!!!");
    return false;
  }
  return true;
}

//I changed this because I don't trust "for in" loops.
 var comNameList = Object.keys(messageList["!commands!"]);
 for (var i = 0; i < comNameList.length; i++){
   var x = comNameList[i];
   if(messageList.hasOwnProperty(x) && x.indexOf(" ") != -1){
     console.log("WARNING: messageList commands contains a command key with a space: \"" + x + "\"! Automatically moving to quotes list!");
     messageList["!quotes!"][x] = messageList["!commands!"][x];
     delete messageList["!commands!"][x];
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

// This is probably a bad idea but I want to RETURN the newly shifted array, not the value I shifted out.
// I also want to shift more than once.
// I also want it to be a member function so... Cry about it.

 Array.prototype.shiftFor = function(num){
   var newObj = this;
   for (var i = 0; i < num; i++){
     newObj.shift();
   }
   return newObj;
 }



 client.on('message', msg => {
  if((msg.guild.id != defaultGuildID) && (typeof(msg.channel) != Discord.DMChannel)){
    return false;
  }
  if (msg.author == client.user){
    return false;
  }
  //HARDCODED commands! Use wisely!
  if (msg.content.startsWith(prefix)){
    switch (msg.content.substr(1).split(" ")[0]){
      case "addcom":
        if (!hasCreatorID(msg.author.id)){
          msg.reply("You do not have permission to add commands!");
          return false;
        }
        if(!addToMessageList(msg.content.split(" ")[1],msg.content.split(" ").shiftFor(2).join(" "))){
          msg.reply("Could not add command!");
          return false;
        }
        msg.reply("Successfully added command!");
        return true;
        break;

      case "reloadcom":
        if (!hasCreatorID(msg.author.id)){
          msg.reply("You do not have permission to reload the messageList.js file!");
          return false;
        }
        if (!readMessageList()){
          msg.reply("Could not reload messageList! Use >dumpcom to dump my internal messageList as a last resort!");
          return false;
        }
        msg.reply("Successfully reloaded the messageList!");
        return true;
        break;

      case "dumpcom":
        if (!hasCreatorID(msg.author.id)){
          msg.reply("You do not have permission to dump the internal messageList!");
          return false;
        }
        if (!dumpMessageList()){
          msg.reply("Could not dump the internal messageList!");
          return false;
        }
        return true;
        break;
    }
 }

  var quoGrab = getKeyValue(messageList["!quotes!"],msg.content);

  if (msg.content.startsWith(prefix)){
    var comGrab = getKeyValue(messageList["!commands!"],msg.content.substr(1).split(" ")[0])
  }
  
  var mergeGrab = quoGrab || comGrab;

  if (!mergeGrab) return false;
  
  if (typeof(mergeGrab) == "string"){
    if (mergeGrab.startsWith("@")) mergeGrab = getKeyValue(messageList,mergeGrab.substr(1));
    if (mergeGrab.startsWith("function")){
      eval("var newFunc = " + mergeGrab);
      newFunc(msg);
      return true;
    }
    msg.reply(mergeGrab);
    return true;
  }

  console.log("WARNING: mergeGrab is not a string! Objects are NOT supported yet! (possible parameters for commands in the future)")
  return false;

});

client.login(DISCORD_TOKEN);