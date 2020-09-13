const { Client } = require('discord.js')
const downloadImage = require('./downloadImage')

const { token, guildId } = require('./config.json')

const bot = new Client()

bot
    .on('ready', async () => {
        const emojis = bot.guilds.get(guildId).emojis

        if(!emojis) return process.exit(0)

        emojis.forEach(e => downloadImage(e.url, (e.animated) ? e.name + '.gif' : e.name + '.png').then(() => console.log(`Emoji ${e.name} downloaded!`)))
    })
    .login(token)