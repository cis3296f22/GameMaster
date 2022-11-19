const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')

require("dotenv").config()

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]
})

let bot = {
    client
}
// Greetings message to new servers
const embed = new MessageEmbed()
        .setTitle("GameMaster")
        .setDescription("Thank you for inviting me to the server!!\nTo play a game use a slash command.\nHere are a list of my slash commands:")
        .setColor("#ffffff")
        .addFields({ name: 'TicTacToe', value: '/tictactoe' })
        .addFields({ name: 'Rock Paper Scisscors', value: '/rps' })
        .addFields({ name: 'HiLo Card Game', value: '/hilo' })
        .setTimestamp()

  
client.on('guildCreate', (g) => {
    const channel = g.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))
    channel.send({ embeds: [embed] })
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.slashcommands = new Discord.Collection() 

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return 
    if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply("You do not have permission for this command")

    slashcmd.run(client, interaction)
})

function sum(a, b) {
    return a + b;
  }
  module.exports = sum;

client.login(process.env.TOKEN)
