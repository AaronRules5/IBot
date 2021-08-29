const {Client, Intents} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES], partials : ["MESSAGE","CHANNEL","REACTION"]});

const colorCode=(x)=>{
    return "\x1b["+x.toString()+"m";
}

const resetColor = colorCode(0);
const falseColor = colorCode(31);
const trueColor = colorCode(32);

if (!client.channels){
    console.log(`${falseColor}ERROR: Failed to get client.channels!${resetColor}`);
    process.exit();
}

const isFunction = (typeof client.channels.fetch == "function");
const noYes = ["No","Yes"];

function unBool(input){
    return input==true?1:0;
}

console.log(`
Can fetch Discord channels? 
${isFunction?trueColor:falseColor}${noYes[unBool(isFunction)]}!${resetColor}`
);

process.exit();