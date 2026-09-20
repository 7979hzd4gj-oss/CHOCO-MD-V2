const { cmd } = require('../lib/command')
const config = require('../config')

cmd({
pattern: "choco",
desc: "Menu CHOCO-MD V2",
category: "main",
react: "🍫",
filename: __filename
},
async (conn, mek, m, { from, reply }) => {
let txt = `╭───『 CHOCO-MD V2 🍫 』───╮\n`
txt += `│ 👑 Owner: CHOCO\n`
txt += `│ 🤖 Bot: CHOCO-MD V2\n`
txt += `╰──────────────────╯\n\n`
txt += `📜 ${config.PREFIX}menu = menu complet\n`
txt += `📜 ${config.PREFIX}ping = vitesse\n`
txt += `> © CHOCO-MD V2`

await conn.sendMessage(from, {text: txt}, {quoted: mek})
})