const { cmd } = require('../lib/command')
const config = require('../config')

cmd({
pattern: "choco",
desc: "CHOCO-MD V2 Menu",
category: "main",
react: "🔥",
filename: __filename
},
async (conn, mek, m, { from }) => {
let txt = "*CHOCO-MD V2*\n\n"
txt += "Owner: CHOCO\n"
txt += "Bot: CHOCO-MD V2\n"
txt += `Prefix: ${config.PREFIX}\n\n`
txt += `${config.PREFIX}menu\n`
txt += `${config.PREFIX}ping\n`
txt += `${config.PREFIX}choco\n\n`
txt += "Powered by CHOCO"
await conn.sendMessage(from, { text: txt }, { quoted: mek })
})