//a
const config = require('./config.json')
const {Client, Events, Message} = require("discord.js")

//crear nuevo cliente
const client = new Client({
    intents: 3276799
})

client.on(Events.ClientReady, async()=>{
    console.log(`conectado como ${client.user.username}!`)
})

client.on(Events.MessageCreate, async(Message)=>{
    if(Message.content == "hola") Message.reply("Buenos dias")
});

client.login(config.token);


